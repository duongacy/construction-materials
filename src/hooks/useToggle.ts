import { ref, type Ref } from 'vue';

export const useToggle = (initialValue: boolean = false): [Ref<boolean>, VoidFunction] => {
  const value = ref(initialValue);
  const toggleValue = () => {
    value.value = !value.value;
  };
  return [value, toggleValue];
};
