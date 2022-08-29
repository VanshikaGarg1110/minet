import React from "react";
import { ReactSVG } from "react-svg";

type Props = {
  src: string;
};


const Icon = ({ src }: Props) => {
  return (
    <ReactSVG src={src} data-testid="icon" />
  );
};

export default Icon;