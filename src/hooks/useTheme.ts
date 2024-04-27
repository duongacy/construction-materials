import SCHEMES from '@/constants/schemes';
import { watchEffect } from 'vue';
import { useLocalStorageMOD } from './useLocalStorageMOD';

export const useTheme = () => {
  const dark = useLocalStorageMOD<boolean>('dark', false);
  const scheme = useLocalStorageMOD<keyof typeof SCHEMES>('scheme', 'GREEN');

  const setScheme = (value: keyof typeof SCHEMES) => {
    scheme.value = value;
  };

  const toggleDarkMode = () => {
    dark.value = !dark.value;
  };

  watchEffect(() => {
    const root: HTMLElement | null = document.querySelector(':root');
    const modeName = dark.value ? 'dark' : 'light';
    const themeWithMode = SCHEMES[scheme.value][modeName];

    for (const key in themeWithMode) {
      root?.style.setProperty(key, themeWithMode[key as '--primary']);
    }
  });
  return { scheme, setScheme, isDark: dark, toggleDarkMode };
};
