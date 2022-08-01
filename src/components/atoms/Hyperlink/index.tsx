import React, { FC } from "react";

import { Hyperlink as StyledHyperlink } from "./styles";

interface Props {
  href?: string;
  children: React.ReactNode;
  noDecoration?: boolean;
  onClick?: Function;
}

const Hyperlink: FC<Props> = ({ href, children, noDecoration, onClick }) => {
  return (
    <StyledHyperlink
      onClick={(event) => (onClick ? onClick(event) : null)}
      href={href}
      textDecoration={noDecoration ? "none" : "initial"}
    >
      {children}
    </StyledHyperlink>
  );
};

export { Hyperlink };
