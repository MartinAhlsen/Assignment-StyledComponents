"use client";

import Main from "@/components/Main";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styled from "styled-components";
// import background from "images/background.jpg";

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
    /* background-image: ; */
  `;

  useEffect(() => {
    console.log("The lightOrShadow state has changed:", lightOrShadow);
  }, [lightOrShadow]);

  const handleClick = (choice: string | null) => {
    setLightOrShadow(choice);
  };
  return (
    <html lang="en">
      <StyledBody>
        <Header affinity={lightOrShadow} />
        <div>
          <button onClick={() => handleClick("light")}>Choose the Light</button>
          <button onClick={() => handleClick("shadow")}>
            Choose the Shadow
          </button>
          <button onClick={() => handleClick(null)}>Choose the Null</button>
        </div>
        <Main affinityProp={lightOrShadow} updateFunction={setLightOrShadow} />
        <Footer />
      </StyledBody>
    </html>
  );
}
