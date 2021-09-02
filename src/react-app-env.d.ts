/// <reference types="react-scripts" />

interface WindowChain {
  ethereum?: {
    isMetaMask?: true;
    request?: (...args: any[]) => void;
  };
}

interface Window {
  ethereum?: {
    isMetaMask?: true;
    on?: (...args: any[]) => void;
    removeListener?: (...args: any[]) => void;
  };
  web3?: any;
  BinanceChain?: BinanceChain;
}
