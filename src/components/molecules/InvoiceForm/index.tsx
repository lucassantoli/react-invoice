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
  selectedCurrency: string;
  callbackCurrency: Function;
  callbackInput: Function;
  children?: React.ReactNode;
}

const InvoiceForm: FC<Props> = ({
  inputs,
  currencies,
  selectedCurrency,
  callbackCurrency,
  callbackInput,
  children,
}) => {
  const handleInputChange = (value: any, key: string) => {
    const newInputs = [...inputs];
    const index = newInputs.findIndex((input) => input.key === key);
    newInputs[index] = { key, value: value.target.value };

    callbackInput(newInputs);
  };

  const handleCurrencyChange = (value: any) => {
    callbackCurrency(value.target.value);
  };

  return (
    <StyledForm action="">
      {inputs.map((input: { key: string; value: string }) => (
        <Input
          value={input.value}
          key={input.key}
          onChange={(e: any) => handleInputChange(e, input.key)}
        ></Input>
      ))}
      {inputs.length % 2 ? null : <></>}
      <Dropdown
        list={currencies}
        value={selectedCurrency}
        callback={handleCurrencyChange}
      ></Dropdown>
    </StyledForm>
  );
};

export { InvoiceForm };
