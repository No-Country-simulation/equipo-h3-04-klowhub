export interface ICourse {
  id: string;
  title: string;
  description: string;
  image: string;
  isFree: boolean;
  price: number;
  type: string;
  level: string;
  language: string;
  contentPillars: any[];
  sectors: any[];
  functionalities: any[];
  // platforms: any[];
  platform: string;
  platformsAndTool: any[];
  owner: any;
  modules: any[];
}
