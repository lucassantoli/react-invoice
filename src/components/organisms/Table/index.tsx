import React, { FC } from "react";

import { Table as StyledTable } from "./styles";
import { ButtonAdd, ButtonDelete, Input, Label } from "../../atoms";
import { TableRow, TableHeader, TableData } from "../../molecules";

import { formatMoney } from "../../../utils";

interface ContentProps {
  desc: string;
  qty: number;
  cost: number;
}

interface TableProps {
  columnTemplateGrid: Array<number>;
  content: Array<ContentProps>;
  contentCallback: Function;
  tax: string;
  taxCallback: Function;
  printMode: boolean;
  currency:
    | {
        value: string;
        text: string;
        symbol: string;
        locale: string;
      }
    | undefined;
}

const Table: FC<TableProps> = ({
  columnTemplateGrid,
  content,
  contentCallback,
  tax,
  taxCallback,
  printMode,
  currency,
}) => {
  const handleInputChange = (value: any, index: number, column: string) => {
    const newContent = [...content];
    newContent[index] = { ...newContent[index], [column]: value.target.value };

    contentCallback(newContent);
  };

  const handleTaxChange = (tax: any) => {
    taxCallback(tax.target.value);
  };

  const handleAddNewRow = () => {
    const newContent = [...content, { desc: "", qty: 0, cost: 0 }];
    contentCallback(newContent);
  };

  const handleRemoveRow = (index: number) => {
    const newContent = [...content];
    newContent.splice(index, 1);
    contentCallback(newContent);
  };

  const calculateTax = () => {
    return (
      parseFloat(tax) *
      0.01 *
      content.reduce((prev, curr) => prev + curr.qty * curr.cost, 0)
    );
  };

  const calculateTotal = () => {
    return (
      content.reduce((prev, curr) => prev + curr.qty * curr.cost, 0) +
      calculateTax()
    );
  };

  return (
    <StyledTable>
      <thead>
        <TableRow columnTemplateGrid={columnTemplateGrid}>
          <TableHeader></TableHeader>
          <TableHeader>Description</TableHeader>
          <TableHeader>Quantity</TableHeader>
          <TableHeader>Cost {currency?.symbol}</TableHeader>
          <TableHeader>Total</TableHeader>
        </TableRow>
      </thead>

      <tbody>
        {content.map((row, index) => (
          <TableRow key={index} columnTemplateGrid={columnTemplateGrid}>
            <TableData>
              {printMode ? (
                <></>
              ) : (
                <ButtonDelete
                  callback={() => handleRemoveRow(index)}
                ></ButtonDelete>
              )}
            </TableData>

            <TableData>
              <Input
                placeholder="Description"
                value={row.desc}
                onChange={(value: any) =>
                  handleInputChange(value, index, "desc")
                }
              ></Input>
            </TableData>

            <TableData>
              <Input
                type="number"
                placeholder="Quantity"
                value={row.qty.toString()}
                onChange={(value: any) =>
                  handleInputChange(value, index, "qty")
                }
              ></Input>
            </TableData>

            <TableData>
              <Input
                type="number"
                placeholder="Cost"
                value={row.cost.toString()}
                onChange={(value: any) =>
                  handleInputChange(value, index, "cost")
                }
              ></Input>
            </TableData>

            <TableData>
              <span>
                {formatMoney(
                  row.qty * row.cost,
                  currency ? currency.symbol : "$"
                )}
              </span>
            </TableData>
          </TableRow>
        ))}

        {printMode ? (
          <></>
        ) : (
          <TableRow columnTemplateGrid={columnTemplateGrid}>
            <TableData>
              <ButtonAdd callback={handleAddNewRow}></ButtonAdd>
            </TableData>

            <TableData></TableData>
            <TableData></TableData>
            <TableData></TableData>
            <TableData></TableData>
          </TableRow>
        )}

        <TableRow
          columnTemplateGrid={columnTemplateGrid}
          className="thicker-border-top"
        >
          <TableData></TableData>
          <TableData></TableData>
          <TableData></TableData>
          <TableData className="align-right">Sub Total</TableData>
          <TableData className="align-right">
            {formatMoney(
              content.reduce((prev, curr) => prev + curr.qty * curr.cost, 0),
              currency ? currency.symbol : "$"
            )}
          </TableData>
        </TableRow>

        <TableRow columnTemplateGrid={columnTemplateGrid}>
          <TableData></TableData>
          <TableData></TableData>
          <TableData></TableData>
          <TableData className="align-right">
            <Label htmlFor="tax-input">Tax(%)&nbsp;</Label>
            <Input
              type="number"
              id="tax-input"
              value={tax.toString()}
              onChange={handleTaxChange}
            ></Input>
            <span className="print">{tax}</span>
          </TableData>
          <TableData className="align-right">
            {formatMoney(calculateTax(), currency ? currency.symbol : "$")}
          </TableData>
        </TableRow>

        <TableRow columnTemplateGrid={columnTemplateGrid}>
          <TableData></TableData>
          <TableData></TableData>
          <TableData></TableData>
          <TableData className="align-right">Grand Total</TableData>
          <TableData className="align-right">
            {formatMoney(calculateTotal(), currency ? currency.symbol : "$")}
          </TableData>
        </TableRow>
      </tbody>
    </StyledTable>
  );
};

export { Table };
