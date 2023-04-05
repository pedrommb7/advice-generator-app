import React, { FC } from "react";
import { ISvgProps } from "./types";

const Svg: FC<ISvgProps> = ({ className, icon }) => {
  const Icon = icon;
  return (
    <>
      <Icon className={className} data-testid="svg" />
    </>
  );
};

export default Svg;
