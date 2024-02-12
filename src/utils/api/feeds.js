import { useMutation, useQuery } from '@tanstack/react-query';
import { instance } from '../axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

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

export const GetCategoryPosts = (category) => {
  return useQuery(['GetCategoryPosts', category], async () => {
    const { data } = await instance.get(`/${router}/${category}`);
    return data.feeds;
  });
};

export const useFeeds = () => {
  const navigate = useNavigate();
  return useMutation(
    async (params) => {
      return await instance.post(`/${router}`, params);
    },
    {
      onError: () => {
        toast.error('글 등록에 실패했습니다.');
      },
      onSuccess: () => {
        toast.success('글 등록에 성공했습니다.');
        navigate('/main');
      },
    }
  );
};
