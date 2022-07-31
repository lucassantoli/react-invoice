import React, { FC } from "react";

import { Table as StyledTable } from "./styles";
import { Input, Label } from "../../atoms";
import { TableRow, TableHeader, TableData } from "../../molecules";

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

        <TableRow columnTemplateGrid={columnTemplateGrid}>
          <TableData></TableData>
          <TableData></TableData>
          <TableData></TableData>
          <TableData className="align-right">Sub Total</TableData>
          <TableData className="align-right">1000.00</TableData>
        </TableRow>

        <TableRow columnTemplateGrid={columnTemplateGrid}>
          <TableData></TableData>
          <TableData></TableData>
          <TableData></TableData>
          <TableData className="align-right">
            <Label htmlFor="tax-input">Tax(%)</Label>
            <Input id="tax-input"></Input>
          </TableData>
          <TableData className="align-right">130.00</TableData>
        </TableRow>

        <TableRow columnTemplateGrid={columnTemplateGrid}>
          <TableData></TableData>
          <TableData></TableData>
          <TableData></TableData>
          <TableData className="align-right">GrandTotal</TableData>
          <TableData className="align-right">1130.00</TableData>
        </TableRow>
      </tbody>
    </StyledTable>
  );
};

export { Table };
