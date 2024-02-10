import { Link, useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { Logo } from '../assets/index.js';
import Input from '../common/Input';
import Button from '../common/Button';
import { useSignup } from '../utils/api/auth.js';
import { useForm } from 'react-hook-form';
import { UserNameAtom } from '../atom/auth.js';
import { useRecoilState } from 'recoil';
import toast from 'react-hot-toast';

const Signup = () => {
  const { mutate: PostUserSignup } = useSignup();
  const [userName, setUserName] = useRecoilState(UserNameAtom);
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm();

  const onSubmit = (data) => {
    const { account_id, password, passwordCheck, nickname } = data;
    if (password !== passwordCheck) {
      toast.error('비밀번호 확인이 일치하지 않습니다.');
    } else {
      PostUserSignup({ account_id, password, nickname });
      setUserName(nickname);
    }
  };

  return (
    <Wrapper>
      <LogoBox>
        <img src={Logo} alt="로고" />
        <Desc>보드게임 모험을 찾아서</Desc>
      </LogoBox>
      <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <Content>
          <div className="error">
            <Input
              {...register('nickname', { required: '닉네임은 필수 입니다.' })}
              label="닉네임"
              placeholder="닉네임을 입력하세요."
              width="506px"
              height="48px"
            />
            {errors.nickname && (
              <ErrorText>{errors.nickname.message}</ErrorText>
            )}
          </div>
          <div className="error">
            <Input
              {...register('account_id', { required: '아이디는 필수 입니다.' })}
              label="아이디"
              placeholder="아이디를 입력하세요."
              width="506px"
              height="48px"
            />
            {errors.account_id && (
              <ErrorText>{errors.account_id.message}</ErrorText>
            )}
          </div>
          <div className="error">
            <Input
              {...register('password', { required: '비밀번호는 필수 입니다.' })}
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
          <Input
            {...register('passwordCheck')}
            label="비밀번호 확인"
            placeholder="비밀번호를 다시 입력하세요."
            width="506px"
            height="48px"
            type="password"
          />
          <Button
            width="506px"
            text="회원가입"
            color="#ffffff"
            backgroundColor="#44EA51"
            disabled={isSubmitting}
          />
          <StyledLink to="/login">로그인</StyledLink>
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
  width: 160px;
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > img {
    width: 120px;
    height: 120px;
  }
`;

const ErrorText = styled.p`
  ${({ theme }) => ({
    fontSize: theme.fontSize.body2,
    fontWeight: theme.fontWeight.regular,
    color: theme.color.red,
  })}
  margin-top: 5px;
`;

const Desc = styled.p`
  margin-top: 30px;
  ${({ theme }) => ({
    fontWeight: theme.fontWeight.regular,
    fontSize: theme.fontSize.body1,
    color: theme.color.gray500,
  })}
`;

const Content = styled.div`
  width: 100%;
  height: 460px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  margin-top: 30px;
  > .error {
    display: flex;
    flex-direction: column;
    gap: 5px;
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

export default Signup;
