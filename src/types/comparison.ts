export interface ComparisonSpec {
  label: string;
  val: string;
  negative?: boolean;
}

export interface ComparisonCardData {
  id: string;
  tag: string;
  badge?: string;
  title: string;
  subtitle: string;
  footerNote: string;
  isHighlight: boolean;
  specs: ComparisonSpec[];
}

export interface ComparisonData {
  comparisonCards: ComparisonCardData[];
}
