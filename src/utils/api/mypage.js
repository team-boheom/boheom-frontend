import { useQuery } from '@tanstack/react-query';
import { instance } from '../axios';

const router = 'feeds';
/**
 * @returns 유저 프로필 조회
 */
export const GetUserInfo = () => {
  return useQuery(['GetUserInfo'], async () => {
    const { data } = await instance.get(`/users`);
    return data;
  });
};

/***
 * @returns 작성한 게시글 조회
 */

export const GetMyPost = () => {
  return useQuery(['GetMyMine'], async () => {
    const { data } = await instance.get(`/${router}/applied`);
    return data.feeds;
  });
};

/**
 * @returns 신청한 게시글 조회
 */

export const GetMyApplied = () => {
  return useQuery(['GetMyApplied'], async () => {
    const { data } = await instance.get(`/${router}/mine`);
    return data.feeds;
  });
};
