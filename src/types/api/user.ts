import { type StrapiFormat } from './common';

export type User = {
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
};

export type RegisterPayload = {
  username: string;
  password: string;
  email: string;
};

export type SignInPayload = {
  identifier: string;
  password: string;
};

export type UserAuthen = {
  jwt: string;
  user: User & StrapiFormat;
};
export const defaultAuthenLocal = (): UserAuthen => ({
  jwt: '',
  user: {
    username: '',
    email: '',
    provider: '',
    confirmed: false,
    blocked: false,
    id: 0,
    createdAt: '',
    updatedAt: '',
    publishedAt: '',
  },
});
