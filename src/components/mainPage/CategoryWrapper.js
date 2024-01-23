import styled from '@emotion/styled';
import theme from '../../styles/Theme';
import { Puzzle, Sparkles, Card, People } from '../../assets/index';

const categoryStyle = {
  puzzle: {
    category: '#퍼즐',
    color: theme.color.green100,
    img: Puzzle,
  },
  strategy: {
    category: '#전략',
    color: theme.color.lightGreen100,
    img: Sparkles,
  },
  card: {
    category: '#카드',
    color: theme.color.yellow100,
    img: Card,
  },
  collaboration: {
    category: '#협동',
    color: '#FBE9DC',
    img: People,
  },
};

const CategoryWrapper = ({ type, children }) => {
  return (
    <Container bgColor={categoryStyle[type].color}>
      <div className="head">
        <span className="sub_title">{categoryStyle[type].category}</span>
        <img src={categoryStyle[type].img} alt={categoryStyle[type].category} />
      </div>
      <CardListGrid>{children}</CardListGrid>
    </Container>
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

export default CategoryWrapper;
