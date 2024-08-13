"use client";
import styled from "styled-components";

const StyledHeader = styled.header`
  height: 100px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledIcon = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
`;

const getAffinityUrl = (affinity: string | null): string => {
  switch (affinity) {
    case "light":
      return "/images/light.svg";
    case "shadow":
      return "/images/shadow.svg";
    default:
      return "/images/WoT.svg";
  }
};

type HeaderProps = {
  affinity: string | null;
};

const Header = ({ affinity }: HeaderProps) => {
  const imageUrl = getAffinityUrl(affinity);

  return (
    <StyledHeader>
      <StyledIconContainer>
        <StyledIcon
          src={imageUrl}
          alt={`Symbol of ${affinity || "the Wheel of Time"}`}
        />
      </StyledIconContainer>
      <h1>Wheel of Time - The {affinity}'s quote of the day</h1>
      <StyledIconContainer>
        <StyledIcon
          src={imageUrl}
          alt={`Symbol of ${affinity || "the Wheel of Time"}`}
        />
      </StyledIconContainer>
    </StyledHeader>
  );
};

export default Header;
