import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { ReactComponent as Boheom } from '../assets/Boheom.svg';
import SearchInput from './SearchInput';

const Header = () => {
  return (
    <Wrapper>
      <Link to="/main">
        <Boheom width="88" height="25" />
      </Link>
      <SearchInput />
      <Content>
        <StyledLink to="/CreatePost">글 등록하기</StyledLink>
        <StyledLink to="/mypage">마이페이지</StyledLink>
        <StyledLink>로그아웃</StyledLink>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 70px;
  padding: 0 9%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  background-color: ${({ theme }) => theme.color.white};
`;

const Content = styled.div`
  width: 250px;
  display: flex;
  justify-content: space-between;
`;

const StyledLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  ${({ theme }) => ({
    fontSize: theme.fontSize.body1,
    fontWeight: theme.fontWeight.regular,
    color: theme.color.black,
  })}
`;

export default Header;
