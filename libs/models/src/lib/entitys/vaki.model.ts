export interface Vaki {
  description: string;
  start_date: number;
  close_date: number;
  name: string;
  summary: string;
  url: string;
  photo?: string;
  video?: string;
  //country: Country['isoCode'];
  categories: String[];
}
