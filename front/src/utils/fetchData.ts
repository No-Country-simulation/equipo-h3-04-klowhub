import { BACK_URL } from '@/constants/constants';

export const fetchData = async <T>(
  url: string,
  options?: RequestInit,
): Promise<T> => {
  try {
    const res = await fetch(`${BACK_URL}${url}`, options);
    const data: Promise<T> = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error('Error al hacer petición');
  }
};
