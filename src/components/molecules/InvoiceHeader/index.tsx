import React, { FC } from "react";

import { Header as StyledHeader } from "./styles";

import { Hyperlink, Label, InputBold } from "../../atoms";

interface Props {
  children?: React.ReactNode;
  image?: string;
}

const InvoiceHeader: FC<Props> = ({ image, children }) => {
  return (
    <StyledHeader>
      <div className="title">
        <h3>INVOICE</h3>
      </div>

      <div className="content">
        <div className="invoice-number">
          <Label color="#333" htmlFor="invoice-number-input">
            <strong>Invoice #</strong>
          </Label>
          <InputBold id="invoice-number-input"></InputBold>
        </div>

        <div className="invoice-img">
          <img src={image} alt="Invoice logo" />
          <div className="img-controllers">
            <Hyperlink href="">Edit logo</Hyperlink>
            <Hyperlink href="">Hide logo</Hyperlink>
          </div>
        </div>
      </div>
    </StyledHeader>
  );
};

export { InvoiceHeader };
