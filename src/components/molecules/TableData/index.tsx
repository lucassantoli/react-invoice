import React, { FC } from "react";

import { TableData as StyledTableData } from "./styles";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

const TableData: FC<Props> = ({ children, className }) => {
  return <StyledTableData className={className}>{children}</StyledTableData>;
};

export { TableData };
