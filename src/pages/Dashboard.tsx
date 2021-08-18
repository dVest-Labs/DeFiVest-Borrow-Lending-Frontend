import { Container } from "theme-ui";

import { Trove } from "../components/Trove/Trove";
import { Stability } from "../components/Stability/Stability";
import { SystemStats } from "../components/SystemStats";
import { PriceManager } from "../components/PriceManager";
import { Staking } from "../components/Staking/Staking";

export const Dashboard: React.FC = () => (
  <Container variant="columns">
    <Container>
      <h2>Borrow LUSD against ETH at 0% interest.</h2>
      <h3>
        Stake your LUSD, swap your LUSD for other assets at{" "}
        <a href="https://main.ddexx.io/">dDEXX</a>, cash it out to fiat, or do with it as you please.
        100% Decentralized.
      </h3>
    </Container>
    <Container variant="left">
      <Trove />
      <Stability />
      <Staking />
    </Container>

    <Container variant="right">
      <SystemStats />
      <PriceManager />
    </Container>
  </Container>
);
