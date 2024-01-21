import styled from '@emotion/styled';
import { Search } from '../assets/index';

const SearchInput = () => {
  return (
    <Container>
      <input type="text" placeholder="보드게임 모험을 찾아서" />
      <div>
        <img src={Search} />
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 660px;
  height: 40px;
  background-color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.gray200};
  border-radius: 100px;
  display: flex;
  align-items: center;
  overflow: hidden;
  > input {
    border: none;
    width: 100%;
    height: 100%;
    padding: 14px 30px;
    ${({ theme }) => ({
      fontSize: theme.fontSize.body2,
      fontWeight: theme.fontWeight.regular,
      color: theme.color.black,
    })}
  }
  > div {
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    cursor: pointer;
  }
`;

export default SearchInput;
