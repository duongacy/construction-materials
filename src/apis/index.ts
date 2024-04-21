import { VITE_API_URL } from '@/consts';

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
