import axios from 'axios';
import toast from 'react-hot-toast';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

const localStorage = window.localStorage;

instance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('access_token');
    const returnConfig = { ...config };
    if (accessToken) {
      returnConfig.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return returnConfig;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (axios.isAxiosError(error) && error.response) {
      if (
        error.response.status === 403 ||
        error.response.status === 401 ||
        error.response.data.message === 'User Not Found'
      ) {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');

        toast.error('로그인이 만료되었습니다. 다시 로그인해주세요.');

        const goToLogin = setTimeout(() => {
          console.log('이동');
          window.location.href = '/login';
          clearTimeout(goToLogin);
        }, 1000);
      }
    }
    return Promise.reject(error);
  }
);
