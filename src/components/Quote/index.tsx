"use client";
import styled from "styled-components";

type QuoteProps = {
  name: string;
  quote: string;
  affinityProp: string | null;
  updateLightOrShadow: (affinity: string | null) => void;
};

const StyledWrapper = styled.div<{ affinity: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-height: 300px;
  max-width: 600px;
  padding: ${(props) => (props.affinity === "light" ? "24px" : "32px")};
  color: ${(props) => (props.affinity === "light" ? "black" : "#f0f0f0")};
  border-radius: 24px;
  position: relative;
  margin: 16px;
  &:before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: ${(props) =>
      props.affinity === "light" ? "#f0f0f0" : "black"};
    opacity: ${(props) => (props.affinity === "light" ? 0.3 : 0.6)};
    border-radius: 24px;
    z-index: -1;
    box-shadow: 0 0 30px 20px
      ${(props) => (props.affinity === "light" ? "#f0f0f0" : "black")};
  }
`;

const StyledQuoteContainer = styled.div<{ affinity: string | null }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 32px;
  /* &:before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: ${(props) =>
    props.affinity === "light" ? "#f0f0f0" : "black"};
    opacity: ${(props) => (props.affinity === "light" ? 0.3 : 0.6)};
    border-radius: 24px;
    z-index: -1;
    box-shadow: 0 0 30px 20px
      ${(props) => (props.affinity === "light" ? "#f0f0f0" : "black")};
  } */
`;

const StyledButton = styled.button`
  all: unset;
  cursor: pointer;
  box-shadow: 0 0 8px 8px
    ${(props) => (props.affinity === "light" ? "#a4a4a4" : "#2c2c2c")};
  padding: 16px;
  border-radius: 10px;
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
    <StyledWrapper affinity={affinityProp}>
      <StyledButton
        affinity={affinityProp}
        onClick={() => changeSides(affinityProp)}
      >
        Change sides
      </StyledButton>
      <StyledQuoteContainer affinity={affinityProp}>
        <h2>{name}</h2>
        <p>{quote}</p>
      </StyledQuoteContainer>
    </StyledWrapper>
  );
};

export default Quote;
