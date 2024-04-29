import { VITE_API_URL } from '@/consts';
import axios, { type AxiosRequestConfig, type AxiosResponse } from 'axios';

type GetQueryURL =
  | '/api/about-us-blogs-section'
  | '/api/about-us-image-section'
  | '/api/about-us-logo-clouds-section'
  | '/api/about-us-stats-section'
  | '/api/about-us-team-section'
  | '/api/about-us-values-section'
  | '/api/about-us-hero-section';

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
  // req.headers.Authorization = `Bearer ${response.data.access}`
  return req;
});
axiosInstance.interceptors.response.use(
  (res) => {
    console.log({ res });

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
  url = url + '?populate=deep';
  return axiosInstance.get(url, config);
};

export const axiosInstancePost = <T = any, R = AxiosResponse<T>, D = any>(
  url: PostMutationURL,
  data?: D,
  config?: AxiosRequestConfig<D>,
): Promise<R> => {
  return axiosInstance.post(url, data, config);
};
