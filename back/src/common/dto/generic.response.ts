export class GenericResponse<T> {
  public constructor(init?: Partial<GenericResponse<T>>) {
    Object.assign(this, init);
  }

  code: number;
  error?: string;
  message: string;
  data?: T;
}
