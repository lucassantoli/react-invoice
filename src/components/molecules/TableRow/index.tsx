import React, { FC } from "react";

import { TableRow as StyledTableRow } from "./styles";

interface Props {
  columnTemplateGrid: Array<number>;
  children: React.ReactNode;
}

const TableRow: FC<Props> = ({ columnTemplateGrid, children }) => {
  const parsedColumnTemplateGrid = columnTemplateGrid.join("fr ") + "fr";
  return (
    <StyledTableRow gridTemplateColumns={parsedColumnTemplateGrid}>
      {children}
    </StyledTableRow>
  );
};

export { TableRow };
