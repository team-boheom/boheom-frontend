import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';
import { Arrow } from '../assets/index';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Input from '../common/Input';
import Button from '../common/Button';

const CreatePost = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isSubmitted, errors },
  } = useForm({ defaultValues: { number: 4 } });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <Header />
      <Layout>
        <TitleContainer>
          <img src={Arrow} alt="Title Img" />
          <TitleWrapper>
            <p>모집글 작성</p>
            <p>모험을 시작해볼까요?</p>
          </TitleWrapper>
        </TitleContainer>
        <FormWrapper>
          <form onSubmit={handleSubmit(onSubmit)}>
            <ErrorWrapper className="titleInput">
              <Input
                {...register('title', { required: '제목을 작성해 주세요.' })}
                aria-invalid={
                  isSubmitted ? (errors.title ? 'true' : 'false') : undefined
                }
                label="제목"
                type="text"
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
                aria-invalid={
                  isSubmitted ? (errors.content ? 'true' : 'false') : undefined
                }
                placeholder="내용 작성하기"
                type="text"
              />
              {errors.content && (
                <ErrorText role="alert">{errors.content.message}</ErrorText>
              )}
            </ErrorWrapper>

            <FormContainer>
              <Input
                {...register('tag')}
                label="해시태그"
                placeholder="#퍼즐 #전략 #카드 #협동"
                width="564px"
              />
              <Input
                {...register('number', { value: 4 })}
                label="모집인원"
                type="number"
                width="81px"
                onChange={(e) => {
                  console.log(e.target.value);
                }}
              />

              <div className="calender">
                <Input
                  label="모집일"
                  type="date"
                  onChange={(e) => console.log(e.target.value)}
                  width="179px"
                  {...register('startDate', {
                    required: '모집 시작일을 선택해 주세요.',
                  })}
                  aria-invalid={
                    isSubmitted
                      ? errors.startDate
                        ? 'true'
                        : 'false'
                      : undefined
                  }
                />
                {errors.startDate && (
                  <ErrorText role="alert">{errors.startDate.message}</ErrorText>
                )}
                <p> ~ </p>
                <Input
                  label="모집일"
                  type="date"
                  onChange={(e) => console.log(e.target.value)}
                  width="179px"
                  {...register('endDate', {
                    required: '모집 마감일을 선택해 주세요.',
                  })}
                  aria-invalid={
                    isSubmitted
                      ? errors.endDate
                        ? 'true'
                        : 'false'
                      : undefined
                  }
                />
                {errors.endDate && (
                  <ErrorText role="alert">{errors.endDate.message}</ErrorText>
                )}
              </div>
            </FormContainer>

            <ButtonContainer>
              <Button
                text="취소"
                type="button"
                width="15%"
                color="#828282"
                backgroundColor="#ffffff"
                disabled={isSubmitting}
              />
              <Button
                text="등록"
                type="submit"
                width="15%"
                backgroundColor="#44EA51"
                color="#ffffff"
                disabled={isSubmitting}
              />
            </ButtonContainer>
          </form>
        </FormWrapper>
      </Layout>
    </>
  );
};

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  > img {
    width: 100px;
    height: 100px;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-left: 20px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.header1};
  > :nth-child(1) {
    color: ${({ theme }) => theme.color.red};
    padding-bottom: 5px;
  }
  > :nth-child(2) {
    color: ${({ theme }) => theme.color.black};
  }
`;

const FormWrapper = styled.div`
  margin-top: 30px;
  padding: 16px 20px;
  > form {
    display: flex;
    flex-direction: column;
    gap: 50px;
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
  })}
  ::placeholder {
    ${({ theme }) => ({
      color: theme.color.gray500,
      fontSize: theme.fontSize.body1,
    })}
  }
`;

const FormContainer = styled.div`
  display: flex;
  gap: 49px;
  > .calender {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }
`;

const ErrorText = styled.small`
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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  padding-top: 50px;
`;

export default CreatePost;
