import React, { FC } from "react";

import { Header as StyledHeader } from "./styles";

interface Props {
  children: React.ReactNode;
}

const InvoiceHeader: FC<Props> = ({ children }) => {
  return <StyledHeader>{children}</StyledHeader>;
};

export { InvoiceHeader };
