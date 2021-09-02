import tokens from "./tokens";

const pools = {
  FRAX_FXS: {
    tokens: [tokens.FRAX, tokens.FXS],
    address: {
      4: "0x9D514B47257548fE5298D0B8de03B6fCf4E96937",
    },
    lp_token: tokens.BootFRAXFXS,
  },
};

export default pools;
