import { LessonModuleCourse } from './lesson.interface';

export interface ModuleCourse {
  id?: string;
  title: string;
  description: string;
  courseId?: string;
  lessons?: LessonModuleCourse[];
}
