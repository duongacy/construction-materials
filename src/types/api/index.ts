export type StrapiResponse<T> = {
  data?: T;
  error?: {
    status: number;
    name: string;
    message: string;
    details: any;
  };
};
