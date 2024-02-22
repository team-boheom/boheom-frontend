import styled from '@emotion/styled';
import { Person, View } from '../assets';
import { Link } from 'react-router-dom';
import Medal from '../assets/Medal';
import { useRecoilState } from 'recoil';
import { GetPostId } from '../atom';
import DetailsPosts from '../pages/DetailPost';
import { GetDetailPost } from '../utils/api/feeds';

const PostCard = ({
  tags,
  title,
  content,
  view,
  recruitment,
  apply_count,
  id,
  ranking,
}) => {
  const [postId, setPostId] = useRecoilState(GetPostId);
  // const { data: DetailPost = {} } = GetDetailPost();
  // const DetailPosts = Array.isArray(DetailPost) ? DetailPost : [DetailPost];
  return (
    <>
      <Container to={`/post/${id}`} onClick={() => setPostId(id)}>
        <div>
          {tags.map((item, idx) => (
            <Tag key={idx}>{item}</Tag>
          ))}
        </div>
        <TextContents>
          <div className="title_">
            <p>{title}</p>
          </div>
          <div className="main_text">
            <p>{content}</p>
          </div>
        </TextContents>
        <EtcInfo>
          <div>
            <img src={View} alt="조횟수" />
            <p>{view}</p>
          </div>
          <div>
            <img src={Person} alt="신청인원" />
            <p>
              {apply_count}/{recruitment}
            </p>
          </div>
        </EtcInfo>
        {ranking && (
          <Ranking>
            <Medal rank={ranking} />
          </Ranking>
        )}
      </Container>
    </>
  );
};

const Container = styled(Link)`
  width: 100%;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 8px;
  box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.05);
  padding: 20px 24px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: 0.2s all;
  outline-color: ${({ theme }) => theme.color.green150};
  :hover {
    scale: 1.02;
  }
`;

const Tag = styled.span`
  margin-right: 4px;
  ${({ theme }) => ({
    fontSize: theme.fontSize.caption,
    fontWeight: theme.fontWeight.reguler,
    color: theme.color.green600,
  })}
`;

const TextContents = styled.div`
  > div {
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
  > .title_ {
    max-height: 40px;
    margin-bottom: 12px;
    margin-top: 8px;
    > p {
      ${({ theme }) => ({
        fontSize: theme.fontSize.body1,
        fontWeight: theme.fontWeight.bold,
        color: theme.color.black,
      })}
    }
  }
  > .main_text {
    max-height: 28px;
    > p {
      ${({ theme }) => ({
        fontSize: theme.fontSize.body2,
        fontWeight: theme.fontWeight.reguler,
        color: theme.color.gray500,
      })}
    }
  }
`;

const EtcInfo = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 14px;
  > div {
    display: flex;
    align-items: center;
    gap: 6px;
  }
  p {
    ${({ theme }) => ({
      fontSize: theme.fontSize.caption,
      fontWeight: theme.fontWeight.reguler,
      color: theme.color.gray500,
    })}
  }
`;

const Ranking = styled.div`
  position: absolute;
  top: -24px;
  right: -24px;
  width: 76px;
  height: 76px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.green150};
  padding: 32px 0 0 14px;
`;

export default PostCard;
