export interface ICourse {
  title: string;
  contentType: ContentType;
  creationType: CreationType;
  description: string;
  skillLevel: CourseLevel;
  platform: Platform;
  language: string;
  labels: string[];
  moduleTitle: string;
  moduleDescription: string;
  hasDiscount: DiscountOption;
  discountProductId: string;
  learningOutcomes: string;
  sector: string[];
  contentPillar: string[];
  toolsAndPlatforms: string[];
  functionalities: string[];
  prerequisites: string[];
  detailedDescription: string;
  discountPercentage?: number;
  discountTypeProduct?: DicountType;
  coverImage?: string;
}

export enum DicountType {
  APPLICATION = 'application',
  COURSE = 'course',
}

export enum Platform {
  APPSHEET = 'appsheet',
  POWERAPPS = 'powerapps',
}

export enum CourseLevel {
  BASIC = 'básico',
  INTERMEDIATE = 'intermedio',
}

export enum ContentType {
  GRATUITO = 'gratuito',
  PAGO = 'pago',
}

export enum CreationType {
  COURSE = 'curso',
  LESSON = 'lección',
}

export enum DiscountOption {
  YES = 'si',
  NO = 'no',
}

export enum DiscountTypeProduct {
  APPLICATION = 'application',
  COURSE = 'course',
}
