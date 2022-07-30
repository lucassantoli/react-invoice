import React, { FC } from "react";

import {
  ButtonTextPrimary as StyledButtonTextPrimary,
  ButtonTextDanger as StyledButtonTextDanger,
} from "./styles";

interface Props {
  children: React.ReactNode;
}

const ButtonTextPrimary: FC<Props> = ({ children }) => {
  return (
    <StyledButtonTextPrimary title="Botão">{children}</StyledButtonTextPrimary>
  );
};

const ButtonTextDanger: FC<Props> = ({ children }) => {
  return (
    <StyledButtonTextDanger title="Botão">{children}</StyledButtonTextDanger>
  );
};

export { ButtonTextPrimary, ButtonTextDanger };
