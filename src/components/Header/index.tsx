"use client";
import styled from "styled-components";

const StyledHeader = styled.header`
  position: relative;
  min-height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.3;
    z-index: -1;
  }
  &:after {
    content: "";
    position: absolute;
    top: 100%;
    width: 100%;
    height: 30px;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0) 100%
    );
    z-index: -1;
  }
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
