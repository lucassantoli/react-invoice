import React, { FC } from "react";

import { Dropdown as StyledDropdown, Option as StyledOption } from "./styles";

interface DropdownProps {
  list: Array<OptionProps>;
}

interface OptionProps {
  value: string;
  text: string;
}

const Dropdown: FC<DropdownProps> = ({ list }) => {
  return (
    <StyledDropdown>
      {list.map((option: OptionProps, index: number) => (
        <StyledOption key={option.value} value={option.text}>
          {option.text}
        </StyledOption>
      ))}
    </StyledDropdown>
  );
};

export { Dropdown };
