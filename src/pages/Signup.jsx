import { Link, useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { ReactComponent as Logo } from '../assets/Logo.svg';
import Input from '../common/Input';
import Button from '../common/Button';

const Signup = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/');
  };

  return (
    <Wrapper>
      <LogoBox>
        <Logo width="100" height="100" />
        <Desc>보드게임 모임을 찾아서</Desc>
      </LogoBox>
      <Content>
        <Input
          label="닉네임"
          placeholder="닉네임을 입력하세요."
          width="506px"
          height="48px"
        />
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
        <Input
          label="비밀번호 확인"
          placeholder="비밀번호를 다시 입력하세요."
          width="506px"
          height="48px"
          type="password"
        />
        <Button
          width="506px"
          text="회원가입"
          color="green"
          onClick={handleLoginClick}
        />
      </Content>
      <StyledLink to="/login">로그인</StyledLink>
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
  justify-content: space-between;
  align-items: center;
`;

const Desc = styled.p`
  color: ${({ theme }) => theme.color.gray500};
  ${({ theme }) => ({
    fontWeight: theme.fontWeight.light,
    fontSize: theme.fontSize.body1,
  })}
`;

const Content = styled.div`
  height: 460px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
`;

const StyledLink = styled(Link)`
  cursor: pointer;
  color: ${({ theme }) => theme.color.gray500};
  text-decoration: underline;
  text-underline-position: under;
  margin-top: 30px;
`;

export default Signup;
