import Layout from '../components/Layout';
import styled from '@emotion/styled';
import {
  useCancelApply,
  GetDetailPost,
  useApplyPost,
  useDeletePost,
} from '../utils/api/feeds';
import { Person, View, GreenCheck, UpGreenCheck } from '../assets';
import Button from '../common/Button';
import { useState } from 'react';
import Dropdown from '../components/post/DropDown';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { GetPostId, IsSearchInput } from '../atom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const DetailPost = () => {
  const { data: DetailPosts } = GetDetailPost();
  const { mutate: ApplyPosts } = useApplyPost();
  const { mutate: CancelPosts } = useCancelApply();
  const { mutate: DeletePosts } = useDeletePost();
  const navigate = useNavigate();
  const [view, setView] = useState(false);
  const setIsSearchInput = useSetRecoilState(IsSearchInput);
  const feedID = useRecoilValue(GetPostId);

  useEffect(() => {
    setIsSearchInput((prev) => !prev);
    return () => {
      setIsSearchInput((prev) => !prev);
    };
  }, []);

  return (
    <Layout>
      {DetailPosts?.map((item, idx) => {
        const tagsArr = item?.tags?.map((tag) => tag).join(' ');
        const Date = item?.created_at?.slice(0, 10);
        return (
          <div key={idx}>
            <Container>
              <Tag>{tagsArr}</Tag>
              <Title>
                <p>{item.title}</p>
              </Title>
              <div className="detail">
                <div className="child">
                  <Name>{item.username}</Name> ·<p className="date">{Date}</p> ·
                  <div>
                    모집기간 : {item.start_day} ~ {item.end_day}
                  </div>
                </div>
                <div className="list">
                  <ul onClick={() => setView((prev) => !prev)}>
                    {view ? (
                      <img src={UpGreenCheck} alt="up-check" />
                    ) : (
                      <ApplyPerson>
                        <img src={GreenCheck} alt="down-check" />
                        <p>신청자보기</p>
                      </ApplyPerson>
                    )}
                    {view && <Dropdown />}
                  </ul>
                </div>
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
        {DetailPosts?.map((item, idx) => {
          return (
            item.is_applied && (
              <Button
                width="15%"
                text="취소하기"
                backgroundColor="#ffffff"
                color="#FF4249"
                onClick={CancelPosts}
                key={idx}
              />
            )
          );
        })}
        {DetailPosts?.map((item, idx) => {
          return item.is_mine ? (
            <>
              <Button
                width="15%"
                text="삭제하기"
                backgroundColor="#FF4249"
                color="#ffffff"
                key={idx}
                onClick={DeletePosts}
              />
              <Button
                width="15%"
                text="수정하기"
                backgroundColor="#C7C7C7"
                onClick={() => navigate(`/correction/:${feedID}`)}
              />
            </>
          ) : (
            <Button
              width="15%"
              text="신청하기"
              backgroundColor="#44EA51"
              color="#ffffff"
              onClick={ApplyPosts}
              key={idx}
            />
          );
        })}
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
    justify-content: space-between;
    > .list {
      gap: 8px;
      display: flex;
      align-items: center;
      padding: 8px 12px;
      background: #ffffff;
      border-radius: 8px;
      ${({ theme }) => ({
        fontSize: theme.fontSize.body1,
        fontWeight: theme.fontWeight.medium,
        color: theme.color.green700,
      })};
    }
    > .child {
      display: flex;
      gap: 5px;
      > .date {
        ${({ theme }) => ({
          fontSize: theme.fontSize.body1,
          fontWeight: theme.fontWeight.reguler,
          color: theme.color.gray500,
        })};
      }
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

const Name = styled.p`
  ${({ theme }) => ({
    fontSize: theme.fontSize.body1,
    fontWeight: theme.fontWeight.semibold,
    color: theme.color.black,
  })}
`;

const ApplyPerson = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
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
  gap: 10px;
  justify-content: center;
  padding-top: 30px;
`;

export default DetailPost;
