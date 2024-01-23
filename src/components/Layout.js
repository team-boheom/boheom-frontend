import styled from '@emotion/styled';

const Layout = ({ marginX = '16.5vw', children }) => {
  return <Wrapper marginX={marginX}>{children}</Wrapper>;
};

const Wrapper = styled.div`
  width: 100vw;
  margin: 80px 0;
  padding: ${({ marginX }) => `0 ${marginX}`};
  @media screen and (max-width: 900px) {
    padding: 0 6.5vw;
  }
`;

export default Layout;
