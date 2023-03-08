// // import React from 'react';
// // import { ButtonProps } from './Button.types';
// // import './Button.css';

// // const Button: React.FC<ButtonProps> = ({ text, type, color, backgroundColor }) => {
// //   return (
// //     <button className={`button ${type}`} style={{ color, backgroundColor }}>
// //       {text}
// //     </button>
// //   );
// // };

// export default Button;
import React from "react";
import { ButtonProps } from "./Button.types";
import styled from "styled-components";

const StyledButton = styled.button<ButtonProps>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
  border: none;
  border-radius: 4px;
  padding: 10px 16px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &.primary {
    background-color: ${({ backgroundColor }) => backgroundColor};
    color: ${({ color }) => color};
    border: 1px solid ${({ backgroundColor }) => backgroundColor};
  }

  &.secondary {
    background-color: transparent;
    color: ${({ backgroundColor }) => backgroundColor};
    border: 1px solid ${({ backgroundColor }) => backgroundColor};
  }
`;

const Button: React.FC<ButtonProps> = ({
  text,
  type,
  color,
  backgroundColor,
}) => {
  return (
    <StyledButton
      className={type}
      backgroundColor={backgroundColor}
      color={color}
      text={text}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
