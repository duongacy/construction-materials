import { ref, type Ref } from 'vue';

export const useToggle = (
  initialValue: boolean = false,
): [Ref<boolean>, VoidFunction, (value: boolean) => void] => {
  const value = ref(initialValue);
  const toggleValue = () => {
    value.value = !value.value;
  };
  const setValue = (v: boolean) => {
    value.value = v;
  };
  return [value, toggleValue, setValue];
};
