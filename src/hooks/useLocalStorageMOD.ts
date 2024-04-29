import type { LocalStorageKey } from '@/lib/utils/localStorageMOD';
import { useLocalStorage, type UseStorageOptions } from '@vueuse/core';

export const useLocalStorageMOD = <T>(
  key: LocalStorageKey,
  initialValue: T,
  options?: UseStorageOptions<T> | undefined,
) => {
  return useLocalStorage(key, initialValue, {
    ...options,
    initOnMounted: true,
  });
};
