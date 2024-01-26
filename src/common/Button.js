import styled from '@emotion/styled';

const Button = ({
  text,
  onClick,
  width = '100%',
  color,
  backgroundColor,
  type = 'submit',
}) => {
  return (
    <ButtonContainer
      width={width}
      color={color}
      onClick={onClick}
      backgroundColor={backgroundColor}
      type={type}
    >
      {text}
    </ButtonContainer>
  );
};

const ButtonContainer = styled.button`
  background-color: ${({ backgroundColor }) => backgroundColor};
  border: 1px solid #cdcdcd;
  border-radius: 8px;
  width: ${({ width }) => width};
  color: ${({ color }) => color};
  height: 48px;
  ${({ theme }) => ({
    fontWeight: theme.fontWeight.bold,
    fontSize: theme.fontSize.header3,
  })}
  padding: 10px 20px;
  display: block;
  &:hover {
    filter: brightness(95%);
  }
  cursor: pointer;
`;

export default Button;
