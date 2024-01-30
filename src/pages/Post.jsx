import styled from '@emotion/styled';
import PostCard from '../common/PostCard';
import Layout from '../components/Layout';
import Pagination from '../components/post/Pagination';
import useQueryString from '../hooks/useQueryString';

const PostPage = () => {
  const { qeuryString } = useQueryString({ search: '', page: '1' });
  return (
    <Layout>
      <SearchResults>'{'뱅'}' 검색결과를 찾았어요</SearchResults>
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
      </CardListGrid>
      <div>
        <Pagination total_page={3} />
      </div>
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
  + div {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 60px;
  }
`;

export default PostPage;
