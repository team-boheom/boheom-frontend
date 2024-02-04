import { useQuery } from '@tanstack/react-query';
import { instance } from './axios';

const router = 'feeds';

export const SearchPosts = (keyword, page = 0) => {
  return useQuery(['SearchPosts', keyword, page], async () => {
    const { data } = await instance.get(
      `/${router}/search/${keyword}?page=${page}&size=16`
    );
    return data;
  });
};
