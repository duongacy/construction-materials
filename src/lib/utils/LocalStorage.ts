import { defaultAuthenLocal, type UserAuthen } from '@/types/api/user';

export type LocalStorageKey = 'dark' | 'scheme' | 'userAuthen';

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
