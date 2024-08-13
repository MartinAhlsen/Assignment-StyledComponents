"use client";
import styled from "styled-components";

type ChooseSideProp = {
  updateLightOrShadow: (lightOrDarkness: string | null) => void;
};

const StyledChoiceContainer = styled.div`
  display: flex;
`;

const StyledButtonWithIcon = styled.button`
  all: unset;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
  margin: 32px;
`;

const StyledIcon = styled.img`
  height: 150px;
  width: 150px;
`;

const ChooseSide = ({ updateLightOrShadow }: ChooseSideProp) => {
  const handleClick = (choice: string | null) => {
    updateLightOrShadow(choice);
  };
  return (
    <StyledChoiceContainer>
      <StyledButtonWithIcon onClick={() => handleClick("light")}>
        <StyledIcon src="/images/light.svg" alt="Symbol of Light" />
        <p>Choose the Light</p>
      </StyledButtonWithIcon>
      <StyledButtonWithIcon onClick={() => handleClick("shadow")}>
        <StyledIcon src="/images/shadow.svg" alt="Symbol of Shadow" />
        <p>Choose the Shadow</p>
      </StyledButtonWithIcon>
    </StyledChoiceContainer>
  );
};

export default ChooseSide;
