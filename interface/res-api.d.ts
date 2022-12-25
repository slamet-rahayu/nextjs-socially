export interface IApiRes<T> {
  data: T;
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
      limit: number;
      start: number;
    };
  };
}

export interface IHookRes<T> {
  data: T;
  isLoading: boolean;
  isError: boolean;
}
