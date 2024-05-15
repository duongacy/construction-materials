import type { Image, StrapiFormat } from '../common';
import type { Category } from './Category';

export type Blog = {
  title: string;
  description: string;
  thumb: Image;
  category: Category;
  content: string;
} & StrapiFormat;
