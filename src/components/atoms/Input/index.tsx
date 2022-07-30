import React, { FC } from "react";

import { Input as StyledInput, BoldInput as StyledBoldInput } from "./styles";

interface Props {
  placeholder?: string;
}

const Input: FC<Props> = ({ placeholder }) => {
  return <StyledInput placeholder={placeholder}></StyledInput>;
};

const BoldInput: FC<Props> = ({ placeholder }) => {
  return <StyledBoldInput placeholder={placeholder}></StyledBoldInput>;
};

export { Input, BoldInput };
