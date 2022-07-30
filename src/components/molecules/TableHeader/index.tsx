import React, { FC } from "react";

import { TableHeader as StyledTableHeader } from "./styles";

interface Props {
  children: React.ReactNode;
}

const TableHeader: FC<Props> = ({ children }) => {
  return <StyledTableHeader>{children}</StyledTableHeader>;
};

export { TableHeader };
