import { VITE_API_URL } from '@/consts';
import { LocalStorage } from '@/hooks/useLocalStorageMOD';
import axios, { type AxiosRequestConfig, type AxiosResponse } from 'axios';

type GetQueryURL = '/api/about-us-page' | '/api/users/me?populate=*';

type PostMutationURL = '/api/auth/local' | '/api/auth/local/register';

export const axiosInstance = axios.create({
  baseURL: VITE_API_URL,
});
axiosInstance.interceptors.request.use(async (req) => {
  // if(!authTokens){
  //     authTokens = localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null
  //     req.headers.Authorization = `Bearer ${authTokens?.access}`
  // }

  // const user = jwt_decode(authTokens.access)
  // const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

  // if(!isExpired) return req

  // const response = await axios.post(`${baseURL}/api/token/refresh/`, {
  //     refresh: authTokens.refresh
  //   });

  // localStorage.setItem('authTokens', JSON.stringify(response.data))
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
  config?: AxiosRequestConfig<D>,
): Promise<R> => {
  if (!url.includes('populate=')) {
    url = url + '?populate=deep';
  }
  return axiosInstance.get(url, config);
};

export const axiosInstancePost = <T = any, R = AxiosResponse<T>, D = any>(
  url: PostMutationURL,
  data?: D,
  config?: AxiosRequestConfig<D>,
): Promise<R> => {
  return axiosInstance.post(url + '?populate=deep', data, config);
};
