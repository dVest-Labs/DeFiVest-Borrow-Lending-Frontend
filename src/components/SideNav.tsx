import React, { useState, useRef } from "react";
import { Box, Button, Container, Flex } from "theme-ui";
import { Icon } from "./Icon";
import { LiquityLogo } from "./LiquityLogo";
import { Link } from "./Link";
import styled from "styled-components";

const logoHeight = "32px";
const RealLink = styled.a`
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  color: inherit;
  -webkit-text-decoration: none;
  text-decoration: none;
  font-weight: 600;
  display: inline-block;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 4px;
  padding-bottom: 4px;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 2px;
  width: 100%;
  margin-top: 16px;
  @media screen and (min-width: 48em) {
    width: auto;
    margin-top: auto;
  }
`;

export const SideNav: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const overlay = useRef<HTMLDivElement>(null);

  if (!isVisible) {
    return (
      <Button sx={{ display: ["flex", "none"] }} variant="icon" onClick={() => setIsVisible(true)}>
        <Icon name="bars" size="lg" />
      </Button>
    );
  }
  return (
    <Container
      variant="infoOverlay"
      ref={overlay}
      onClick={e => {
        if (e.target === overlay.current) {
          setIsVisible(false);
        }
      }}
    >
      <Flex variant="layout.sidenav">
        <Button
          sx={{ position: "fixed", right: "25vw", m: 2 }}
          variant="icon"
          onClick={() => setIsVisible(false)}
        >
          <Icon name="times" size="2x" />
        </Button>
        <LiquityLogo height={logoHeight} p={2} />
        <Box as="nav" sx={{ m: 3, mt: 1, p: 0 }} onClick={() => setIsVisible(false)}>
          <Link to="/">Dashboard</Link>
          <RealLink href="https://main.ddexx.io/">dDEXX</RealLink>
          <Link to="/risky-troves">Risky Troves</Link>
          <Link to="/redemption">Redemption</Link>
        </Box>
      </Flex>
    </Container>
  );
};
