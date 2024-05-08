import { LOGOUT_EVENT_NAME, VITE_API_URL, VITE_REFRESH_TOKEN_OFFSET } from '@/consts';
import { LocalStorage } from '@/hooks/useLocalStorageMOD';
import axios, { type AxiosRequestConfig, type AxiosResponse } from 'axios';

type GetQueryURL =
  | '/api/about-us-page'
  | '/api/investment-have-page'
  | '/api/investment-need-page'
  | '/api/learning-case-study-page'
  | '/api/learning-download-page'
  | '/api/learning-finance-page'
  | '/api/learning-legal-page'
  | '/api/learning-mar-tech-page'
  | '/api/promotion-have-page'
  | '/api/promotion-need-page'
  | '/api/users/me?populate=*'
  | '/api/blogs'
  | '/api/categories'
  | '/api/investment-haves'
  | '/api/investment-needs'
  | '/api/members'
  | '/api/promotion-haves'
  | '/api/promotion-needs';

type PostMutationURL = '/api/auth/local' | '/api/auth/local/register' | '/api/token/refresh';

export const axiosInstance = axios.create({
  baseURL: VITE_API_URL,
});

axiosInstance.interceptors.request.use(async (req) => {
  const now = new Date();
  if (
    LocalStorage.userAuthen.expiresIn !== 0 &&
    LocalStorage.userAuthen.expiresIn - now.getTime() < VITE_REFRESH_TOKEN_OFFSET &&
    !req.url?.includes('/api/token/refresh') &&
    !req.url?.includes('/api/auth/local') &&
    !req.url?.includes('/api/auth/local/register')
  ) {
    try {
      const data = await axiosInstancePost<
        unknown,
        AxiosResponse<{ jwt: string; refreshToken: string }>
      >(
        '/api/token/refresh',
        {
          refreshToken: LocalStorage.userAuthen.refreshToken,
        },
        { preventPopulateDeep: true },
      );
      const userAuthen = {
        ...LocalStorage.userAuthen,
        jwt: data.data.jwt,
        refreshToken: data.data.refreshToken,
      };
      LocalStorage.userAuthen = userAuthen;
    } catch (error) {
      window.dispatchEvent(new Event(LOGOUT_EVENT_NAME));
    }
  }

  if (req.withCredentials) {
    req.headers.Authorization = `Bearer ${LocalStorage.userAuthen.jwt}`;
  }
  return req;
});
axiosInstance.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    return Promise.reject(err.response.data.error);
  },
);

export const axiosInstanceGet = <T = any, R = AxiosResponse<T>, D = any>(
  url: GetQueryURL,
  config?: AxiosRequestConfig<D> & { preventPopulateDeep?: boolean },
): Promise<R> => {
  if (!config?.preventPopulateDeep) {
    url = url + '?populate=deep';
  }
  return axiosInstance.get(url, config);
};

export const axiosInstancePost = <T = any, R = AxiosResponse<T>, D = any>(
  url: PostMutationURL,
  data?: D,
  config?: AxiosRequestConfig<D> & { preventPopulateDeep?: boolean },
): Promise<R> => {
  if (!config?.preventPopulateDeep) {
    url = url + '?populate=deep';
  }
  return axiosInstance.post(url, data, config);
};
