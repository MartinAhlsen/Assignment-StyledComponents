"use client";
import styled from "styled-components";

const StyledFooter = styled.footer`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <h4>&copy; Robert Jordan 2024 </h4>
    </StyledFooter>
  );
};

export default Footer;
