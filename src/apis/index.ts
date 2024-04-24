import { VITE_API_URL, VITE_BASE_TOKEN } from '@/consts';
import type { StrapiResponse } from '@/types/api';

export async function getQueryFn<T>(url: string) {
  try {
    const response = await fetch(`${VITE_API_URL}${url}`, {
      headers: { Authorization: `Bearer ${VITE_BASE_TOKEN}` },
    });
    // if (response.ok) {
    //   const partialResult = (await response.json()).data as Partial<T>;
    //   const finalResult: T = defaultData;

    //   for (const key in finalResult) {
    //     if (partialResult[key] !== null && partialResult[key] !== undefined) {
    //       finalResult[key] = partialResult[key]!;
    //     }
    //   }

    //   for (const key in partialResult) {
    //     if (partialResult[key] !== null && partialResult[key] !== undefined) {
    //       finalResult[key] = partialResult[key]!;
    //     }
    //   }
    // return finalResult;
    // }
    return (await response.json()) as StrapiResponse<T>;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function postMutationFn<PayloadType, T>(url: string, payload: PayloadType) {
  try {
    const response = await fetch(`${VITE_API_URL}${url}`, {
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      method: 'post',
    });
    return (await response.json()) as T;
  } catch (error) {
    console.error(error);
    return null;
  }
}
