import React from 'react';
import styled from '@emotion/styled';
import { Arrow, Date } from '../assets';

const CreatePost = () => {
  return (
    <>
      {/* <Header /> */}
      <Wrapper>
        <TitleContainer>
          <ArrowImg src={Arrow} />
          <TitleWrapper>
            <TitleRed>모집글 작성</TitleRed>
            <TitleBlack>모험을 시작해볼까요?</TitleBlack>
          </TitleWrapper>
        </TitleContainer>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0 380px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 130px;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const ArrowImg = styled.img`
  width: 100px;
  height: 100px;
`;

const TitleBasic = styled.div`
  font-weight: ${({ theme }) => theme.weight.bold};
  font-size: ${({ theme }) => theme.fontSize.header1};
`;

const TitleRed = styled(TitleBasic)`
  color: ${({ theme }) => theme.color.red};
  padding-bottom: 5px;
`;

const TitleBlack = styled(TitleBasic)`
  color: ${({ theme }) => theme.color.black};
`;

export default CreatePost;
