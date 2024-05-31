import { Profile } from '@infordevjournal/core/api-types';

export type ProfileState = Profile;

export const profileInitialState: ProfileState = {
  username: '',
  bio: '',
  image: '',
  following: false,
  loading: false,
};
