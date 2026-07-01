export interface StatMetric {
  id: string;
  title: string;
  value: string;
  trend: number;
  iconName: 'dollar' | 'percent' | 'receipt' | 'activity';
}

export interface DailyData {
  date: string;
  revenue: number;
  profit: number;
}

export interface AIRecommendation {
  id: string;
  title: string;
  description: string;
  impact: 'High' | 'Medium' | 'Low';
  actionLabel: string;
}
