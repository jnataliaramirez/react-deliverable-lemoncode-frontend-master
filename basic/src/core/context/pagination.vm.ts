export interface Page {
  page: number;
  count: number;
  from: number;
  to: number;
  pageSize: number;
}

export interface Pagination {
  pag: Page;
}

export const firstPaginationCreate = (): Pagination => ({
  pag: { page: 1, count: 0, from: 0, to: 6, pageSize: 6 },
});
