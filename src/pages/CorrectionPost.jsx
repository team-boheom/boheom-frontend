import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';
import { Arrow } from '../assets/index';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Button from '../common/Button';
import PostForm from '../components/post/PostForm';
import ContentForm from '../components/post/ContentForm';
import { useCorreectionPost } from '../utils/api/feeds';
import { useSetRecoilState } from 'recoil';
import { IsSearchInput } from '../atom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CorrectionPost = () => {
  const setIsSearchInput = useSetRecoilState(IsSearchInput);
  const navigate = useNavigate();
  const { mutate: CorreectionPost } = useCorreectionPost();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({ defaultValues: { recruitment: 4 } });

  const onSubmit = (data) => {
    const regeax = /#[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|\w);]+/g;
    const tag = data.tag.match(regeax);
    const { title, content, recruitment, start_day, end_day } = data;
    CorreectionPost({
      tag,
      title,
      content,
      recruitment,
      start_day,
      end_day,
    });
  };

  useEffect(() => {
    setIsSearchInput((prev) => !prev);
    return () => {
      setIsSearchInput((prev) => !prev);
    };
  }, []);

  return (
    <>
      <Header />
      <Layout>
        <TitleContainer>
          <img src={Arrow} alt="Title Img" />
          <TitleWrapper>
            <p className="red">글 수정하기</p>
            <p className="black">글 수정을 진행할게요.</p>
          </TitleWrapper>
        </TitleContainer>
        <FormWrapper>
          <form onSubmit={handleSubmit(onSubmit)}>
            <ContentForm register={register} errors={errors} />
            <PostForm register={register} errors={errors} />
            <ButtonContainer>
              <Button
                text="취소"
                type="button"
                width="15%"
                color="#828282"
                backgroundColor="#ffffff"
                disabled={isSubmitting}
                onClick={() => navigate(-1)}
              />
              <Button
                text="수정하기"
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
  > .red {
    color: ${({ theme }) => theme.color.red};
    padding-bottom: 5px;
  }
  > .black {
    color: ${({ theme }) => theme.color.black};
  }
`;

const FormWrapper = styled.div`
  margin-top: 30px;
  padding: 16px 20px;
  > form {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  padding-top: 50px;
`;

export default CorrectionPost;
