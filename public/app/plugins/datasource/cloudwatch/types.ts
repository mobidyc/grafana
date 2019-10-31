import { DataQuery } from '@grafana/ui';

export interface CloudWatchQuery extends DataQuery {
  id: string;
  region: string;
  namespace: string;
  metricName: string;
  dimensions: { [key: string]: string | string[] };
  statistics: string[];
  period: string;
  expression: string;
  alias: string;
  highResolution: boolean;
}
