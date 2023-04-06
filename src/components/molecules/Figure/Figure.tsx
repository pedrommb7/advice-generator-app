import React, { useState, useEffect } from "react";
import { patternDividerMobile, iconDice } from "../../../assets/svg";
import Heading from "../../atoms/Heading/Heading";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import Svg from "../../atoms/Svg/Svg";

const Figure = () => {
  const [advice, setAdvice] = useState(String);
  const [adviceID, setAdviceID] = useState(Number);

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => {
        setAdvice(data.slip.advice);
        setAdviceID(data.slip.id);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <figure>
      <Paragraph text={`Advice #${adviceID}`} />
      <blockquote>
        <Heading type={"h1"} text={`"${advice}"`} />
      </blockquote>
      <Svg
        className="advicegenerator__patternDividerMobile"
        icon={patternDividerMobile}
      />
      <Svg className="advicegenerator__iconDice" icon={iconDice} />
    </figure>
  );
};

export default Figure;
