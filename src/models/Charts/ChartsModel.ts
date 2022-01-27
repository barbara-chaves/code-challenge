export type ChartType = "gradient" | "choropleth" | "basic" | "timeline";

export interface ChartDataItems {
  color: string;
  name?: string;
}

export interface ChartDataTimeline {
  step: number;
  speed: number;
  dateFormat: string;
  maxDate: string;
  minDate: string;
}

export default interface ChartData {
  id: string;
  name: string;
  type: ChartType;
  items?: ChartDataItems[];
  timeline?: ChartDataTimeline;
  description: string;
}
