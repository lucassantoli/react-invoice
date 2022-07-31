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
  company_inputs: Array<InputProps>;
  customer_inputs: Array<InputProps>;
  currencies: Array<CurrenciesProps>;
  children?: React.ReactNode;
}

const InvoiceForm: FC<Props> = ({
  company_inputs,
  customer_inputs,
  currencies,
  children,
}) => {
  return (
    <StyledForm action="">
      <div className="customer">
        {customer_inputs.map((input, index) => (
          <Input value={input.value} key={index}></Input>
        ))}
      </div>

      <div className="company">
        {company_inputs.map((input, index) => (
          <Input value={input.value} key={index}></Input>
        ))}
      </div>
      <Dropdown list={currencies}></Dropdown>
    </StyledForm>
  );
};

export { InvoiceForm };
