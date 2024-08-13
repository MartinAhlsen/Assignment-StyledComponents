"use client";
import styled from "styled-components";

type QuoteProps = {
  name: string;
  quote: string;
  affinityProp: string | null;
  updateLightOrShadow: (affinity: string | null) => void;
};

const StyledQuoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled.button`
  all: unset;
  cursor: pointer;
`;

const Quote = ({
  name,
  quote,
  affinityProp,
  updateLightOrShadow,
}: QuoteProps) => {
  const changeSides = (affinity: string | null) => {
    console.log(affinity);
    affinity === "light"
      ? updateLightOrShadow("shadow")
      : updateLightOrShadow("light");
    console.log(affinity);
  };

  return (
    <StyledQuoteContainer>
      <StyledButton onClick={() => changeSides(affinityProp)}>
        Change side
      </StyledButton>
      <h2>{name}</h2>
      <p>{quote}</p>
    </StyledQuoteContainer>
  );
};

export default Quote;
