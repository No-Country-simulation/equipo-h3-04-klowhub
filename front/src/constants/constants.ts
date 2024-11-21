const { NEXT_PUBLIC_BACK_URL } = process.env;

export const BACK_URL = NEXT_PUBLIC_BACK_URL ?? 'http://localhost:3001/api';
