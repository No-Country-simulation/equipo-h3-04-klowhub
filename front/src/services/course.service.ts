import { Course, IFindAllCourseParams } from '@/interfaces/course';
import { fetchData } from '@/utils/fetchData';

interface ResCourse {
  message: string;
  data: {
    result: Course[];
    page: number;
    perPage: number;
    total: number;
  };
}

export const courseService = async (
  params: IFindAllCourseParams,
): Promise<Course[]> => {
  try {
    const queryParams = new URLSearchParams();

    if (params.take) queryParams.append('take', String(params.take));
    if (params.offset) queryParams.append('offset', String(params.offset));
    if (params.order) queryParams.append('order', JSON.stringify(params.order));
    if (params.where) queryParams.append('where', JSON.stringify(params.where));
    if (params.relations)
      queryParams.append('relations', params.relations.toString());
    if (params.select)
      queryParams.append('select', JSON.stringify(params.select));

    const url = `/course?${queryParams.toString()}`;
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const resCourse: ResCourse = await fetchData(url, options);
    return resCourse.data?.result ?? [];
  } catch (error) {
    console.error('Error fetching courses', error);
    return [];
  }
};
