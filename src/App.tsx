import React from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

import { ButtonAdd, ButtonDelete, Input } from "./components/atoms";
import { InvoiceForm } from "./components/molecules";
import { Table } from "./components/organisms";
import { Container } from "./components/Container";

function App() {
  const inputs = [
    { key: "field1", value: "Mr. John Doe" },
    { key: "field2", value: "John Doe Designs Inc." },
    { key: "field3", value: "1 Infinite Loop" },
    { key: "field4", value: "Cupertino, California, US" },
    { key: "field5", value: "90210" },
    { key: "field6", value: "Metaware Labs" },
    { key: "field7", value: "www.metawarelabs.com" },
    { key: "field8", value: "123 Yonge Street" },
    { key: "field9", value: "Toronto, ON, Canada" },
    { key: "field10", value: "M5S 1B6" },
  ];

  const currencies = [
    { text: "GBP", value: "British Pound (£)" },
    { text: "CAD", value: "Canadian Dollar ($)" },
    { text: "EUR", value: "Euro (€)" },
    { text: "INR", value: "Indian Rupee (₹)" },
    { text: "NOK", value: "Norwegian Krone (kr)" },
    { text: "USD", value: "US Dollar ($)" },
  ];

  const header = [
    { value: "btn", text: "", colspan: 1 },
    { value: "desc", text: "Description", colspan: 5 },
    { value: "qty", text: "Quantity", colspan: 2 },
    { value: "cost", text: "Cost $", colspan: 2 },
    { value: "total", text: "Total", colspan: 2 },
  ];

  const content = [
    {
      btn: <ButtonDelete></ButtonDelete>,
      desc: <Input placeholder="Description"></Input>,
      qty: <Input placeholder="Quantity"></Input>,
      cost: <Input placeholder="Cost"></Input>,
      total: 100.0,
    },
    {
      btn: <ButtonDelete></ButtonDelete>,
      desc: <Input placeholder="Description"></Input>,
      qty: <Input placeholder="Quantity"></Input>,
      cost: <Input placeholder="Cost"></Input>,
      total: 100.0,
    },
    {
      btn: <ButtonDelete></ButtonDelete>,
      desc: <Input placeholder="Description"></Input>,
      qty: <Input placeholder="Quantity"></Input>,
      cost: <Input placeholder="Cost"></Input>,
      total: 100.0,
    },
    {
      btn: <ButtonAdd></ButtonAdd>,
      desc: null,
      qty: null,
      cost: null,
      total: null,
    },
  ];

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Container>
          <InvoiceForm inputs={inputs} currencies={currencies}></InvoiceForm>

          <Table header={header} content={content}></Table>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
