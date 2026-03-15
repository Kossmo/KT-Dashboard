export interface Site {
  name: string;
  slug: string;
  url: string;
  description: string;
  tags: string[];
  color: string;
  status: 'live' | 'coming-soon';
}
