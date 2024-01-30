import styled from '@emotion/styled';
import { ArrowLeft, ArrowRight } from '../../assets';
import useQueryString from '../../hooks/useQueryString';
import { useEffect, useState } from 'react';

const Pagination = ({ total_page }) => {
  const arrayOfPages = Array(total_page).fill(0);
  const { queryState, setQueryString } = useQueryString({
    search: '',
    page: '1',
  });
  const [pageNum, setPageNum] = useState(queryState.page);

  useEffect(() => {
    setQueryString('page', pageNum);
  }, [pageNum]);

  return (
    <Wrapper>
      <img
        src={ArrowLeft}
        alt="이전"
        onClick={() => {
          if (pageNum > 1) setPageNum((prev) => (Number(prev) - 1).toString());
        }}
      />
      {arrayOfPages.map((_, idx) => (
        <PageNumber
          onClick={() => {
            setPageNum((idx + 1).toString());
          }}
        >
          <p className={pageNum === (idx + 1).toString() ? 'select' : ''}>
            {idx + 1}
          </p>
        </PageNumber>
      ))}
      <img
        src={ArrowRight}
        alt="다음"
        onClick={() => {
          if (pageNum < total_page)
            setPageNum((prev) => (Number(prev) + 1).toString());
        }}
      />
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
