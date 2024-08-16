"use client";

import Main from "@/components/Main";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styled from "styled-components";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [lightOrShadow, setLightOrShadow] = useState<string | null>(null);

  const StyledBody = styled.body`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-image: url("/images/background.jpg");
    color: #e0e0e0;
    margin: 0;
    box-sizing: border-box;
  `;

  useEffect(() => {
    const cookie = localStorage.getItem("affinity");
    if (cookie) {
      setLightOrShadow(cookie);
    }
  }, []);

  useEffect(() => {
    if (lightOrShadow !== null) {
      localStorage.setItem("affinity", lightOrShadow);
    }
  }, [lightOrShadow]);

  const handleClick = (choice: string | null) => {
    setLightOrShadow(choice);
  };
  return (
    <html lang="en">
      <StyledBody>
        <Header affinity={lightOrShadow} />
        <Main affinityProp={lightOrShadow} updateFunction={setLightOrShadow} />
        <Footer />
      </StyledBody>
    </html>
  );
}
