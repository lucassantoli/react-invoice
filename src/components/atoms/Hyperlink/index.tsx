import React, { FC } from "react";

import { Hyperlink as StyledHyperlink } from "./styles";

interface Props {
  href?: string;
  children: React.ReactNode;
  noDecoration?: boolean;
}

const Hyperlink: FC<Props> = ({ href, children, noDecoration }) => {
  return (
    <StyledHyperlink
      href={href}
      textDecoration={noDecoration ? "none" : "initial"}
    >
      {children}
    </StyledHyperlink>
  );
};

export { Hyperlink };
