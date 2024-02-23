import { useMutation, useQuery } from '@tanstack/react-query';
import { instance } from '../axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { GetPostId } from '../../atom';

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

export const SearchPosts = (keyword, page = 0) => {
  return useQuery(['SearchPosts', keyword, page], async () => {
    const { data } = await instance.get(
      `/${router}/search/${keyword}?page=${page}&size=16`
    );
    return data;
  });
};

export const GetUserInfo = () => {
  return useQuery(['GetUserInfo'], async () => {
    const { data } = await instance.get(`/users`);
    return data;
  });
};

/***
 * @returns 신청한 게시글 조회
 */

export const GetMyApplied = () => {
  return useQuery(['GetMyApplied'], async () => {
    const { data } = await instance.get(`/${router}/applied`);
    return data.feeds;
  });
};

/**
 * @returns 작성한 게시글 조회
 */

export const GetMyPost = () => {
  return useQuery(['GetMyPost'], async () => {
    const { data } = await instance.get(`/${router}/mine`);
    return data.feeds;
  });
};

/**
 * @returns 상세 게시글 조회
 */

export const GetDetailPost = () => {
  const feedId = useRecoilValue(GetPostId);
  return useQuery(
    ['GetDetailPost', feedId],
    async () => {
      const { data } = await instance.get(`/${router}/details/${feedId}`);
      let arrData = [data];
      return arrData;
    },
    {
      enabled: !!feedId,
      staleTime: 180000,
    }
  );
};

/**
 * @returns 게시글 신청
 */

export const useApplyPost = () => {
  const feedId = useRecoilValue(GetPostId);
  return useMutation(
    async () => {
      return await instance.post(`/${router}/${feedId}`);
    },
    {
      onError: () => {
        toast.error('신청에 실패했습니다.');
      },
      onSuccess: () => {
        toast.success('신청하였습니다.');
      },
    }
  );
};
