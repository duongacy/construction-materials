export type User = {
  username: string;
  email: string;
  provider: string;
  password?: string;
  resetPasswordToken?: string;
  confirmationToken?: string;
  confirmed: boolean;
  blocked: boolean;
  role?: {
    description: string;
    name: string;
    type: string;
  };
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
  user: User;
};

export const defaultAuthenLocal = (): UserAuthen => ({
  jwt: '',
  user: {
    username: '',
    email: '',
    provider: '',
    confirmed: false,
    blocked: false,
  },
});
