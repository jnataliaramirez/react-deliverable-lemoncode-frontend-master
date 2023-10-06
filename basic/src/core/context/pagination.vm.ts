export interface Page {
  page: number;
  count: number;
  from: number;
  to: number;
}

export interface Pagination {
  pageSize: number;
  pag: Page;
}
