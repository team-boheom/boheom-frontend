import styled from '@emotion/styled';
import { useState, forwardRef } from 'react';
import Eye from '../assets/Eye';

const Input = forwardRef(
  (
    { label, width = '100%', height = '48px', type = 'text', ...props },
    ref
  ) => {
    const [passwordOpen, setPasswordOpen] = useState(false);

    return (
      <Wrapper>
        {label && <p className="label">{label}</p>}
        <InputContainer width={width} height={height}>
          <input
            ref={ref}
            type={
              type !== 'password' ? type : passwordOpen ? 'text' : 'password'
            }
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
      </Wrapper>
    );
  }
);

const Wrapper = styled.div`
  width: ${({ width }) => width};
  > .label {
    margin-bottom: 4px;
    ${({ theme }) => ({
      fontSize: theme.fontSize.body2,
      fontWeight: theme.fontWeight.regular,
      color: theme.color.gray500,
    })}
  }
`;

const InputContainer = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: 8px;
  display: flex;
  align-items: center;
  overflow: hidden;
  ${({ theme }) => ({
    border: `1px solid ${theme.color.gray100}`,
    backgroundColor: theme.color.gray10,
  })}
  > input {
    width: 100%;
    height: 100%;
    ${({ theme }) => ({
      fontWeight: theme.fontWeight.regular,
      fontSize: theme.fontSize.body1,
    })}
    padding: 10px 20px;
    border: none;
    background: none;
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
