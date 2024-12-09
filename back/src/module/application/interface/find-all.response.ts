import { Application } from 'src/entity/application.entity';

export interface FindAllApplicationResponse {
  result: Application[];
  page: number;
  perPage: number;
  total: number;
}
