import React, { FC } from "react";

import metaware_logo from "../../../assets/metaware_logo.png";

import { Header as StyledHeader } from "./styles";

import { Hyperlink, Label, InputBold } from "../../atoms";
import { atom, useRecoilValue, useSetRecoilState } from "recoil";

import { localStorageEffect } from "../../../utils";

const imageState = atom({
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

const InvoiceHeader: FC = () => {
  const image = useRecoilValue(imageState);
  const setImage = useSetRecoilState(imageState);

  const invoiceNumber = useRecoilValue(invoiceNumberState);
  const setInvoiceNumber = useSetRecoilState(invoiceNumberState);

  const handleChangeImage = () => {
    const fileInput = document.getElementById("file-input");
    if (fileInput == null) return;

    fileInput.click();
  };

  const handleImageSelection = (e: any) => {
    if (!e.target.files || e.target.files.length === 0) return;

    const saveImage = (base64string: string | ArrayBuffer | null) => {
      if (typeof base64string !== "string") return;

      setImage(() => ({
        src: base64string,
        hideImage: image.hideImage,
      }));
    };

    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      saveImage(reader.result);
    };
  };

  const handleChangeImageVisibility = () => {
    setImage(() => ({
      src: image.src,
      hideImage: !image.hideImage,
    }));
  };

  const handleChangeInvoiceNumber = (e: any) => {
    setInvoiceNumber(() => e.target.value);
  };

  return (
    <StyledHeader>
      <div className="title">
        <h3>INVOICE</h3>
      </div>

      <div className="content">
        <div className="invoice-number">
          <Label color="#333" htmlFor="invoice-number-input">
            <strong>Invoice #</strong>
          </Label>
          <InputBold
            id="invoice-number-input"
            value={invoiceNumber}
            onChange={handleChangeInvoiceNumber}
          ></InputBold>
        </div>

        <div className="invoice-img">
          {image.hideImage ? <></> : <img src={image.src} alt="Invoice logo" />}
          <div className="img-controllers">
            <input
              type="file"
              id="file-input"
              hidden
              onChange={handleImageSelection}
            />
            <Hyperlink onClick={handleChangeImage}>Edit logo</Hyperlink>
            <Hyperlink onClick={handleChangeImageVisibility}>
              {image.hideImage ? "Show logo" : "Hide logo"}
            </Hyperlink>
          </div>
        </div>
      </div>
    </StyledHeader>
  );
};

export { InvoiceHeader };
