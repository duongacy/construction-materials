import { type RemovableRef } from '@vueuse/core';
import { onMounted } from 'vue';
import { useLocalStorageMOD } from './useLocalStorageMOD';
export const useDarkMode = () => {
  const isDark = useLocalStorageMOD<boolean>('dark', false);

  const calcDarkMode = () => {
    if (isDark.value) {
      document.querySelector('html')?.classList.add('dark');
    } else {
      document.querySelector('html')?.classList.remove('dark');
    }
  };

  onMounted(() => {
    calcDarkMode();
  });

  const toggle = () => {
    isDark.value = !isDark.value;
    calcDarkMode();
  };
  return [isDark, toggle] as [RemovableRef<boolean>, () => void];
};
