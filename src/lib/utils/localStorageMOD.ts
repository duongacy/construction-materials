export type LocalStorageKey = 'dark' | 'scheme' | 'authenLocal';
export const localStorageMOD = () => {
  const setItem = (key: LocalStorageKey, item: unknown) => {
    localStorage.setItem(key, JSON.stringify(item));
    window.dispatchEvent(new Event('storage'));
  };

  const getItem = <T>(key: LocalStorageKey, defaultValue: T): T => {
    const itemLocal = localStorage.getItem(key) || JSON.stringify(defaultValue);
    return JSON.parse(itemLocal);
  };

  const removeItem = (key: LocalStorageKey) => {
    localStorage.removeItem(key);
    window.dispatchEvent(new Event('storage'));
  };

  return { setItem, removeItem, getItem };
};
