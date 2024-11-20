import { Course } from 'src/entity/course.entity';

export interface FindAllCourseResponse {
  result: Course[];
  page: number;
  perPage: number;
  total: number;
}
