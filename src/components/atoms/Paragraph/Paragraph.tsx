import React, { FC } from "react";
import { ParagraphProps } from "./types";

const Paragraph: FC<ParagraphProps> = ({ text, className }) => {
  return <p className={className}>{text}</p>;
};

export default Paragraph;
