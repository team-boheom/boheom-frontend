import styled from '@emotion/styled';
import Input from '../../common/Input';

const ContentForm = ({ register, errors }) => {
  return (
    <>
      <ErrorWrapper className="titleInput">
        <Input
          {...register('title', { required: '제목을 작성해 주세요.' })}
          label="제목"
          placeholder="제목 작성하기"
        />
        {errors.title && (
          <ErrorText role="alert">{errors.title.message}</ErrorText>
        )}
      </ErrorWrapper>
      <ErrorWrapper className="contentInput">
        <label>내용</label>
        <ContentContainer
          {...register('content', { required: '내용을 작성해 주세요.' })}
          placeholder="내용 작성하기"
        />
        {errors.content && (
          <ErrorText role="alert">{errors.content.message}</ErrorText>
        )}
      </ErrorWrapper>
    </>
  );
};

const ErrorText = styled.p`
  ${({ theme }) => ({
    fontSize: theme.fontSize.body2,
    fontWeight: theme.fontWeight.regular,
    color: theme.color.red,
  })}
`;

const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  > label {
    ${({ theme }) => ({
      fontSize: theme.fontSize.body2,
      fontWeight: theme.fontWeight.regular,
      color: theme.color.gray500,
    })}
  }
`;

const ContentContainer = styled.textarea`
  border-radius: 8px;
  padding: 20px 20px;
  outline: none;
  resize: none;
  line-height: 1;
  border: none;
  background: none;
  width: 100%;
  height: 334px;
  text-align: top;
  ${({ theme }) => ({
    border: `1px solid ${theme.color.gray100}`,
    backgroundColor: theme.color.gray10,
    fontSize: theme.fontSize.body1,
  })}
  ::placeholder {
    color: ${({ theme }) => theme.color.gray500};
  }
`;

export default ContentForm;
