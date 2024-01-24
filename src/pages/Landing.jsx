import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import { Logo } from '../assets';
import { Outlet, useNavigate } from 'react-router-dom';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const LandingPage = () => {
  const imageText = { image: `${Logo}`, text: 'Boheom' };
  const [showImage, setShowImage] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timers = [
      setTimeout(() => {
        setShowImage(true);
      }, 0),
      setTimeout(() => {
        setShowAuth(true);
      }, 0),
      setTimeout(() => {
        setShowText(true);
      }, 1500),
      setTimeout(() => {
        setShowButton(true);
      }, 2000),
    ];

    return () => timers.forEach(clearTimeout);
  }, [showImage, showText, showButton]);

  return (
    <Wrapper>
      {showImage && <Image src={imageText.image} alt="Display" />}
      {showAuth && <Auth>{imageText.text}</Auth>}
      {showText && <Text>보험, 보드게임 모험을 찾아서</Text>}
      {showButton && (
        <>
          <div>
            이미 계정이 있으신가요?
            <GoAuth onClick={() => navigate('/login')}> 로그인하기</GoAuth>
          </div>
          <div>
            계정이 없으신가요?
            <GoAuth onClick={() => navigate('/signup')}> 회원가입하기</GoAuth>
          </div>
        </>
      )}
      <Outlet />
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
  gap: 50px;
`;

const Image = styled.img`
  width: 250px;
  height: 250px;
  animation: ${fadeIn} 1.5s ease-in-out;
`;

const Auth = styled.p`
  animation: ${fadeIn} 1.5s ease-in-out;
  ${({ theme }) => ({
    fontWeight: theme.fontWeight.bold,
    color: theme.color.green,
  })}
  font-size: 44px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 10.5px;
`;

const Text = styled.p`
  animation: ${fadeIn} 2s ease-in-out;
  ${({ theme }) => ({
    fontSize: theme.fontSize.header1,
    fontWeight: theme.fontWeight.light,
    color: theme.color.black,
  })}
`;

const GoAuth = styled.span`
  ${({ theme }) => ({
    fontWeight: theme.fontWeight.bold,
    color: theme.color.black,
  })}
  &:hover {
    text-decoration: underline;
  }
`;

export default LandingPage;
