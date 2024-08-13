"use client";

import QuoteComponent from "@/components/Quote";
import {
  forsakenQuotes,
  heroesOfTheLightQuotes,
} from "../../../public/data/data";
import ChooseSide from "../ChooseSide";
import { useEffect, useState } from "react";
import styled from "styled-components";

type MainProps = {
  affinityProp: string | null;
  updateFunction: (affinity: string | null) => void;
};

const Main = ({ affinityProp, updateFunction }: MainProps) => {
  const [quote, setQuote] = useState<{ name: string; text: string }>({
    name: "",
    text: "",
  });

  const randomQuote = (affinityProp: string) => {
    let quoteArray =
      affinityProp === "light" ? heroesOfTheLightQuotes : forsakenQuotes;
    let randomNameIndex = Math.floor(Math.random() * quoteArray.length);
    let randomQuoteIndex = Math.floor(
      Math.random() * quoteArray[randomNameIndex].quotes.length
    );

    setQuote({
      name: quoteArray[randomNameIndex].name,
      text: quoteArray[randomNameIndex].quotes[randomQuoteIndex],
    });
  };

  useEffect(() => {
    if (affinityProp) {
      randomQuote(affinityProp);
    }
  }, [affinityProp]);

  const StyledMain = styled.main`
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const StyledButton = styled.button`
    all: unset;
    cursor: pointer;
  `;

  const changeSides = (affinity: string) => {
    updateFunction(affinity);
  };

  return (
    <StyledMain>
      {affinityProp === null && (
        <ChooseSide updateLightOrShadow={updateFunction} />
      )}
      {affinityProp === "light" && (
        <QuoteComponent
          name={quote.name}
          quote={quote.text}
          affinityProp={affinityProp}
          updateLightOrShadow={updateFunction}
        />
      )}
      {affinityProp === "shadow" && (
        <QuoteComponent
          name={quote.name}
          quote={quote.text}
          affinityProp={affinityProp}
          updateLightOrShadow={updateFunction}
        />
      )}
    </StyledMain>
  );
};

export default Main;
