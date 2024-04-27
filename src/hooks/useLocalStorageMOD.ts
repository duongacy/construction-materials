import { useLocalStorage, type UseStorageOptions } from '@vueuse/core';

type LocalStorageKey = 'dark' | 'scheme' | 'authenLocal';
export const useLocalStorageMOD = <T>(
  key: LocalStorageKey,
  initialValue: T,
  options?: UseStorageOptions<T> | undefined,
) => {
  return useLocalStorage(key, initialValue, options);
};
