import Web3 from "web3";
import { AbiItem } from "web3-utils";
import web3NoAccount from "utils/web3";

// ABI
import bep20Abi from "config/abi/erc20.json";

export const getContract = (abi: any, address: string, web3?: Web3) => {
  const _web3 = web3 ?? web3NoAccount;
  return new _web3.eth.Contract((abi as unknown) as AbiItem, address);
};

export const getErc20 = (address: string, web3?: Web3) => {
  return getContract(bep20Abi, address, web3);
};
// export const getRegistryContract = (web3?: Web3, chainID?: number) => {
//   return getContract(registry, getRegistryAddress(chainID), web3)
// }

export const getBep20Contract = (address: string, web3?: Web3) => {
  return getContract(bep20Abi, address, web3);
};
