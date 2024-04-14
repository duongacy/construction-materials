import { onMounted, ref, type Ref } from 'vue';

export function useTheme() {
  const isDark = ref(false);

  const calcDarkMode = () => {
    isDark.value = !!document.querySelector('html')?.classList.contains('dark');
  };

  onMounted(() => {
    calcDarkMode();
  });

  const toggle = () => {
    document.querySelector('html')?.classList.toggle('dark');
    calcDarkMode();
  };
  return [isDark, toggle] as [Ref<boolean>, () => void];
}
