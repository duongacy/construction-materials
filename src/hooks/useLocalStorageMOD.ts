import { defaultAuthenLocal, type UserAuthen } from '@/api/types/collection/User';
import { useLocalStorage, type UseStorageOptions } from '@vueuse/core';

export type LocalStorageKey = 'dark' | 'scheme' | 'userAuthen';

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

// Not hook
// Exception: the code below is placed exception for don't break source code structure
const localStorageMOD = {
  setItem: (key: LocalStorageKey, item: unknown) => {
    localStorage.setItem(key, JSON.stringify(item));
    window.dispatchEvent(new Event('storage'));
  },
  getItem: <T>(key: LocalStorageKey, defaultValue: T): T => {
    const itemLocal = localStorage.getItem(key) || JSON.stringify(defaultValue);
    return JSON.parse(itemLocal);
  },
  removeItem: (key: LocalStorageKey) => {
    localStorage.removeItem(key);
    window.dispatchEvent(new Event('storage'));
  },
};

export class LocalStorage {
  static get userAuthen(): UserAuthen {
    return localStorageMOD.getItem('userAuthen', defaultAuthenLocal());
  }
  static set userAuthen(value: UserAuthen | null | undefined) {
    if (value === undefined || value === null) {
      localStorageMOD.removeItem('userAuthen');
    } else {
      localStorageMOD.setItem('userAuthen', value);
    }
  }
}
