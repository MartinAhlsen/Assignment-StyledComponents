"use client";
import styled from "styled-components";

const StyledHeader = styled.header`
  position: relative;
  min-height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 8px;
  h1 {
    padding: 0 8px;
  }

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
  @media screen and (min-width: 480px) {
    padding: 0 48px;
  }
`;

const StyledIcon = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
`;

const StyledHeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  font-family: Arial, Helvetica, sans-serif;
  h1 {
    padding: 0;
    margin: 0;
  }
  h2 {
    padding: 0;
    margin: 0;
  }
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

function capitalizeFirstLetter(string: string | null) {
  if (string) return string.charAt(0).toUpperCase() + string.slice(1);
}

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
      <StyledHeadingContainer>
        <h1>Wheel of time</h1>
        <h2>
          {!affinity
            ? "Quote of the day"
            : `The ${capitalizeFirstLetter(affinity)}'s quote of the day`}
        </h2>
      </StyledHeadingContainer>
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
