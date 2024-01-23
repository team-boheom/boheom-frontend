import styled from '@emotion/styled';
import { ReactComponent as Boheom } from '../assets/Boheom.svg';
import SearchInput from '../components/SearchInput';

const Header = () => {
  return (
    <Wrapper>
      <Boheom />
      <SearchInput />
      <Content>
        <Write>글 등록하기</Write>
        <MyPage>마이페이지</MyPage>
        <LogOut>로그아웃</LogOut>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 70px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Content = styled.div`
  width: 250px;
  display: flex;
  justify-content: space-between;
`;

const Write = styled.text`
  cursor: pointer;
`;

const MyPage = styled.text`
  cursor: pointer;
`;

const LogOut = styled.text`
  cursor: pointer;
`;

export default Header;
