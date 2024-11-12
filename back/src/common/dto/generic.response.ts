export class GenericResponse {
  public constructor(init?: Partial<GenericResponse>) {
    Object.assign(this, init);
  }

  code: number;
  error?: string;
  message: string;
  data?: any;
}
