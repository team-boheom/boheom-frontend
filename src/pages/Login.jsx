import { Link, useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { default as Logo } from '../assets/Logo.svg';
import { default as Boheom } from '../assets/Boheom.svg';
import Input from '../common/Input';
import Button from '../common/Button';

const Login = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/');
  };

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
        <Button
          width="506px"
          text="로그인"
          color="green"
          onClick={handleLoginClick}
        />
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
