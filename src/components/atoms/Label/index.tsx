import React, { FC } from "react";

import { Label as StyledLabel } from "./styles";

interface Props {
  children: React.ReactNode;
  color?: string;
  htmlFor?: string;
}

const Label: FC<Props> = ({ children, color, htmlFor }) => {
  return (
    <StyledLabel color={color} htmlFor={htmlFor}>
      {children}
    </StyledLabel>
  );
};

export { Label };
