import type { AxiosResponse } from 'axios';

export type StrapiFormat = {
  id: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export type Image = {
  name: string;
  alternativeText?: string;
  caption?: string;
  width?: number;
  height?: number;
  formats: any;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: string;
  provider: string;
  provider_metadata: any;
} & StrapiFormat;

export type PaginationRequest = {
  page?: number;
  pageSize?: number;
  withCount?: boolean;
};

export type PaginationResponse = {
  page?: number; // current page
  pageCount?: number; // how many page
  pageSize?: number; // items each page
  total?: number; // total of result
};

export type StrapiAxiosResponse<T> = AxiosResponse<T> & {
  meta?: {
    pagination?: PaginationResponse;
  };
};
