import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';
import { Search } from '../assets/index';
import { useNavigate } from 'react-router';

const SearchInput = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = ({ search }) => {
    navigate(`/post?search=${search}`);
  };

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('search')}
        type="text"
        placeholder="보드게임 모험을 찾아서"
        autocomplete="off"
      />
      <div>
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
