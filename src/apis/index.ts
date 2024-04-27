import { VITE_API_URL, VITE_BASE_TOKEN } from '@/consts';
import type { StrapiResponse } from '@/types/api';

type GetQueryURL =
  | '/api/about-us-blogs-section'
  | '/api/about-us-image-section'
  | '/api/about-us-logo-clouds-section'
  | '/api/about-us-stats-section'
  | '/api/about-us-team-section'
  | '/api/about-us-values-section'
  | '/api/about-us-hero-section';

export const getQueryFn = async <T>(url: GetQueryURL, populate = true) => {
  const populateString = populate ? '?populate=deep' : '';
  try {
    const response = await fetch(`${VITE_API_URL}${url}${populateString}`, {
      headers: { Authorization: `Bearer ${VITE_BASE_TOKEN}` },
    });
    return (await response.json()) as StrapiResponse<T>;
  } catch (error) {
    console.error(error);
    return null;
  }
};

type PostMutationURL = '/api/auth/local' | '/api/auth/local/register';
export const postMutationFn = async <PayloadType, T>(
  url: PostMutationURL,
  payload: PayloadType,
) => {
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
};
