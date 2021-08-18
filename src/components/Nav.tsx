import { Flex, Box } from "theme-ui";
import { Link } from "./Link";
import styled from "styled-components";
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

export const Nav: React.FC = () => {
  return (
    <Box as="nav" sx={{ display: ["none", "flex"], alignItems: "center", flex: 1 }}>
      <Flex>
        <Link to="/">Dashboard</Link>
        <RealLink href="https://main.ddexx.io/">dDEXX</RealLink>
      </Flex>
      <Flex sx={{ justifyContent: "flex-end", mr: 3, flex: 1 }}>
        <Link sx={{ fontSize: 1 }} to="/risky-troves">
          Risky Troves
        </Link>
        <Link sx={{ fontSize: 1 }} to="/redemption">
          Redemption
        </Link>
      </Flex>
    </Box>
  );
};
