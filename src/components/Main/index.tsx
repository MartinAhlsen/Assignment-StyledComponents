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
  updateFunction: (userName: string | null) => void;
};

const Main = ({ affinityProp, updateFunction }: MainProps) => {
  const [quote, setQuote] = useState<{ name: string; text: string }>({
    name: "Test",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus quis quae error. Praesentium id consequatur aspernatur, enim a vero mollitia soluta temporibus ipsum vel, ea saepe ab, minus aut deleniti.",
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

  return (
    <StyledMain>
      {affinityProp === null && (
        <ChooseSide updateLightOrShadow={updateFunction} />
      )}
      {affinityProp === "light" && (
        <QuoteComponent name={quote.name} quote={quote.text} />
      )}
      {affinityProp === "shadow" && (
        <QuoteComponent name={quote.name} quote={quote.text} />
      )}
    </StyledMain>
  );
};

export default Main;
