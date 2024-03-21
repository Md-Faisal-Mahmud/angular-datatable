
export interface IResult {
  title: string;
  type: string;
  isSuccess: boolean;
  statusCode: number;
  errors: string[]
}


export interface PaginateResult<T> extends IResult {
  totalFiltered: number;
  total: number;
  items: T[]
}
