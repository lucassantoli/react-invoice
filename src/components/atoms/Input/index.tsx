import React, { FC } from "react";

import { Input as StyledInput, BoldInput as StyledBoldInput } from "./styles";

interface Props {
  value?: string;
  placeholder?: string;
  id?: string;
}

const Input: FC<Props> = ({ value, placeholder, id }) => {
  return (
    <StyledInput id={id} value={value} placeholder={placeholder}></StyledInput>
  );
};

const InputBold: FC<Props> = ({ value, placeholder, id }) => {
  return (
    <StyledBoldInput
      id={id}
      value={value}
      placeholder={placeholder}
    ></StyledBoldInput>
  );
};

export { Input, InputBold };
