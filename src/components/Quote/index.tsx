"use client";
import styled from "styled-components";

type QuoteProps = {
  name: string;
  quote: string;
  affinityProp: string | null;
  updateLightOrShadow: (affinity: string | null) => void;
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-height: 300px;
  max-width: 600px;
  padding: 24px;
  color: black;
  border-radius: 24px;
  /* position: relative; */
  &:before {
    content: "";
    position: absolute;
    height: 300px;
    width: 600px;
    background-color: white;
    opacity: 0.3;
    border-radius: 24px;
    z-index: -1;
    box-shadow: 0 0 30px 20px #fff;
  }
`;

const StyledQuoteContainer = styled.div<{ affinity: string | null }>`
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
    affinity === "light"
      ? updateLightOrShadow("shadow")
      : updateLightOrShadow("light");
  };

  return (
    <StyledWrapper>
      <StyledButton onClick={() => changeSides(affinityProp)}>
        Change side
      </StyledButton>
      <StyledQuoteContainer affinity={affinityProp}>
        <h2>{name}</h2>
        <p>{quote}</p>
      </StyledQuoteContainer>
    </StyledWrapper>
  );
};

export default Quote;
