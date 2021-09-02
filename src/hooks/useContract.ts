/* eslint-disable default-case */
/* eslint-disable no-console */
/* eslint-disable react-hooks/rules-of-hooks */
import { Contract } from "@ethersproject/contracts";
import { ChainId, WETH } from "@pancakeswap-libs/sdk";
import { abi as IUniswapV2PairABI } from "@uniswap/v2-core/build/IUniswapV2Pair.json";
import { useMemo } from "react";
import useWeb3 from "hooks/useWeb3";

import ERC20_ABI from "config/abi/erc20.json";
import { getContract } from "utils";
import { getBep20Contract } from "utils/contractHelpers";
import { useActiveWeb3React } from "./index";

// returns null on errors
function useContract(
  address: string | undefined,
  ABI: any,
  withSignerIfPossible = true
): Contract | null {
  let account;
  let library;
  try {
    ({ account } = useActiveWeb3React());
  } catch (error) {
    account = null;
    console.log(error);
  }
  try {
    ({ library } = useActiveWeb3React());
  } catch (error) {
    library = null;
    console.log(error);
  }

  return useMemo(() => {
    if (!address || !ABI || !library) return null;
    try {
      return getContract(
        address,
        ABI,
        library,
        withSignerIfPossible && account ? account : undefined
      );
    } catch (error) {
      console.error("Failed to get contract", error);
      return null;
    }
  }, [address, ABI, library, withSignerIfPossible, account]);
}

export function useTokenContract(
  tokenAddress?: string,
  withSignerIfPossible?: boolean
): Contract | null {
  console.log("inside use toKen contract");
  return useContract(tokenAddress, ERC20_ABI, withSignerIfPossible);
}

export function usePairContract(
  pairAddress?: string,
  withSignerIfPossible?: boolean
): Contract | null {
  return useContract(pairAddress, IUniswapV2PairABI, withSignerIfPossible);
}

export function useMulticallContract(): Contract | null {
  //    let account; let chainId; let library;
  // try{
  //   ({account} = useActiveWeb3React())
  // }catch(error){
  //   account = null
  //   console.log(error)
  // }
  // try{
  //   ({chainId} = useActiveWeb3React())
  // }catch(error){
  //   chainId = null
  //   console.log(error)
  // }
  // try{
  //   ({library} = useActiveWeb3React())
  // }catch(error){
  //   library = null
  //   console.log(error)
  // }
  // return useContract(chainId && MULTICALL_NETWORKS[chainId], MULTICALL_ABI, false)
  return null;
}
/**
 * Helper hooks to get specific contracts (by ABI)
 */

export const useERC20 = (address: string) => {
  const web3 = useWeb3();
  return useMemo(() => getBep20Contract(address, web3), [address, web3]);
};
