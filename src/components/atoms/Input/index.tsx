import React, { FC } from "react";

import { Input as StyledInput, BoldInput as StyledBoldInput } from "./styles";

interface Props {
  value?: string;
  placeholder?: string;
  id?: string;
  onChange?: Function;
}

const Input: FC<Props> = ({ value, placeholder, id, onChange }) => {
  return (
    <StyledInput
      id={id}
      value={value}
      placeholder={placeholder}
      onChange={(e) => (onChange ? onChange(e) : null)}
    ></StyledInput>
  );
};

const InputBold: FC<Props> = ({ value, placeholder, id, onChange }) => {
  return (
    <StyledBoldInput
      id={id}
      value={value}
      placeholder={placeholder}
      onChange={(e) => {
        console.log(e);
        return onChange ? onChange(e) : null;
      }}
    ></StyledBoldInput>
  );
};

export { Input, InputBold };
