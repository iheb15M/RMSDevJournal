import { User } from '@infordevjournal/core/api-types';

export type AuthState = {
  loggedIn: boolean;
  user: User;
};

export const initialUserValue: User = {
  email: '',
  token: '',
  username: '',
  bio: '',
  image: '',
};

export const authInitialState: AuthState = {
  loggedIn: false,
  user: initialUserValue,
};
