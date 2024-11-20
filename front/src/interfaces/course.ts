export interface Sector {
  id: string;
  name: string;
}

export interface Pillar {
  id: string;
  name: string;
}

export interface Functionality {
  id: string;
  name: string;
}

export interface Platform {
  id: string;
  name: string;
}

export interface PlatformAndTool {
  id: string;
  name: string;
}

export interface Module {
  id: string;
  name: string;
}

export interface Course {
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
  sectors: Sector[];
  functionalities: any[];
  platforms: any[];
  platformsAndTool: any[];
  owner: any;
  modules: any[];
}

export interface IFindOneCourseParams {
  where?: Partial<Course>;
  relations?: string[];
  select?: (keyof Course)[];
}

export interface IFindAllCourseParams extends IFindOneCourseParams {
  take?: number;
  offset?: number;
  order?: Record<string, 'ASC' | 'DESC'>;
}
