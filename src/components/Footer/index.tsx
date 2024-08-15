"use client";
import styled from "styled-components";

const StyledFooter = styled.footer`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100px;
    background-color: black;
    opacity: 0.3;
    z-index: -1;
  }
  &:after {
    content: "";
    position: absolute;
    top: calc(100% - 130px);
    width: 100%;
    height: 30px;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0) 100%
    );
    z-index: -1;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <h4>&copy; Robert Jordan 2024 </h4>
    </StyledFooter>
  );
};

export default Footer;
