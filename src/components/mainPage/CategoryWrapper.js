import styled from '@emotion/styled';
import theme from '../../styles/Theme';
import { Puzzle, Sparkles, Card, People } from '../../assets/index';
import { GetCategoryPosts } from '../../utils/api/feeds';
import PostCard from '../../common/PostCard';

const CategoryPosts = () => {
  const { data: puzzlePosts = [] } = GetCategoryPosts('퍼즐');
  const { data: strategyPosts = [] } = GetCategoryPosts('전략');
  const { data: cardPosts = [] } = GetCategoryPosts('카드');
  const { data: collaborationPosts = [] } = GetCategoryPosts('협동');

  const categoryName = ['puzzle', 'strategy', 'card', 'collaboration'];

  const categoryStyle = {
    puzzle: {
      category: '#퍼즐',
      color: theme.color.green100,
      img: Puzzle,
      list: puzzlePosts,
    },
    strategy: {
      category: '#전략',
      color: theme.color.lightGreen100,
      img: Sparkles,
      list: strategyPosts,
    },
    card: {
      category: '#카드',
      color: theme.color.yellow100,
      img: Card,
      list: cardPosts,
    },
    collaboration: {
      category: '#협동',
      color: '#FBE9DC',
      img: People,
      list: collaborationPosts,
    },
  };

  return (
    <div>
      {categoryName.map((type) => (
        <Container bgColor={categoryStyle[type].color}>
          <div className="head">
            <span className="sub_title">{categoryStyle[type].category}</span>
            <img
              src={categoryStyle[type].img}
              alt={categoryStyle[type].category}
            />
          </div>
          {categoryStyle[type].list.length !== 0 ? (
            <CardListGrid>
              {categoryStyle[type].list.map((item, idx) => {
                if (idx > 1) return <></>;
                return <PostCard {...item} />;
              })}
            </CardListGrid>
          ) : (
            <p>⚠ 아직 뭐가 없어요</p>
          )}
        </Container>
      ))}
    </div>
  );
};

const Container = styled.div`
  width: 100%;
  border-radius: 8px;
  padding: 20px 24px;
  padding-top: 16px;
  background-color: ${({ bgColor }) => bgColor};
  .sub_title {
    ${({ theme }) => ({
      fontSize: theme.fontSize.header3,
      fontWeight: theme.fontWeight.semibold,
      color: theme.color.gray700,
    })}
  }
  > .head {
    display: flex;
    align-items: center;
    gap: 4px;
    margin-bottom: 8px;
  }
  > p {
    margin-top: 12px;
    ${({ theme }) => ({
      color: theme.color.gray500,
      fontSize: theme.fontSize.body2,
    })}
  }
`;

const CardListGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px;
  @media screen and (max-width: 900px) {
    grid-gap: 24px;
  }
  @media screen and (max-width: 650px) {
    grid-gap: 16px;
  }
`;

export default CategoryPosts;
