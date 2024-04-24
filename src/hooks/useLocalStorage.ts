import { onBeforeUnmount, onMounted, ref } from 'vue';

type LocalStorageName = 'authenLocal';
export const useLocalStorage = <T>(name: LocalStorageName, defaultValue: T) => {
  const data = ref<T>();
  data.value = defaultValue;

  const getData = () => {
    try {
      const dataLocal = localStorage.getItem(name);
      const dataLocalJSON = JSON.parse(dataLocal!) as T;
      data.value = dataLocalJSON;
    } catch (error) {
      console.log(error);
      return;
    }
  };

  onMounted(() => {
    getData();
    window.addEventListener('storage', getData);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('storage', getData);
  });

  const setData = (value: T) => {
    if (value === undefined || value === null) {
      value = defaultValue;
    }
    localStorage.setItem(name, JSON.stringify(value));
    window.dispatchEvent(new Event('storage'));
  };

  const removeData = () => {
    localStorage.removeItem(name);
    window.dispatchEvent(new Event('storage'));
  };

  return { data, setData, removeData };
};
