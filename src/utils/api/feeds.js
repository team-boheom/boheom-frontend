import { useQuery } from '@tanstack/react-query';
import { instance } from '../axios';

const router = 'feeds';

export const GetRecentPosts = () => {
  return useQuery(['GetRecentPosts'], async () => {
    const { data } = await instance.get(`/${router}/recent`);
    return data.feeds;
  });
};

export const GetPopularPosts = () => {
  return useQuery(['GetPopularPosts'], async () => {
    const { data } = await instance.get(`/${router}/popular`);
    return data.feeds;
  });
};
