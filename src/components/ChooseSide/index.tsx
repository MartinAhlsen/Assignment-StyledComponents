"use client";
import styled from "styled-components";

type ChooseSideProp = {
  updateLightOrShadow: (lightOrDarkness: string | null) => void;
};

const StyledChoiceContainer = styled.div`
  display: flex;
`;

const StyledButtonWithText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ChooseSide = ({ updateLightOrShadow }: ChooseSideProp) => {
  const handleClick = (choice: string | null) => {
    updateLightOrShadow(choice);
  };
  return (
    <StyledChoiceContainer>
      <StyledButtonWithText>
        <button onClick={() => handleClick("light")}>Choose the Light</button>
      </StyledButtonWithText>
      <StyledButtonWithText>
        <h3>Choose Darkness</h3>
        <button onClick={() => handleClick("shadow")}>Choose the Shadow</button>
      </StyledButtonWithText>
    </StyledChoiceContainer>
  );
};

export default ChooseSide;
