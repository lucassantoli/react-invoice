import React, { FC } from "react";

import { Input as StyledInput, BoldInput as StyledBoldInput } from "./styles";

interface Props {
  value?: string;
  placeholder?: string;
}

const Input: FC<Props> = ({ value, placeholder }) => {
  return <StyledInput value={value} placeholder={placeholder}></StyledInput>;
};

const BoldInput: FC<Props> = ({ value, placeholder }) => {
  return (
    <StyledBoldInput value={value} placeholder={placeholder}></StyledBoldInput>
  );
};

export { Input, BoldInput };
