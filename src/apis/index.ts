import { VITE_API_URL, VITE_BASE_TOKEN } from '@/consts';

export interface StrapiFormat {
  id: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

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

export const defaultImage: Image = {
  name: '',
  formats: undefined,
  hash: '',
  ext: '',
  mime: '',
  size: 0,
  url: '',
  provider: '',
  provider_metadata: undefined,
  id: 0,
  createdAt: '',
  updatedAt: '',
  publishedAt: '',
};

export async function getQueryFn<ResponseType>(url: string, defaultData: ResponseType) {
  try {
    const response = await fetch(`${VITE_API_URL}${url}`, {
      headers: { Authorization: `Bearer ${VITE_BASE_TOKEN}` },
    });
    if (response.ok) {
      const partialResult = (await response.json()) as Partial<ResponseType>;
      const finalResult: ResponseType = defaultData;

      for (const key in finalResult) {
        if (partialResult[key] !== null && partialResult[key] !== undefined) {
          finalResult[key] = partialResult[key]!;
        }
      }

      for (const key in partialResult) {
        if (partialResult[key] !== null && partialResult[key] !== undefined) {
          finalResult[key] = partialResult[key]!;
        }
      }
      return finalResult;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function postMutationFn<PayloadType, ResponseType>(
  url: string,
  payload: PayloadType,
  defaultResponse: ResponseType,
) {
  try {
    const response = await fetch(`${VITE_API_URL}${url}`, {
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      method: 'post',
    });
    if (response.ok) {
      const partialResult = (await response.json()) as Partial<ResponseType>;
      const finalResult: ResponseType = defaultResponse;

      for (const key in finalResult) {
        if (partialResult[key] !== null && partialResult[key] !== undefined) {
          finalResult[key] = partialResult[key]!;
        }
      }

      for (const key in partialResult) {
        if (partialResult[key] !== null && partialResult[key] !== undefined) {
          finalResult[key] = partialResult[key]!;
        }
      }
      return finalResult;
    }
  } catch (error) {
    console.error(error);
    return defaultResponse;
  }
  return defaultResponse;
}
