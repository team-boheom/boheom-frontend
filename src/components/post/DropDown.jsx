import React from 'react';
import styled from '@emotion/styled';
import { GetApplyUserList } from '../../utils/api/feeds';
import { DefaultProfile } from '../../assets';

const Dropdown = () => {
  const { data: ApplyUserList } = GetApplyUserList();
  return (
    <Wrapper>
      {ApplyUserList?.length === 0 && (
        <Container>
          <li className="name">
            <p>아직 신청한 사람이 없어요.</p>
          </li>
        </Container>
      )}
      {ApplyUserList?.map((item, idx) => (
        <Container key={idx}>
          <li>
            {item.profile ? (
              <img className="profile" src={item.profile} alt="프사" />
            ) : (
              <img className="profile" src={DefaultProfile} alt="기본프사" />
            )}
          </li>
          <li className="name">{item.nickname}</li>
        </Container>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: auto;
  height: auto;
  display: flex;
  border-radius: 8px;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  background-color: #ffffff;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  > li > .profile {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  > li:last-child.name {
    ${({ theme }) => ({
      fontSize: theme.fontSize.body1,
      fontWeight: theme.fontWeight.regular,
      color: theme.color.black,
    })}
  }
`;

export default Dropdown;
