import Layout from '../components/Layout';
import styled from '@emotion/styled';
import { GetDetailPost, useApplyPost } from '../utils/api/feeds';
import { Person, View } from '../assets';
import Button from '../common/Button';

const DetailPost = () => {
  const { data: DetailPosts } = GetDetailPost();
  const { mutate: ApplyPosts } = useApplyPost();
  return (
    <Layout>
      {DetailPosts?.map((item, index) => {
        const tagsArr = item?.tags?.map((tag) => tag).join(' ');
        const Date = item?.created_at?.slice(0, 10);
        return (
          <div key={index}>
            <Container>
              <Tag>{tagsArr}</Tag>
              <Title>
                <p>{item.title}</p>
              </Title>
              <div className="detail">
                <p className="name">{item.username}</p> ·
                <p className="date">작성날짜 : {Date}</p> ·
                <p>
                  모집기간 : {item.start_day} ~ {item.end_day}
                </p>
              </div>
              <EtcInfo>
                <div>
                  <img src={View} alt="조횟수" />
                  <p>{item.view}</p>
                </div>
                <div>
                  <img src={Person} alt="신청인원" />
                  <p>
                    {item.apply_count}/{item.recruitment}
                  </p>
                </div>
              </EtcInfo>
            </Container>
            <Content>
              <p>{item.content}</p>
              <hr />
            </Content>
          </div>
        );
      })}
      <ButtonWrapper>
        <Button
          width="15%"
          text="신청하기"
          backgroundColor="#44EA51"
          color="#ffffff"
          onClick={ApplyPosts}
        />
      </ButtonWrapper>
    </Layout>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  outline-color: ${({ theme }) => theme.color.green150};
  > .detail {
    display: flex;
    gap: 7px;
    > .name {
      ${({ theme }) => ({
        fontSize: theme.fontSize.body1,
        fontWeight: theme.fontWeight.semibold,
        color: theme.color.black,
      })}
    }
    > .date {
      ${({ theme }) => ({
        fontSize: theme.fontSize.body1,
        fontWeight: theme.fontWeight.reguler,
        color: theme.color.gray500,
      })}
    }
  }
`;

const Tag = styled.div`
  ${({ theme }) => ({
    fontSize: theme.fontSize.header3,
    fontWeight: theme.fontWeight.medium,
    color: theme.color.green600,
  })}
`;

const Title = styled.div`
  max-height: 40px;
  margin-bottom: 12px;
  margin-top: 8px;
  > p {
    ${({ theme }) => ({
      fontSize: theme.fontSize.header1,
      fontWeight: theme.fontWeight.semibold,
      color: theme.color.black,
    })}
  }
`;

const Content = styled.div`
  padding-top: 50px;
  > p {
    ${({ theme }) => ({
      fontSize: theme.fontSize.header3,
      fontWeight: theme.fontWeight.reguler,
      color: theme.color.black,
    })}
  }
  > hr {
    margin-top: 150px;
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

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 30px;
`;

export default DetailPost;
