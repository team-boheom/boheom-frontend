import styled from '@emotion/styled';
import Input from '../../common/Input';
import { useForm } from 'react-hook-form';

const PostForm = ({ register, errors }) => {
  const handleKeyDown = (e) => {
    if (e.code !== 'Enter') return;
    e.preventDefault();
  };

  return (
    <FormContainer>
      <Input
        {...register('tag', { shouldUnregister: false })}
        type="text"
        label="해시태그"
        placeholder="#퍼즐 #전략 #카드 #협동"
        onKeyDown={handleKeyDown}
      />
      <Input
        {...register('recruitment', { value: 4 })}
        label="모집인원"
        type="number"
        width="81px"
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />

      <div className="calender">
        <div>
          <Input
            label="모집일"
            type="date"
            onChange={(e) => console.log(e.target.value)}
            width="179px"
            {...register('start_day', {
              required: '모집 시작일을 선택해 주세요.',
            })}
          />
          {errors.start_day && (
            <ErrorText role="alert">{errors.start_day.message}</ErrorText>
          )}
        </div>
        <p> ~ </p>
        <div>
          <Input
            label="모집일"
            type="date"
            onChange={(e) => console.log(e.target.value)}
            width="179px"
            {...register('end_day', {
              required: '모집 마감일을 선택해 주세요.',
            })}
          />
          {errors.end_day && (
            <ErrorText role="alert">{errors.end_day.message}</ErrorText>
          )}
        </div>
      </div>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  > .calender {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    > div {
      > :nth-child(1) {
        margin-bottom: 8px;
      }
    }
  }
  > :nth-child(1) {
    flex: 1;
  }
`;

const HashTagContaienr = styled.div``;

const ErrorText = styled.p`
  ${({ theme }) => ({
    fontSize: theme.fontSize.body2,
    fontWeight: theme.fontWeight.regular,
    color: theme.color.red,
  })}
`;

export default PostForm;
