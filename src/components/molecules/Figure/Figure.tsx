import React, { useState, useEffect } from "react";
import {
  patternDividerMobile,
  patternDividerDesktop,
  iconDice,
} from "../../../assets/svg";
import "./_figure.scss";
import Heading from "../../atoms/Heading/Heading";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import Svg from "../../atoms/Svg/Svg";
import Button from "../../atoms/Button/Button";

const Figure = () => {
  const [advice, setAdvice] = useState<string>("");
  const [adviceID, setAdviceID] = useState<number>(0);
  const [isDesktop, setIsDesktop] = useState(false);

  const API_URL = "https://api.adviceslip.com/advice";
  const mediaQueryDesktop = "(min-width: 1024px)";

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setAdvice(data.slip.advice);
        setAdviceID(data.slip.id);
      })
      .catch((error) => console.error(error));

    const mediaQuery = window.matchMedia(mediaQueryDesktop);
    setIsDesktop(mediaQuery.matches);
    const handleChange = (event: MediaQueryListEvent) => {
      setIsDesktop(event.matches);
    };

    mediaQuery.addListener(handleChange);

    return () => {
      mediaQuery.removeListener(handleChange);
    };
  }, []);

  return (
    <figure className="mt--0 border-radius--12 flex flex--column flex__align--center">
      <Paragraph text={`Advice #${adviceID}`} className="pt--40 m--0" />
      <blockquote>
        <Heading type={"h1"} text={`"${advice}"`} />
        <Svg
          className={`${
            isDesktop
              ? "advicegenerator__patternDividerDesktop"
              : "advicegenerator__patternDividerMobile"
          } mb--56 mt--24`}
          icon={isDesktop ? patternDividerDesktop : patternDividerMobile}
        />
      </blockquote>

      <Button
        className="advicegenerator__iconDice p--20 border-radius--40"
        onClick={() => window.location.reload()}
      >
        <Svg icon={iconDice} />
      </Button>
    </figure>
  );
};

export default Figure;
