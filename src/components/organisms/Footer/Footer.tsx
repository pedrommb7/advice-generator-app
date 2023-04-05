import React, { FC } from "react";
import { FooterProps } from "./types";

const Footer: FC<FooterProps> = ({ className }) => {
  return (
    <footer className={className}>
      Challenge by{" "}
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="noreferrer"
      >
        Frontend Mentor
      </a>
      . Coded by <a href="https://github.com/pedrommb7">Pedro Barbosa</a>.
    </footer>
  );
};

export default Footer;
