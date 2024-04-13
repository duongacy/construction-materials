import { onBeforeUnmount, onMounted, ref, type Ref } from 'vue';
export type TCoordinates = { x: number; y: number };
export const useCoordinatesMouseClicked = (
  refElement: Ref<HTMLElement | undefined>,
): Ref<TCoordinates | undefined> => {
  const coordinates = ref<TCoordinates>();
  const clickEventHander = (event: MouseEvent) => {
    coordinates.value = {
      x: event.offsetX,
      y: event.offsetY,
    };
  };

  onMounted(() => {
    console.log('Mouse click listening...');

    refElement.value?.addEventListener('click', clickEventHander);
  });
  onBeforeUnmount(() => {
    console.log('Stopped mouse click listening!');
    refElement.value?.removeEventListener('click', clickEventHander);
  });

  return coordinates;
};
