import React, { FC } from "react";

import { TableRow as StyledTableRow } from "./styles";

interface Props {
  columnTemplateGrid: Array<number>;
  children: React.ReactNode;
  className?: string;
}

const TableRow: FC<Props> = ({ columnTemplateGrid, children, className }) => {
  const parsedColumnTemplateGrid = columnTemplateGrid.join("fr ") + "fr";
  return (
    <StyledTableRow
      className={className}
      gridTemplateColumns={parsedColumnTemplateGrid}
    >
      {children}
    </StyledTableRow>
  );
};

export { TableRow };
