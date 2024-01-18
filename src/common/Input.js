import styled from '@emotion/styled';

const Input = ({ width, ...props }) => {
  return <InputContainer width={width} {...props} />;
};

const InputContainer = styled.input`
  width: ${({ width }) => width || '100%'};
  padding: 10px 20px;
  border-radius: 8px;
  outline: none;
  ${({ theme }) => ({
    border: `1px solid ${theme.color.gray100}`,
    backgroundColor: theme.color.gray10,
    fontWeight: theme.weight.regular,
    fontSize: theme.fontSize.body1,
  })}

  ::placeholder {
    ${({ theme }) => ({
      color: theme.color.gray500,
    })}
  }
`;

export default Input;
