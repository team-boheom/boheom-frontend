import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { Logo, Boheom } from '../assets/index.js';
import Input from '../common/Input';
import Button from '../common/Button';
import { useForm } from 'react-hook-form';
import { useLogin } from '../utils/api/auth.js';

const Login = () => {
  const { mutate: PostUserLogin } = useLogin();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm();

  const onSubmit = (data) => {
    const { account_id, password } = data;
    PostUserLogin({
      account_id,
      password,
    });
  };

  return (
    <Wrapper>
      <LogoBox>
        <StyledLogo src={Logo} alt="로고" />
        <StyledBoheom src={Boheom} alt="보험" />
      </LogoBox>
      <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <Content>
          <div className="error">
            <Input
              {...register('account_id', {
                required: '아이디는 필수 입니다.',
              })}
              label="아이디"
              placeholder="아이디를 입력하세요."
              width="506px"
              height="48px"
            />
            {errors.account_id && (
              <ErrorText>{errors.account_id.message}</ErrorText>
            )}
          </div>
          <div>
            <Input
              {...register('password', {
                required: '비밀번호는 필수 입니다.',
              })}
              label="비밀번호"
              placeholder="비밀번호를 입력하세요."
              width="506px"
              height="48px"
              type="password"
            />
            {errors.password && (
              <ErrorText>{errors.password.message}</ErrorText>
            )}
          </div>
          <Button
            width="506px"
            text="로그인"
            backgroundColor="#44EA51"
            color="#ffffff"
            disabled={isSubmitting}
          />
          <StyledLink to="/signup">회원가입</StyledLink>
        </Content>
      </form>
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
  width: 100%;
  height: 292px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
  margin-top: 50px;
  > .error {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

const StyledLink = styled(Link)`
  cursor: pointer;
  color: ${({ theme }) => theme.color.gray500};
  text-decoration: underline;
  text-underline-position: under;
  ${({ theme }) => ({
    fontWeight: theme.fontWeight.regular,
    fontSize: theme.fontSize.body2,
  })}
`;

const ErrorText = styled.p`
  ${({ theme }) => ({
    fontSize: theme.fontSize.body2,
    fontWeight: theme.fontWeight.regular,
    color: theme.color.red,
  })}
  margin-top: 5px;
`;

export default Login;
