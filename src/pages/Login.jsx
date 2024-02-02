import { Link, useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { Logo, Boheom } from '../assets/index.js';
import Input from '../common/Input';
import Button from '../common/Button';
import { useMutation } from 'react-query';
import { userLogin } from '../utils/api/auth';
import { toast } from 'react-hot-toast';
import { setToken } from '../utils/functions/TokenManager';
import { LoginInputType } from '../models/Login';

export const useLogin = () => {
  const navigate = useNavigate();

  return useMutation(() => userLogin(LoginInputType), {
    onError: (error) => {
      toast.error(`${error.response?.data}`, { duration: 1000 });
    },
    onSuccess: ({ data }) => {
      toast.success('로그인에 성공했습니다.', { duration: 1000 });
      setToken(data.accessToken, data.refreshToken);
      navigate('/main');
    },
  });
};

const Login = () => {
  return (
    <Wrapper>
      <LogoBox>
        <StyledLogo src={Logo} alt="로고" />
        <StyledBoheom src={Boheom} alt="보험" />
      </LogoBox>
      <Content>
        <Input
          label="아이디"
          placeholder="아이디를 입력하세요."
          width="506px"
          height="48px"
        />
        <Input
          label="비밀번호"
          placeholder="비밀번호를 입력하세요."
          width="506px"
          height="48px"
          type="password"
        />
        <Button width="506px" text="로그인" color="green" onClick={useLogin} />
      </Content>
      <StyledLink to="/signup">회원가입</StyledLink>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.white};
`;

const LogoBox = styled.div`
  width: 120px;
  height: 144px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledLogo = styled.img`
  width: 120px;
  height: 120px;
`;

const StyledBoheom = styled.img`
  width: 102px;
  height: 24px;
`;

const Content = styled.div`
  height: 292px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 47px;
`;

const StyledLink = styled(Link)`
  cursor: pointer;
  color: ${({ theme }) => theme.color.gray500};
  text-decoration: underline;
  text-underline-position: under;
  margin-top: 50px;
  ${({ theme }) => ({
    fontWeight: theme.fontWeight.regular,
    fontSize: theme.fontSize.body2,
  })}
`;

export default Login;
