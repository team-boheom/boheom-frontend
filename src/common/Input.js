import styled from '@emotion/react';
import { fontSize, weight, color } from '../styles/theme';

const Input = ({ ...props }) => {
  return <InputContainer {...props} />;
};

const InputContainer = styled.div`
  width: ${({ props }) => props.width || '100%'};
  padding: 10px 20px;
  border-radius: 8px;
  border: ${color.gray200};
  background: ${color.gray10};
  ::placeholder {
    font-size: ${fontSize.header3};
    font-weight: ${weight.regular};
  }
`;

export default Input;
