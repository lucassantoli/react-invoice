import React, { FC } from "react";

import { Input as StyledInput, BoldInput as StyledBoldInput } from "./styles";

interface Props {
  value?: string;
  placeholder?: string;
  id?: string;
  type?: string;
  onChange?: Function;
}

const Input: FC<Props> = ({ value, placeholder, id, onChange, type }) => {
  type ??= "text";
  return (
    <StyledInput
      id={id}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={(e) => (onChange ? onChange(e) : null)}
    ></StyledInput>
  );
};

const InputBold: FC<Props> = ({ value, placeholder, id, onChange, type }) => {
  type ??= "text";
  return (
    <StyledBoldInput
      id={id}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={(e) => (onChange ? onChange(e) : null)}
    ></StyledBoldInput>
  );
};

export { Input, InputBold };
