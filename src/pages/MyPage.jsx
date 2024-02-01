import styled from '@emotion/styled';
import Layout from '../components/Layout';
import { DefaultProfile } from '../assets';
import PostCard from '../common/PostCard';

const MyPage = () => {
  return (
    <Layout>
      <Wrapper>
        <ProfileContainer>
          <img src={DefaultProfile} alt="프로필사진" />
          <p>김민지 예쁘다</p>
          <p>@prettyMinji</p>
        </ProfileContainer>
        <AreaLayout>
          <div className="partition">
            <div>
              <p className="title">최근에 올라온 게시글</p>
              <CardListGrid>
                <PostCard
                  tags={['뱅', '모여라']}
                  title={'같이 뱅 하실래요?'}
                  content={
                    '같이 뱅 할사람 모여라 블라블라블라블라블라블라블라블라블라블라'
                  }
                  view={25}
                  apply_count={1}
                  recruitment={4}
                  id={1}
                />
                <PostCard
                  tags={['뱅', '모여라']}
                  title={'같이 뱅 하실래요?'}
                  content={
                    '같이 뱅 할사람 모여라 블라블라블라블라블라블라블라블라블라블라'
                  }
                  view={25}
                  apply_count={1}
                  recruitment={4}
                  id={1}
                />
                <PostCard
                  tags={['뱅', '모여라']}
                  title={'같이 뱅 하실래요?'}
                  content={
                    '같이 뱅 할사람 모여라 블라블라블라블라블라블라블라블라블라블라'
                  }
                  view={25}
                  apply_count={1}
                  recruitment={4}
                  id={1}
                />
              </CardListGrid>
            </div>
            <div>
              <p className="title">내가 작성한 게시글</p>
              <CardListGrid>
                <PostCard
                  tags={['뱅', '모여라']}
                  title={'같이 뱅 하실래요?'}
                  content={
                    '같이 뱅 할사람 모여라 블라블라블라블라블라블라블라블라블라블라'
                  }
                  view={25}
                  apply_count={1}
                  recruitment={4}
                  id={1}
                />
                <PostCard
                  tags={['뱅', '모여라']}
                  title={'같이 뱅 하실래요?'}
                  content={
                    '같이 뱅 할사람 모여라 블라블라블라블라블라블라블라블라블라블라'
                  }
                  view={25}
                  apply_count={1}
                  recruitment={4}
                  id={1}
                />
                <PostCard
                  tags={['뱅', '모여라']}
                  title={'같이 뱅 하실래요?'}
                  content={
                    '같이 뱅 할사람 모여라 블라블라블라블라블라블라블라블라블라블라'
                  }
                  view={25}
                  apply_count={1}
                  recruitment={4}
                  id={1}
                />
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
  height: 820px;
  border-radius: 8px;
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
`;

export default MyPage;
