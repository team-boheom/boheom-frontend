import styled from '@emotion/styled';
import { ArrowLeft, ArrowRight } from '../../assets';

const Pagination = ({ total_page }) => {
  const arrayOfPages = Array(total_page).fill(0);

  return (
    <Wrapper>
      <img src={ArrowLeft} alt="이전" />
      {arrayOfPages.map((_, idx) => (
        <PageNumber>
          <p className={'1' == idx + 1 ? 'select' : ''}>{idx + 1}</p>
        </PageNumber>
      ))}
      <img src={ArrowRight} alt="다음" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 12px;
  > img,
  div {
    cursor: pointer;
  }
`;

const PageNumber = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    ${({ theme }) => ({
      fontSize: theme.fontSize.body1,
      fontWeight: theme.fontWeight.reguler,
      color: theme.color.gray500,
    })}
  }
  .select {
    ${({ theme }) => ({
      fontWeight: theme.fontWeight.bold,
      color: theme.color.black,
    })}
  }
`;

export default Pagination;
