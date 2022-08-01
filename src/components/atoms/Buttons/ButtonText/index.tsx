import React, { FC } from "react";

import {
  ButtonTextPrimary as StyledButtonTextPrimary,
  ButtonTextDanger as StyledButtonTextDanger,
} from "./styles";

interface Props {
  callback?: Function;
  children: React.ReactNode;
}

const ButtonTextPrimary: FC<Props> = ({ children, callback }) => {
  return (
    <StyledButtonTextPrimary
      title="Botão"
      onClick={(e) => (callback ? callback(e) : null)}
    >
      {children}
    </StyledButtonTextPrimary>
  );
};

const ButtonTextDanger: FC<Props> = ({ children, callback }) => {
  return (
    <StyledButtonTextDanger
      title="Botão"
      onClick={(e) => (callback ? callback(e) : null)}
    >
      {children}
    </StyledButtonTextDanger>
  );
};

export { ButtonTextPrimary, ButtonTextDanger };
