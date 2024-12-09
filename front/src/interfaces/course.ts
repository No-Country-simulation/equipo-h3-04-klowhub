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

// export interface Course {
//   id: string;
//   title: string;
//   description: string;
//   image: string;
//   isFree: boolean;
//   price: number;
//   type: string;
//   level: string;
//   language: string;
//   contentPillars: any[];
//   sectors: Sector[];
//   functionalities: any[];
//   platforms: any[];
//   platformsAndTool: any[];
//   owner: any;
//   modules: any[];
// }

export interface Course {
  id: string;
  title: string;
  contentType: string;
  price: string;
  creationType: string;
  description: string;
  skillLevel: string;
  language: string;
  labels: string[];
  hasDiscount: string;
  discountProductId: string | null;
  learningOutcomes: string;
  sector: string[];
  contentPillar: string[];
  functionalities: string[];
  prerequisites: string[];
  detailedDescription: string;
  discountPercentage: number;
  discountTypeProduct: string;
  coverImage: string | null;
  modules: Module[];
}

export interface Module {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  video: null | string;
  translation: null | string;
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
