import { cn } from '@/lib/utils';
import type { Size, Variant } from '@/types/ui';
import type { PrimitiveProps } from 'radix-vue';
export { default as BaseButton } from './BaseButton.vue';

export type ButtonProps = PrimitiveProps & {
  variant?: Variant | 'ghost' | 'link';
  size?: Size | 'icon';
  class?: string;
};

export const buttonVariants = ({
  variant = 'primary',
  size = 'md',
  class: _class,
}: Pick<ButtonProps, 'variant' | 'class' | 'size'>) => {
  return [
    cn({
      'text-[14px]': size === 'sm' || size === 'icon',
      'text-[16px]': size === 'md',
      'text-[18px]': size === 'lg',
    }),
    cn(
      ' flex items-center cursor-pointer justify-center disabled:pointer-events-none disabled:opacity-70',
      {
        'bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-80':
          variant === 'primary',
        'bg-destructive text-destructive-foreground hover:bg-destructive/90 disabled:opacity-80':
          variant === 'destructive',
        'border border-input bg-background hover:bg-accent hover:text-accent-foreground':
          variant === 'outline',
        'bg-secondary text-secondary-foreground hover:bg-secondary/80': variant === 'secondary',
        'hover:bg-accent hover:text-accent-foreground': variant === 'ghost',
        'text-primary underline-offset-4 hover:underline': variant === 'link',

        'px-3 py-1': size === 'sm',
        'px-4 py-2': size === 'md',
        'px-6 py-3': size === 'lg',
        'h-10 w-10 justify-center': size === 'icon',
      },
      _class,
    ),
  ].join(' ');
};
