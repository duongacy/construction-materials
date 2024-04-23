import { defaultStrapiFormat, type StrapiFormat } from './common';

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

export type AuthenResponse = {
  jwt: string;
  user: User & StrapiFormat;
};

export const defaultAuthenResponse = (): AuthenResponse => ({
  jwt: '',
  user: {
    username: '',
    email: '',
    provider: '',
    confirmed: false,
    blocked: false,
    ...defaultStrapiFormat(),
  },
});
