import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { ArrowLeft, ArrowRight } from '../../assets';

const Pagination = ({ total_page }) => {
  const arrayOfPages = Array(total_page).fill(0);
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const queryString = searchParams.get('page');
  const [pageNum, setPageNum] = useState(queryString || 1);

  console.log(location.search.split('&page=')[0]);

  useEffect(() => {
    navigate(
      `${location.pathname}${location.search.split('&page')[0]}&page=${pageNum}`
    );
  }, [pageNum]);

  return (
    <Wrapper>
      {total_page ? (
        <>
          <img
            src={ArrowLeft}
            alt="이전"
            onClick={() => {
              if (pageNum > 1)
                setPageNum((prev) => (Number(prev) - 1).toString());
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
        </>
      ) : (
        <></>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 60px;
  > img,
  div {
    cursor: pointer;
  }
`;

const PageNumber = styled.button`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
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
