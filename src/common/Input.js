import styled from '@emotion/styled';

const Input = ({ width, ...props }) => {
  return <InputContainer width={width} {...props} />;
};

const InputContainer = styled.input`
  width: ${({ width }) => width || '100%'};
  padding: 10px 20px;
  border-radius: 8px;
  ${({ theme }) => ({
    borderColor: theme.color.gray200,
    backgroundColor: theme.color.gray10,
  })}
  ::placeholder {
    ${({ theme }) => ({
      fontSize: theme.fontSize.header3,
      fontWeight: theme.weight.regular,
    })}
  }
`;

export default Input;
