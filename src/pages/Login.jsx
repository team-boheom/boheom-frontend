import { Link, useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { ReactComponent as Logo } from '../assets/Logo.svg';
import { ReactComponent as Boheom } from '../assets/Boheom.svg';
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
        <Logo width="120" height="120" />
        <Boheom width="102" height="24" />
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
`;

export default Login;
