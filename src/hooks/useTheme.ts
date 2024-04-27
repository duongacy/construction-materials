import { ref, watchEffect } from 'vue';
import { useDarkMode } from './useDarkMode';

const THEMES = {
  DEFAULT: {
    dark: {
      '--background': '20 14.3% 4.1%',
      '--foreground': '0 0% 95%',

      '--card': '24 9.8% 10%',
      '--card-foreground': '0 0% 95%',

      '--popover': '0 0% 9%',
      '--popover-foreground': '0 0% 95%',

      '--primary': '142.1 70.6% 45.3%',
      '--primary-foreground': '144.9 80.4% 10%',

      '--secondary': '240 3.7% 15.9%',
      '--secondary-foreground': '0 0% 98%',

      '--muted': '0 0% 15%',
      '--muted-foreground': '240 5% 64.9%',

      '--accent': '12 6.5% 15.1%',
      '--accent-foreground': '0 0% 98%',

      '--destructive': '0 62.8% 30.6%',
      '--destructive-foreground': '0 85.7% 97.3%',

      '--border': '240 3.7% 15.9%',
      '--input': '240 3.7% 15.9%',
      '--ring': '142.4 71.8% 29.2%',
    },
    light: {
      '--background': ' 0 0% 100%',
      '--foreground': ' 240 10% 3.9%',

      '--card': ' 0 0% 100%',
      '--card-foreground': ' 240 10% 3.9%',

      '--popover': ' 0 0% 100%',
      '--popover-foreground': ' 240 10% 3.9%',

      '--primary': ' 142.1 76.2% 36.3%',
      '--primary-foreground': ' 355.7 100% 97.3%',

      '--secondary': ' 240 4.8% 95.9%',
      '--secondary-foreground': ' 240 5.9% 10%',

      '--muted': ' 240 4.8% 95.9%',
      '--muted-foreground': ' 240 3.8% 46.1%',

      '--accent': ' 240 4.8% 95.9%',
      '--accent-foreground': ' 240 5.9% 10%',

      '--destructive': ' 0 84.2% 60.2%',
      '--destructive-foreground': ' 0 0% 98%',

      '--border': ' 240 5.9% 90%',
      '--input': ' 240 5.9% 90%',
      '--ring': ' 142.1 76.2% 36.3%',
      '--radius': ' 0.5rem',
    },
  },
  ORANGE: {
    dark: {
      '--primary': '20.5 90.2% 48.2%',
      '--primary-foreground': '60 9.1% 97.8%',
    },
    light: {
      '--primary': '24.6 95% 53.1%',
      '--primary-foreground': '60 9.1% 97.8%',
    },
  },
  BLUE: {
    light: {
      '--primary': '221.2 83.2% 53.3%',
      '--primary-foreground': '210 40% 98%',
    },
    dark: {
      '--primary': '217.2 91.2% 59.8%',
      '--primary-foreground': '222.2 47.4% 11.2%',
    },
  },
};

export const useTheme = () => {
  const [dark] = useDarkMode();
  const theme = ref<keyof typeof THEMES>();

  const setTheme = (value: keyof typeof THEMES) => {
    theme.value = value;
  };

  watchEffect(() => {
    const root: HTMLElement | null = document.querySelector(':root');
    const themeName = theme.value || 'DEFAULT';
    const modeName = dark.value ? 'dark' : 'light';
    const themeWithMode = THEMES[themeName][modeName];

    for (const key in themeWithMode) {
      root?.style.setProperty(key, themeWithMode[key as '--primary']);
    }
  });
  return { setTheme };
};
