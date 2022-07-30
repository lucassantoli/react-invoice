import React, { FC } from "react";

import { Table as StyledTable } from "./styles";
import { TableRow } from "../../molecules/TableRow";
import { TableHeader } from "../../molecules/TableHeader";
import { TableData } from "../../molecules/TableData";

interface DataProps {
  value: string;
  text: string;
  colspan: number;
}

interface TableProps {
  header: Array<DataProps>;
  content: Array<Object>;
}

const Table: FC<TableProps> = ({ header, content }) => {
  const sortedContent = content.map((contentObj: { [index: string]: any }) => {
    const row: Array<string> = [];
    header.forEach((headerElement) => {
      row.push(contentObj[headerElement.value]);
    });

    return row;
  });

  const columnTemplateGrid = header.map(
    (headerElement) => headerElement.colspan
  );

  return (
    <StyledTable>
      <thead>
        <TableRow columnTemplateGrid={columnTemplateGrid}>
          {header.map((headerElement, index) => (
            <TableHeader key={index}>{headerElement.text}</TableHeader>
          ))}
        </TableRow>
      </thead>

      <tbody>
        {sortedContent.map((row, index) => (
          <TableRow key={index} columnTemplateGrid={columnTemplateGrid}>
            {row.map((element, index) => (
              <TableData key={index}>{element}</TableData>
            ))}
          </TableRow>
        ))}
      </tbody>
    </StyledTable>
  );
};

export { Table };
