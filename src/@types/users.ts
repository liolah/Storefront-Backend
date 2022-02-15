export type User = {
  id: number;
  firstName: string;
  lastName: string;
  passwordDigest: string;
};

export type InputUser = {
  firstName: string;
  lastName: string;
  password: string;
};