import styled from '@emotion/styled';
import { useState } from 'react';
import Eye from '../assets/Eye';

const Input = ({ label, width = '100%', type = 'text', ...props }) => {
  const [passwordOpen, setPasswordOpen] = useState(false);

  return (
    <div>
      {label && <Label className="label">{label}</Label>}
      <InputContainer width={width}>
        <input
          type={type !== 'password' ? type : passwordOpen ? 'text' : 'password'}
          {...props}
        />
        {type === 'password' && (
          <EyeContainer
            onClick={() => {
              setPasswordOpen((prev) => !prev);
            }}
          >
            <Eye state={passwordOpen} />
          </EyeContainer>
        )}
      </InputContainer>
    </div>
  );
};

const Label = styled.p`
  margin-bottom: 4px;
  ${({ theme }) => ({
    fontSize: theme.fontSize.body2,
    fontWeight: theme.fontWeight.regular,
    color: theme.color.gray500,
  })}
`;

const InputContainer = styled.div`
  width: ${({ width }) => width};
  border-radius: 8px;
  display: flex;
  align-items: center;
  overflow: hidden;
  ${({ theme }) => ({
    border: `1px solid ${theme.color.gray100}`,
    backgroundColor: theme.color.gray10,
  })}
  > input {
    ${({ theme }) => ({
      fontWeight: theme.fontWeight.regular,
      fontSize: theme.fontSize.body1,
    })}
    padding: 10px 20px;
    flex: 1;
    border: none;
    background: none;
    outline: none;
    ::placeholder {
      ${({ theme }) => ({
        color: theme.color.gray500,
      })}
    }
  }
`;

const EyeContainer = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 12px;
  cursor: pointer;
`;

export default Input;
