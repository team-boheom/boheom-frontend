import styled from '@emotion/styled';
import Layout from '../components/Layout';
import { DefaultProfile } from '../assets';
import PostCard from '../common/PostCard';
import { GetMyApplied, GetMyPost, GetUserInfo } from '../utils/api/feeds';
import { HandMouse, FaceEye } from '../assets/index';
import { useSetRecoilState } from 'recoil';
import { IsSearchInput } from '../atom';
import { useEffect } from 'react';

const MyPage = () => {
  const { data: UserInfo } = GetUserInfo();
  const { data: MyPost = [] } = GetMyPost();
  const { data: MyApply = [] } = GetMyApplied();

  const setIsSearchInput = useSetRecoilState(IsSearchInput);

  useEffect(() => {
    setIsSearchInput((prev) => !prev);
    return () => {
      setIsSearchInput((prev) => !prev);
    };
  }, []);

  return (
    <Layout>
      <Wrapper>
        <ProfileContainer>
          <img src={UserInfo?.profile || DefaultProfile} alt="프로필사진" />
          <p>{UserInfo?.nickname || '-'}</p>
          <p>@{UserInfo?.account_id || '-'}</p>
        </ProfileContainer>
        <AreaLayout>
          <div className="partition">
            <div>
              <p className="title">내가 신청한 게시글</p>
              <CardListGrid>
                {MyApply.length === 0 ? (
                  <div>
                    <img src={HandMouse} alt="" />
                    <p className="bold">신청한 모집글이 없는 것 같네요..!</p>
                    <p className="regular">
                      빨리 원하는 모집글을 찾아 신청해보세요.
                    </p>
                  </div>
                ) : (
                  MyApply.map((item, idx) => {
                    if (idx > 5) return <></>;
                    return <PostCard {...item} />;
                  })
                )}
              </CardListGrid>
            </div>
            <div>
              <p className="title">내가 작성한 게시글</p>
              <CardListGrid>
                {MyPost.length === 0 ? (
                  <div>
                    <img src={FaceEye} alt="" />
                    <p className="bold">
                      이런, 아무런 모집글도 작성하지 않았어요!
                    </p>
                    <p className="regular">
                      모집글을 작성하여 원하는 사람들과 보드게임 해요!
                    </p>
                  </div>
                ) : (
                  MyPost.map((item, idx) => {
                    if (idx > 5) return <></>;
                    return <PostCard {...item} />;
                  })
                )}
              </CardListGrid>
            </div>
          </div>
        </AreaLayout>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.div`
  width: 950px;
  height: 840px;
  border-radius: 12px;
  box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.05);
  margin: auto;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  gap: 20px;
  > img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }
  > :nth-child(2) {
    ${({ theme }) => ({
      fontSize: theme.fontSize.header2,
      fontWeight: theme.fontWeight.semibold,
      color: theme.color.black,
    })}
  }
  > :nth-child(3) {
    ${({ theme }) => ({
      fontSize: theme.fontSize.body1,
      fontWeight: theme.fontWeight.light,
      color: theme.color.gray400,
    })}
  }
`;

const AreaLayout = styled.div`
  padding: 0 30px;
  width: 100%;
  margin-top: 70px;
  display: grid;
  grid-template-rows: 1fr;
  grid-column-gap: 68px;
  grid-row-gap: 70px;
  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-template-rows: 2;
  }
  > .partition {
    display: flex;
    flex-direction: column;
    gap: 50px;
  }
  .title {
    margin-bottom: 16px;
    padding: 5px;
    ${({ theme }) => ({
      fontSize: theme.fontSize.header3,
      fontWeight: theme.fontWeight.semibold,
      color: theme.color.gray700,
    })}
  }
`;

const CardListGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 16px;
  grid-row-gap: 14px;
  @media screen and (max-width: 650px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    > .bold {
      ${({ theme }) => ({
        fontSize: theme.fontSize.body2,
        fontWeight: theme.fontWeight.bold,
        color: theme.color.black,
      })}
    }
    > .regular {
      ${({ theme }) => ({
        fontSize: theme.fontSize.caption,
        fontWeight: theme.fontWeight.regular,
        color: theme.color.black,
      })}
    }
  }
`;

export default MyPage;
