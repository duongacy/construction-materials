export interface StrapiFormat {
  id: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export const defaultStrapiFormat = (): StrapiFormat => ({
  id: 0,
  createdAt: '',
  updatedAt: '',
  publishedAt: '',
});

export interface Image extends StrapiFormat {
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
}

export const defaultImage = (): Image => ({
  name: '',
  formats: undefined,
  hash: '',
  ext: '',
  mime: '',
  size: 0,
  url: '',
  provider: '',
  provider_metadata: undefined,
  ...defaultStrapiFormat(),
});
