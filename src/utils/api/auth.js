import { useMutation } from '@tanstack/react-query';
import { instance } from '../axios';
import toast from 'react-hot-toast';
import { setToken } from '../Token';
import { useNavigate } from 'react-router-dom';

const router = 'users';

export const useLogin = () => {
  const navigate = useNavigate();
  return useMutation(
    async (params) => {
      return await instance.post(`/${router}/login`, params);
    },
    {
      onError: (error) => {
        switch (error?.response?.status) {
          case 401:
            toast.error('인증애 실패했습니다.');
            break;
          case 403:
            toast.error('사용자 권한이 없습니다.');
            break;
          case 404:
            toast.error('유저 정보가 일치하지 않습니다.');
            break;
          default:
            toast.error('오류가 발생하였습니다.');
        }
      },
      onSuccess: ({ data }) => {
        toast.success('로그인에 성공했습니다.');
        setToken(data.access_token, data.refresh_token);
        navigate('/main');
      },
    }
  );
};

export const useSignup = () => {
  const navigate = useNavigate();
  return useMutation(
    async (params) => {
      return await instance.post(`/${router}/signup`, params);
    },
    {
      onError: (error) => {
        switch (error?.response?.status) {
          case 401:
            toast.error('인증애 실패했습니다.');
            break;
          case 403:
            toast.error('사용자 권한이 없습니다.');
            break;
          case 404:
            toast.error('유저 정보가 일치하지 않습니다.');
            break;
          case 409:
            toast.error('이미 가입된 유저 입니다!');
            break;
          default:
            toast.error('오류가 발생하였습니다.');
        }
      },
      onSuccess: () => {
        toast.success('회원가입에 성공했습니다.');
        navigate('/login');
      },
    }
  );
};
