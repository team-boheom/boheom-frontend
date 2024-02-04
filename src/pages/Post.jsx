import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import PostCard from '../common/PostCard';
import Layout from '../components/Layout';
import Pagination from '../components/post/Pagination';
import { SearchPosts } from '../utils/feeds';

const PostPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQueryString = searchParams.get('search');
  const pageQueryString = searchParams.get('page');
  const [search, setSearch] = useState(searchQueryString);

  const { data: posts } = SearchPosts(search, pageQueryString-1);

  useEffect(() => {
    setSearch(searchQueryString);
  }, [searchQueryString]);

  return (
    <Layout>
      <SearchResults>
        {posts && posts?.feeds.length !== 0 ? (
          <>'{search}' 검색결과를 찾았어요</>
        ) : (
          <>검색 결과가 없어요..</>
        )}
      </SearchResults>
      <CardListGrid>
        {posts?.feeds ? (
          posts.feeds.map(({ ...item }) => <PostCard {...item} />)
        ) : (
          <></>
        )}
      </CardListGrid>
      <Pagination total_page={posts?.total_page} />
    </Layout>
  );
};

const SearchResults = styled.p`
  ${({ theme }) => ({
    fontSize: theme.fontSize.header3,
    fontWeight: theme.fontWeight.semibold,
    color: theme.color.black,
  })}
`;

const CardListGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 16px;
  margin-top: 40px;
`;

export default PostPage;
