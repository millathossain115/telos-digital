import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        {
          error: "RESEND_API_KEY is not configured.",
          missingConfig: true,
        },
        { status: 503 }
      );
    }

    const resend = new Resend(apiKey);
    const toEmail = process.env.CONTACT_NOTIFICATION_EMAIL || "millathossain115@gmail.com";

    const { data, error } = await resend.emails.send({
      from: "Telos Intake <onboarding@resend.dev>",
      to: [toEmail],
      replyTo: email,
      subject: `Project Intake: ${name} via Telos Digital`,
      text: `New Project Discovery Intake:\n\nName: ${name}\nEmail: ${email}\n\nProject Scope & Message:\n${message}\n\n--\nTelos Digital Intake System`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e5e5e5; border-radius: 12px; background: #ffffff;">
          <div style="border-bottom: 2px solid #b8860b; padding-bottom: 12px; margin-bottom: 20px;">
            <h2 style="margin: 0; color: #141312; font-size: 20px; font-weight: 700;">Telos Digital // Project Intake</h2>
            <span style="font-family: monospace; font-size: 11px; color: #b8860b; letter-spacing: 0.05em;">NEW ENGINEERING INQUIRY</span>
          </div>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 6px 0; color: #737373; font-size: 13px; width: 90px; font-weight: 500;">Client Name:</td>
              <td style="padding: 6px 0; font-weight: 600; color: #141312; font-size: 14px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #737373; font-size: 13px; font-weight: 500;">Client Email:</td>
              <td style="padding: 6px 0; font-size: 14px;"><a href="mailto:${email}" style="color: #b8860b; text-decoration: underline;">${email}</a></td>
            </tr>
          </table>
          <div style="background: #faf8f5; border: 1px solid #ebe5dc; border-radius: 8px; padding: 16px; margin-bottom: 20px;">
            <div style="font-size: 11px; font-family: monospace; color: #888; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.05em;">Project Scope & Challenges:</div>
            <p style="margin: 0; white-space: pre-wrap; font-size: 14px; line-height: 1.6; color: #141312;">${message}</p>
          </div>
          <div style="font-size: 11px; font-family: monospace; color: #a3a3a3; border-top: 1px solid #f0f0f0; padding-top: 12px;">
            Reply directly to this email to respond to ${name}.
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("[Resend API Error]:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err: any) {
    console.error("[Contact API Exception]:", err);
    return NextResponse.json(
      { error: err?.message || "Failed to deliver message." },
      { status: 500 }
    );
  }
}
