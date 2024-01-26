import styled from '@emotion/styled';
import PostCard from '../common/PostCard';
import Layout from '../components/Layout';
import CategoryWrapper from '../components/mainPage/CategoryWrapper';
import { GetPopularPosts, GetRecentPosts } from '../utils/api/feeds';

const MainPage = () => {
  const { data: recentPosts = [] } = GetRecentPosts();
  const { data: popularPosts = [] } = GetPopularPosts();

  return (
    <Layout marginX="6.5vw">
      <Title>
        <span className="highlight">보</span>드게임
        <br /> 모<span className="highlight">험</span>을 찾아서
      </Title>
      <Contents>
        {`보드게임을 하고 싶은데 할 사람이 없거나 찾고 있으신가요? 
이곳 보험에서 팀원들을 모집하고 보드게임을 즐겨보세요!`}
      </Contents>
      <AreaLayout>
        <div className="partition">
          <div>
            <p className="title">최근에 올라온 게시글</p>
            <CardListGrid>
              {recentPosts.map((item, idx) => {
                if (idx > 5) return <></>;
                return <PostCard {...item} />;
              })}
            </CardListGrid>
          </div>
          <div>
            <p className="title">가장 인기있는 게시글</p>
            <CardListGrid>
              {popularPosts.map((item, idx) => {
                if (idx > 5) return <></>;
                return (
                  <PostCard {...item} ranking={idx < 3 ? idx + 1 : null} />
                );
              })}
            </CardListGrid>
          </div>
        </div>
        <Category>
          <p className="title">카테고리 별 게시글</p>
          <div>
            <CategoryWrapper type="puzzle">{/*퍼즐 */}</CategoryWrapper>
            <CategoryWrapper type="strategy">{/*전략 */}</CategoryWrapper>
            <CategoryWrapper type="card">{/*카드 */}</CategoryWrapper>
            <CategoryWrapper type="collaboration">{/*협동 */}</CategoryWrapper>
          </div>
        </Category>
      </AreaLayout>
    </Layout>
  );
};

const Title = styled.h1`
  ${({ theme }) => ({
    fontSize: theme.fontSize.header1,
    fontWeight: theme.fontWeight.bold,
    color: theme.color.black,
  })}
  line-height: normal;
  > .highlight {
    color: ${({ theme }) => theme.color.green600};
  }
`;

const Contents = styled.p`
  white-space: pre-wrap;
  line-height: 20px;
  margin-top: 20px;
`;

const AreaLayout = styled.div`
  width: 100%;
  margin-top: 70px;
  display: grid;
  grid-template-columns: 3fr 2fr;
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
    gap: 70px;
  }
  .title {
    margin-bottom: 16px;
    ${({ theme }) => ({
      fontSize: theme.fontSize.header2,
      fontWeight: theme.fontWeight.semibold,
      color: theme.color.gray700,
    })}
  }
`;

const CardListGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-column-gap: 16px;
  grid-row-gap: 14px;
  @media screen and (max-width: 650px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
`;

const Category = styled.div`
  > div {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }
`;

export default MainPage;
