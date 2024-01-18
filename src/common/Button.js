import styled from '@emotion/styled';

const Button = ({ text, onClick, width, color }) => {
  return (
    <ButtonContainer width={width} color={color} onClick={onClick}>
      {text}
    </ButtonContainer>
  );
};

const ButtonContainer = styled.button`
  background-color: ${({ color }) => color || 'white'};
  border: none;
  border-radius: 8px;
  width: ${({ width }) => width || '100%'};
  color: ${({ color }) => color || 'black'};
  height: 48px;
  ${({ theme }) => ({
    fontWeight: theme.weight.bold,
    fontSize: theme.fontSize.header3,
  })}
  padding: 10px 20px;
  display: block;
  &:hover {
    /* background-color: ${({ color }) =>
      color || 'white'}; // 기본 색상 설정 */
    filter: brightness(95%);
  }
  cursor: pointer;
`;

export default Button;
