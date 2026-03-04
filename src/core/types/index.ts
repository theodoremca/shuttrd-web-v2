// Shared response types

export interface IRes<T> {
  status: boolean;
  data: T;
  message: string;
}

export interface IPaginatedRes<T> {
  status: boolean;
  data: T[];
  message: string;
  pagination: {
    page: number;
    perPage: number;
    total: number;
    totalPages: number;
  };
}
