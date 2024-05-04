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
