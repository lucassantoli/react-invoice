import React, { FC } from "react";

import { ButtonIconPrimary, ButtonIconDanger } from "./styles";

import Icon from "@mdi/react";
import { mdiPlusThick, mdiMinusThick } from "@mdi/js";

const ButtonAdd: FC = () => {
  return (
    <ButtonIconPrimary title="Add">
      <Icon path={mdiPlusThick} size={1} color="white" />
    </ButtonIconPrimary>
  );
};

const ButtonDelete: FC = () => {
  return (
    <ButtonIconDanger title="Delete">
      <Icon path={mdiMinusThick} size={1} color="white" />
    </ButtonIconDanger>
  );
};

export { ButtonAdd, ButtonDelete };
