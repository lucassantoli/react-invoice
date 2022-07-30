import React, { FC } from "react";

import { Hyperlink as StyledHyperlink } from "./styles";

interface Props {
  href?: string;
  children: React.ReactNode;
}

const Hyperlink: FC<Props> = ({ href, children }) => {
  return <StyledHyperlink href={href}>{children}</StyledHyperlink>;
};

export { Hyperlink };
