import React, { FC } from "react";

import { Form as StyledForm } from "./styles";

import { Input, Dropdown } from "../../atoms";

interface InputProps {
  value: string;
  key: string;
}

interface CurrenciesProps {
  value: string;
  text: string;
}

interface Props {
  inputs: Array<InputProps>;
  currencies: Array<CurrenciesProps>;
  children?: React.ReactNode;
}

const InvoiceForm: FC<Props> = ({ inputs, currencies, children }) => {
  return (
    <StyledForm action="">
      {inputs.map((input, index) => (
        <Input value={input.value} key={index}></Input>
      ))}
      {inputs.length % 2 ? null : <></>}

      <Dropdown list={currencies}></Dropdown>
    </StyledForm>
  );
};

export { InvoiceForm };
