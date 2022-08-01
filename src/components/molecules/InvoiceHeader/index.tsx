import React, { FC } from "react";

import { Header as StyledHeader } from "./styles";

import { Hyperlink, Label, InputBold } from "../../atoms";

interface Props {
  image: string;
  hideImage: boolean;
  callbackImage: Function;
  invoiceNumber: string;
  callbackInvoiceNumber: Function;
  printMode: boolean;
}

const InvoiceHeader: FC<Props> = ({
  image,
  hideImage,
  callbackImage,
  invoiceNumber,
  callbackInvoiceNumber,
  printMode,
}) => {
  const handleChangeImage = () => {
    const fileInput = document.getElementById("file-input");
    if (fileInput == null) return;

    fileInput.click();
  };

  const handleImageSelection = (e: any) => {
    if (!e.target.files || e.target.files.length === 0) return;

    const saveImage = (base64string: string | ArrayBuffer | null) => {
      if (typeof base64string !== "string") return;

      callbackImage({
        src: base64string,
        hideImage: hideImage,
      });
    };

    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      saveImage(reader.result);
    };
  };

  const handleChangeImageVisibility = () => {
    callbackImage({
      src: image,
      hideImage: !hideImage,
    });
  };

  const handleChangeInvoiceNumber = (e: any) => {
    callbackInvoiceNumber(e.target.value);
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
            type="number"
            value={invoiceNumber}
            onChange={handleChangeInvoiceNumber}
          ></InputBold>
        </div>

        <div className="invoice-img">
          {hideImage ? <></> : <img src={image} alt="Invoice logo" />}
          {printMode ? (
            <></>
          ) : (
            <div className="img-controllers">
              <input
                type="file"
                id="file-input"
                hidden
                onChange={handleImageSelection}
              />
              <Hyperlink onClick={handleChangeImage}>Edit logo</Hyperlink>
              <Hyperlink onClick={handleChangeImageVisibility}>
                {hideImage ? "Show logo" : "Hide logo"}
              </Hyperlink>
            </div>
          )}
        </div>
      </div>
    </StyledHeader>
  );
};

export { InvoiceHeader };
