import styled from '@emotion/styled';
import { useForm, Controller } from 'react-hook-form';

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
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    console.log(errors);
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
              <small role="alert" className="error">
                {errors.title.message}
              </small>
            )}

            <ContentContainer
              {...register('content', { required: '내용을 작성해 주세요.' })}
              aria-invalid={
                isSubmitted ? (errors.content ? 'true' : 'false') : undefined
              }
              placeholder="내용 작성하기"
              type="text"
            />
            {errors.content && (
              <small role="alert" className="error">
                {errors.content.message}
              </small>
            )}

            <FormContainer>
              <Input
                {...register('tag')}
                label="해시태그"
                placeholder="#퍼즐 #전략 #카드 #협동"
              />
              <Input
                {...register('members', {
                  required: '모집인원을 작성해 주세요.',
                })}
                label="모집인원"
                placeholder="기본 4인"
              />
              {errors.members && (
                <small role="alert" className="error">
                  {errors.members.message}
                </small>
              )}
              <Input label="모집일" />
              <p> ~ </p>
              <Input label="모집일" />
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
  > .error {
    ${({ theme }) => ({
      fontSize: theme.fontSize.body2,
      fontWeight: theme.fontWeight.regular,
      color: theme.color.red,
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
  gap: 50px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  padding-top: 50px;
`;

export default CreatePost;
