import styled from '@emotion/styled';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { Search } from '../assets/index';

const SearchInput = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const queryString = searchParams.get('search');
  const [search, setSearch] = useState(queryString);

  const onSubmit = (e) => {
    e.preventDefault();
    if (search !== '') {
      navigate(`/post?search=${search}&page=1`);
    }
  };

  return (
    <Container onSubmit={onSubmit}>
      <input
        // {...register('search')}
        name="search"
        type="text"
        placeholder="보드게임 모험을 찾아서"
        autocomplete="off"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <div onClick={onSubmit}>
        <img src={Search} />
      </div>
    </Container>
  );
};

const Container = styled.form`
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
