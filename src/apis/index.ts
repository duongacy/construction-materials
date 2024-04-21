import { VITE_API_URL } from '@/consts';

export type Image = {
  id: number;
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
  createdAt: string;
  updatedAt: string;
};

export const defaultImage: Image = {
  id: 0,
  name: '',
  formats: undefined,
  hash: '',
  ext: '',
  mime: '',
  size: 0,
  url: '',
  provider: '',
  provider_metadata: undefined,
  createdAt: '',
  updatedAt: '',
};
export async function getQueryFn<DataType>(url: string, defaultData: DataType) {
  try {
    const response = await fetch(`${VITE_API_URL}${url}`);
    if (response.ok) {
      const partialResult = (await response.json()) as Partial<DataType>;
      const finalResult: DataType = defaultData;

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
  }
  return defaultData;
}
