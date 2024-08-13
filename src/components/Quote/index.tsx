"use client";
import styled from "styled-components";

type QuoteProps = {
  name: string;
  quote: string;
};

const StyledQuoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Quote = ({ name, quote }: QuoteProps) => {
  return (
    <StyledQuoteContainer>
      Quote
      <h2>{name}</h2>
      <p>{quote}</p>
    </StyledQuoteContainer>
  );
};

export default Quote;
