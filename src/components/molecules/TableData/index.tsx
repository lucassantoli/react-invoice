import React, { FC } from "react";

import { TableData as StyledTableData } from "./styles";

interface Props {
  children: React.ReactNode;
}

const TableData: FC<Props> = ({ children }) => {
  return <StyledTableData>{children}</StyledTableData>;
};

export { TableData };
