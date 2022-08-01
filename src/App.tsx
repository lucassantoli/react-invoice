import React, { useState } from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

import metaware_logo from "./assets/metaware_logo.png";

import { ButtonTextPrimary, Hyperlink } from "./components/atoms";
import {
  InvoiceForm,
  InvoiceHeader,
  InvoiceFooter,
} from "./components/molecules";
import { Table } from "./components/organisms";
import { Container } from "./components/Container";

import { localStorageEffect } from "./utils";

import {
  atom,
  useRecoilValue,
  useResetRecoilState,
  useSetRecoilState,
} from "recoil";

const invoiceCurrencyState = atom({
  key: "currency",
  default: "USD",
  effects: [localStorageEffect("invoiceCurrencyState")],
});

const invoiceFormState = atom({
  key: "form",
  default: [
    { key: "customer_name", value: "Mr. John Doe" },
    { key: "company_name", value: "Metaware Labs" },
    { key: "customer_web_link", value: "John Doe Designs Inc." },
    { key: "company_web_link", value: "www.metawarelabs.com" },
    { key: "customer_address1", value: "1 Infinite Loop" },
    { key: "company_address1", value: "123 Yonge Street" },
    { key: "customer_address2", value: "Cupertino, California, US" },
    { key: "company_address2", value: "Toronto, ON, Canada" },
    { key: "customer_postal", value: "90210" },
    { key: "company_postal", value: "M5S 1B6" },
  ],
  effects: [localStorageEffect("invoiceFormState")],
});

const invoiceContentState = atom({
  key: "invoice",
  default: [
    {
      desc: "Gadget",
      qty: 10,
      cost: 9.95,
    },
  ],
  effects: [localStorageEffect("invoiceContentState")],
});

const invoiceTaxState = atom({
  key: "tax",
  default: "13",
  effects: [localStorageEffect("invoiceTaxState")],
});

const invoiceImageState = atom({
  key: "image",
  default: {
    src: metaware_logo,
    hideImage: false,
  },
  effects: [localStorageEffect("imageState")],
});

const invoiceNumberState = atom({
  key: "invoiceNumber",
  default: "10",
  effects: [localStorageEffect("invoiceNumberState")],
});

function App() {
  const currencies = [
    { value: "GBP", text: "British Pound (£)", symbol: "£", locale: "en-US" },
    {
      value: "CAD",
      text: "Canadian Dollar ($)",
      symbol: "CAD $",
      locale: "en-US",
    },
    { value: "EUR", text: "Euro (€)", symbol: "€", locale: "en-US" },
    { value: "INR", text: "Indian Rupee (₹)", symbol: "₹", locale: "en-US" },
    {
      value: "NOK",
      text: "Norwegian Krone (kr)",
      symbol: "kr",
      locale: "en-US",
    },
    { value: "USD", text: "US Dollar ($)", symbol: "$", locale: "en-US" },
  ];

  const invoiceImage = useRecoilValue(invoiceImageState);
  const setInvoiceImage = useSetRecoilState(invoiceImageState);
  const resetInvoiceImage = useResetRecoilState(invoiceImageState);
  const handleChangeInvoiceImage = (image: {
    src: string;
    hideImage: boolean;
  }) => {
    setInvoiceImage(() => image);
  };

  const invoiceNumber = useRecoilValue(invoiceNumberState);
  const setInvoiceNumber = useSetRecoilState(invoiceNumberState);
  const resetInvoiceNumber = useResetRecoilState(invoiceNumberState);
  const handleChangeInvoiceNumber = (number: any) => {
    setInvoiceNumber(() => number);
  };

  const invoiceContent = useRecoilValue(invoiceContentState);
  const setInvoiceContent = useSetRecoilState(invoiceContentState);
  const resetInvoiceContent = useResetRecoilState(invoiceContentState);
  const handleChangeInvoiceContent = (content: any) => {
    setInvoiceContent(() => content);
  };

  const invoiceTax = useRecoilValue(invoiceTaxState);
  const setInvoiceTax = useSetRecoilState(invoiceTaxState);
  const resetInvoiceTax = useResetRecoilState(invoiceTaxState);
  const handleChangeInvoiceTax = (tax: any) => {
    setInvoiceTax(() => tax);
  };

  const invoiceCurrency = useRecoilValue(invoiceCurrencyState);
  const setInvoiceCurrency = useSetRecoilState(invoiceCurrencyState);
  const resetInvoiceCurrency = useResetRecoilState(invoiceCurrencyState);
  const handleChangeInvoiceCurrency = (currency: string) => {
    setInvoiceCurrency(() => currency);
  };

  const invoiceForm = useRecoilValue(invoiceFormState);
  const setInvoiceForm = useSetRecoilState(invoiceFormState);
  const resetInvoiceForm = useResetRecoilState(invoiceFormState);
  const handleChangeInvoiceForm = (inputs: any) => {
    setInvoiceForm(() => inputs);
  };

  const resetInvoice = () => {
    const confirmation = window.confirm(
      "Are you sure you would like to clear the invoice?"
    );

    if (!confirmation) return;

    resetInvoiceForm();
    resetInvoiceCurrency();
    resetInvoiceContent();
    resetInvoiceTax();
    resetInvoiceNumber();
    resetInvoiceImage();
  };

  const printInvoice = () => {
    window.print();
  };

  const [printMode, setPrintMode] = useState(false);

  return (
    <div className="App" id="app">
      <ThemeProvider theme={theme}>
        <Container>
          <InvoiceHeader
            callbackImage={handleChangeInvoiceImage}
            callbackInvoiceNumber={handleChangeInvoiceNumber}
            image={invoiceImage.src}
            hideImage={invoiceImage.hideImage}
            invoiceNumber={invoiceNumber}
            printMode={printMode}
          ></InvoiceHeader>

          <hr />

          <InvoiceForm
            inputs={invoiceForm}
            currencies={currencies}
            selectedCurrency={invoiceCurrency}
            callbackCurrency={handleChangeInvoiceCurrency}
            callbackInput={handleChangeInvoiceForm}
            printMode={printMode}
          ></InvoiceForm>

          <Table
            columnTemplateGrid={[1, 5, 2, 2, 2]}
            content={invoiceContent}
            contentCallback={handleChangeInvoiceContent}
            tax={invoiceTax}
            taxCallback={handleChangeInvoiceTax}
            printMode={printMode}
            currency={currencies.find(
              (currency) => currency.value === invoiceCurrency
            )}
          ></Table>

          <div className="form-action-buttons noprint">
            {printMode ? (
              <ButtonTextPrimary callback={printInvoice}>
                Print
              </ButtonTextPrimary>
            ) : (
              <></>
            )}
            <ButtonTextPrimary callback={resetInvoice}>Reset</ButtonTextPrimary>
            <ButtonTextPrimary callback={() => setPrintMode(!printMode)}>
              {printMode ? "Turn Off Print Mode" : "Turn On Print Mode"}
            </ButtonTextPrimary>
          </div>

          {printMode ? (
            <></>
          ) : (
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
          )}
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
