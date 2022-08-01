import React, { FC } from "react";

import { ButtonIconPrimary, ButtonIconDanger } from "./styles";

import Icon from "@mdi/react";
import { mdiPlusThick, mdiCloseThick } from "@mdi/js";

interface Props {
  callback?: Function;
}

const ButtonAdd: FC<Props> = ({ callback }) => {
  return (
    <ButtonIconPrimary
      title="Add"
      onClick={(e) => (callback ? callback(e) : null)}
    >
      <Icon path={mdiPlusThick} size={1} color="white" />
    </ButtonIconPrimary>
  );
};

const ButtonDelete: FC<Props> = ({ callback }) => {
  return (
    <ButtonIconDanger
      title="Delete"
      onClick={(e) => (callback ? callback(e) : null)}
    >
      <Icon path={mdiCloseThick} size={1} color="white" />
    </ButtonIconDanger>
  );
};

export { ButtonAdd, ButtonDelete };
