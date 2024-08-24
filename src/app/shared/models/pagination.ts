export interface Pagination<T> {
  data: T;
  count: number;
  pageSize: number;
  pageIndex: number;
}
