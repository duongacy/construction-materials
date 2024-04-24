import type { StrapiResponse } from '.';
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

export type AuthenResponse = StrapiResponse<{
  jwt: string;
  user: User & StrapiFormat;
}>;
export const defaultAuthenResponse = (): AuthenResponse => ({});

export type AuthenLocal = AuthenResponse['data'];
export const defaultAuthenLocal = (): AuthenLocal => ({
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
