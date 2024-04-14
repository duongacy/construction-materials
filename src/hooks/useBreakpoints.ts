import { onBeforeUnmount, onMounted, ref } from 'vue';
const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};
export function useBreakpoints() {
  const breakPoint = ref<'sm' | 'md' | 'lg' | 'xl' | '2xl' | undefined>();
  const getSizeHandler = (e?: Event) => {
    const win = (e?.currentTarget || window) as Window;
    const width = win.innerWidth;
    if (width < BREAKPOINTS.sm) {
      breakPoint.value = undefined;
      return;
    }
    if (width >= BREAKPOINTS.sm && width < BREAKPOINTS.md) {
      breakPoint.value = 'sm';
      return;
    }
    if (width >= BREAKPOINTS.md && width < BREAKPOINTS.lg) {
      breakPoint.value = 'md';
      return;
    }
    if (width >= BREAKPOINTS.lg && width < BREAKPOINTS.xl) {
      breakPoint.value = 'lg';
      return;
    }
    if (width >= BREAKPOINTS.xl && width < BREAKPOINTS['2xl']) {
      breakPoint.value = 'xl';
      return;
    }
    if (width >= BREAKPOINTS['2xl']) {
      breakPoint.value = '2xl';
      return;
    }
  };

  onMounted(() => {
    getSizeHandler();
    window.addEventListener('resize', getSizeHandler);
  });
  onBeforeUnmount(() => {
    window.removeEventListener('resize', getSizeHandler);
  });
  return breakPoint;
}
