import React from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

import {
  ButtonAdd,
  ButtonDelete,
  Input,
  ButtonTextPrimary,
  Hyperlink,
} from "./components/atoms";
import {
  InvoiceForm,
  InvoiceHeader,
  InvoiceFooter,
} from "./components/molecules";
import { Table } from "./components/organisms";
import { Container } from "./components/Container";

import metaware_logo from "./assets/metaware_logo.png";

function App() {
  const customer_inputs = [
    { key: "name", value: "Mr. John Doe" },
    { key: "web_link", value: "John Doe Designs Inc." },
    { key: "address1", value: "1 Infinite Loop" },
    { key: "address2", value: "Cupertino, California, US" },
    { key: "postal", value: "90210" },
  ];
  const company_inputs = [
    { key: "name", value: "Metaware Labs" },
    { key: "web_link", value: "www.metawarelabs.com" },
    { key: "address1", value: "123 Yonge Street" },
    { key: "address2", value: "Toronto, ON, Canada" },
    { key: "postal", value: "M5S 1B6" },
  ];

  const currencies = [
    { value: "GBP", text: "British Pound (£)" },
    { value: "CAD", text: "Canadian Dollar ($)" },
    { value: "EUR", text: "Euro (€)" },
    { value: "INR", text: "Indian Rupee (₹)" },
    { value: "NOK", text: "Norwegian Krone (kr)" },
    { value: "USD", text: "US Dollar ($)" },
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
          <InvoiceHeader image={metaware_logo}></InvoiceHeader>

          <hr />

          <InvoiceForm
            customer_inputs={customer_inputs}
            company_inputs={company_inputs}
            currencies={currencies}
          ></InvoiceForm>

          <Table header={header} content={content}></Table>

          <div className="form-action-buttons">
            <ButtonTextPrimary>Reset</ButtonTextPrimary>
            <ButtonTextPrimary>Turn On Print Mode</ButtonTextPrimary>
          </div>

          <InvoiceFooter>
            <Hyperlink
              href="https://www.linkedin.com/in/lucassantoli/"
              noDecoration
            >
              Lucas Santana&nbsp;
            </Hyperlink>
            <span>Made with&nbsp;</span>
            <span className="red-text">♥</span>
            <span>&nbsp;in Aracaju.</span>
          </InvoiceFooter>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
