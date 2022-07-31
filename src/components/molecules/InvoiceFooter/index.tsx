import React, { FC } from "react";

import { Footer as StyledFooter } from "./styles";

interface Props {
  children?: React.ReactNode;
}

const InvoiceFooter: FC<Props> = ({ children }) => {
  return <StyledFooter>{children}</StyledFooter>;
};

export { InvoiceFooter };
