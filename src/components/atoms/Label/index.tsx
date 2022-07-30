import React, { FC } from "react";

import { Label as StyledLabel, LabelBold as StyledLabelBold } from "./styles";

interface Props {
  children: React.ReactNode;
  color?: string;
}

const Label: FC<Props> = ({ children, color }) => {
  return <StyledLabel color={color}>{children}</StyledLabel>;
};

const LabelBold: FC<Props> = ({ children, color }) => {
  return <StyledLabelBold color={color}>{children}</StyledLabelBold>;
};

export { Label, LabelBold };
