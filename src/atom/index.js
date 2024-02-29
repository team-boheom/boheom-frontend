import { atom } from 'recoil';

export const GetPostId = atom({
  key: 'GetPostId',
  default: '',
});

export const IsSearchInput = atom({
  key: 'IsSearchInput',
  default: true,
});
