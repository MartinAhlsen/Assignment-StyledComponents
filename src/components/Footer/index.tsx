"use client";
import styled from "styled-components";

const StyledFooter = styled.footer`
  height: 100px;
  text-align: center;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <h4>&copy; Robert Jordan </h4>
    </StyledFooter>
  );
};

export default Footer;
