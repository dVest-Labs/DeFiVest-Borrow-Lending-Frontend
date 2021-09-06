import React, { useState } from "react";
import Modal from "./ModalRight/Modal";

const DashboardBoxRightSide = ({ loading }) => {
  const BasicMarketValue = "1.11%";
  const CompMarketValue = "2.22%";
  const DAIMarketValue = "3.33%";
  const EtherMarketValue = "4.44%";
  const CainLinkMarketValue = "5.55%";
  const TrueUSDMarketValue = "6.66%";
  const UniswapMarketValue = "7.77%";
  const USDcoinMarketValue = "8.88%";
  const TetherMarketValue = "9.99%";
  const WrappedMarketValue = "10.10%";
  const OXMarketValue = "11.11%";
  const [showmodal, setShowModal] = useState(false);
  return (
    <>
      <Modal showmodal={showmodal} setShowModal={setShowModal} />
      <div className="pl-7 h-14 border-b-1 border-underlinecl text-lg flex font-semibold items-center">
        Borrow Markets
      </div>
      <div className="pl-7 pr-7 h-10 border-b-1 border-underlinecl text-lg flex font-semibold items-center border-l-4">
        <div className="grid text-label grid-cols-6 row-1 gap-1 w-full">
          <div className="text-sm flex items-center col-start-1 col-end-4">
            Asset
          </div>
          <div className="text-sm flex items-center col-start-4 col-end-5">
            APY
          </div>
          <div className="text-sm flex items-center col-start-5 col-end-6">
            Wallet
          </div>
          <div className="text-sm flex items-center col-start-6 col-end-7">
            Liquidity
          </div>
        </div>
      </div>

      {/* TOKEN NUMBER - 01 */}
      <div
        onClick={() => {
          setShowModal(!showmodal);
          window.sessionStorage.setItem("tokenName", "Basic Attention Token");
          window.sessionStorage.setItem(
            "logoLink",
            "https://app.compound.finance/compound-components/assets/asset_BAT.svg"
          );
          window.sessionStorage.setItem("apyValue", BasicMarketValue);
        }}
        className="text-xs sm:text-sm setRow border-b-1 setBorderLeft cursor-pointer"
      >
        <div className="setRowHeader">
          <div className="flex items-center col-start-1 col-end-4">
            {!loading ? (
              <img
                className="h-8 w-8 mr-3"
                src="https://app.compound.finance/compound-components/assets/asset_BAT.svg"
                alt=""
              />
            ) : (
              <div className="loading circle mr-3"></div>
            )}
            {!loading ? (
              "Basic Attention..."
            ) : (
              <div style={{ width: "75px" }} className="loading"></div>
            )}
          </div>
          <div className="flex items-center col-start-4 col-end-5">
            {!loading ? BasicMarketValue : <div className="loading"></div>}
          </div>
          <div className="flex items-center col-start-5 col-end-6">
            {!loading ? "0 BAT" : <div className="loading"></div>}
          </div>
          <div className="flex items-center col-start-6 col-end-7">
            {!loading ? "$61.73M" : <div className="loading"></div>}
          </div>
        </div>
      </div>

      {/* TOKEN NUMBER - 02 */}
      <div
        onClick={() => {
          setShowModal(!showmodal);
          window.sessionStorage.setItem("tokenName", "Comp");
          window.sessionStorage.setItem(
            "logoLink",
            "https://app.compound.finance/compound-components/assets/asset_COMP.svg"
          );
          window.sessionStorage.setItem("apyValue", CompMarketValue);
        }}
        className="text-xs sm:text-sm setRow border-b-1 setBorderLeft cursor-pointer"
      >
        <div className="setRowHeader">
          <div className="flex items-center col-start-1 col-end-4">
            {!loading ? (
              <img
                className="h-8 w-8 mr-3"
                src="https://app.compound.finance/compound-components/assets/asset_COMP.svg"
                alt=""
              />
            ) : (
              <div className="loading circle mr-3"></div>
            )}
            {!loading ? (
              "Compound Gov..."
            ) : (
              <div style={{ width: "70px" }} className="loading"></div>
            )}
          </div>
          <div className="flex items-center col-start-4 col-end-5">
            {!loading ? CompMarketValue : <div className="loading"></div>}
          </div>
          <div className="flex items-center col-start-5 col-end-6">
            {!loading ? "0 COMP" : <div className="loading"></div>}
          </div>
          <div className="flex items-center col-start-6 col-end-7">
            {!loading ? "$0k" : <div className="loading"></div>}
          </div>
        </div>
      </div>

      {/* TOKEN NUMBER - 03 */}
      <div
        onClick={() => {
          setShowModal(!showmodal);
          window.sessionStorage.setItem("tokenName", "DAI");
          window.sessionStorage.setItem(
            "logoLink",
            "https://app.compound.finance/compound-components/assets/asset_DAI.svg"
          );
          window.sessionStorage.setItem("apyValue", DAIMarketValue);
        }}
        className="text-xs sm:text-sm setRow border-b-1 setBorderLeft cursor-pointer"
      >
        <div className="setRowHeader">
          <div className="flex items-center col-start-1 col-end-4">
            {!loading ? (
              <img
                className="h-8 w-8 mr-3"
                src="https://app.compound.finance/compound-components/assets/asset_DAI.svg"
                alt=""
              />
            ) : (
              <div className="loading circle mr-3"></div>
            )}
            {!loading ? (
              "DAI"
            ) : (
              <div style={{ width: "70px" }} className="loading"></div>
            )}
          </div>
          <div className="flex items-center col-start-4 col-end-5">
            {!loading ? DAIMarketValue : <div className="loading"></div>}
          </div>
          <div className="flex items-center col-start-5 col-end-6">
            {!loading ? "0 DAI" : <div className="loading"></div>}
          </div>
          <div className="flex items-center col-start-6 col-end-7">
            {!loading ? "$1,124,67M" : <div className="loading"></div>}
          </div>
        </div>
      </div>

      {/* TOKEN NUMBER - 04 */}
      <div
        onClick={() => {
          setShowModal(!showmodal);
          window.sessionStorage.setItem("tokenName", "Ether");
          window.sessionStorage.setItem(
            "logoLink",
            "https://app.compound.finance/compound-components/assets/asset_ETH.svg"
          );
          window.sessionStorage.setItem("apyValue", EtherMarketValue);
        }}
        className="text-xs sm:text-sm setRow border-b-1 setBorderLeft cursor-pointer"
      >
        <div className="setRowHeader">
          <div className="flex items-center col-start-1 col-end-4">
            {!loading ? (
              <img
                className="h-8 w-8 mr-3"
                src="https://app.compound.finance/compound-components/assets/asset_ETH.svg"
                alt=""
              />
            ) : (
              <div className="loading circle mr-3"></div>
            )}
            {!loading ? (
              "Ether"
            ) : (
              <div style={{ width: "70px" }} className="loading"></div>
            )}
          </div>
          <div className="flex items-center col-start-4 col-end-5">
            {!loading ? EtherMarketValue : <div className="loading"></div>}
          </div>
          <div className="flex items-center col-start-5 col-end-6">
            {!loading ? "0 ETH" : <div className="loading"></div>}
          </div>
          <div className="flex items-center col-start-6 col-end-7">
            {!loading ? "$2,354.61M" : <div className="loading"></div>}
          </div>
        </div>
      </div>

      {/* TOKEN NUMBER - 05 */}
      <div
        onClick={() => {
          setShowModal(!showmodal);
          window.sessionStorage.setItem("tokenName", "ChainLink Token");
          window.sessionStorage.setItem(
            "logoLink",
            "https://app.compound.finance/compound-components/assets/asset_LINK.svg"
          );
          window.sessionStorage.setItem("apyValue", CainLinkMarketValue);
        }}
        className="text-xs sm:text-sm setRow border-b-1 setBorderLeft cursor-pointer"
      >
        <div className="setRowHeader">
          <div className="flex items-center col-start-1 col-end-4">
            {!loading ? (
              <img
                className="h-8 w-8 mr-3"
                src="https://app.compound.finance/compound-components/assets/asset_LINK.svg"
                alt=""
              />
            ) : (
              <div className="loading circle mr-3"></div>
            )}
            {!loading ? (
              "ChainLink Token"
            ) : (
              <div style={{ width: "70px" }} className="loading"></div>
            )}
          </div>
          <div className="flex items-center col-start-4 col-end-5">
            {!loading ? CainLinkMarketValue : <div className="loading"></div>}
          </div>
          <div className="flex items-center col-start-5 col-end-6">
            {!loading ? "0 LINK" : <div className="loading"></div>}
          </div>
          <div className="flex items-center col-start-6 col-end-7">
            {!loading ? "$49.38M" : <div className="loading"></div>}
          </div>
        </div>
      </div>

      {/* TOKEN NUMBER - 06 */}
      <div
        onClick={() => {
          setShowModal(!showmodal);
          window.sessionStorage.setItem("tokenName", "TrueUSD");
          window.sessionStorage.setItem(
            "logoLink",
            "https://app.compound.finance/compound-components/assets/asset_TUSD.svg"
          );
          window.sessionStorage.setItem("apyValue", TrueUSDMarketValue);
        }}
        className="text-xs sm:text-sm setRow border-b-1 setBorderLeft cursor-pointer"
      >
        <div className="setRowHeader">
          <div className="flex items-center col-start-1 col-end-4">
            {!loading ? (
              <img
                className="h-8 w-8 mr-3"
                src="https://app.compound.finance/compound-components/assets/asset_TUSD.svg"
                alt=""
              />
            ) : (
              <div className="loading circle mr-3"></div>
            )}
            {!loading ? (
              "TrueUSD"
            ) : (
              <div style={{ width: "70px" }} className="loading"></div>
            )}
          </div>
          <div className="flex items-center col-start-4 col-end-5">
            {!loading ? TrueUSDMarketValue : <div className="loading"></div>}
          </div>
          <div className="flex items-center col-start-5 col-end-6">
            {!loading ? "0 TUSD" : <div className="loading"></div>}
          </div>
          <div className="flex items-center col-start-6 col-end-7">
            {!loading ? "$44.54M" : <div className="loading"></div>}
          </div>
        </div>
      </div>

      {/* TOKEN NUMBER - 07 */}
      <div
        onClick={() => {
          setShowModal(!showmodal);
          window.sessionStorage.setItem("tokenName", "Uniswap");
          window.sessionStorage.setItem(
            "logoLink",
            "https://app.compound.finance/compound-components/assets/asset_UNI.svg"
          );
          window.sessionStorage.setItem("apyValue", UniswapMarketValue);
        }}
        className="text-xs sm:text-sm setRow border-b-1 setBorderLeft cursor-pointer"
      >
        <div className="setRowHeader">
          <div className="flex items-center col-start-1 col-end-4">
            {!loading ? (
              <img
                className="h-8 w-8 mr-3"
                src="https://app.compound.finance/compound-components/assets/asset_UNI.svg"
                alt=""
              />
            ) : (
              <div className="loading circle mr-3"></div>
            )}
            {!loading ? (
              "Uniswap"
            ) : (
              <div style={{ width: "70px" }} className="loading"></div>
            )}
          </div>
          <div className="flex items-center col-start-4 col-end-5">
            {!loading ? UniswapMarketValue : <div className="loading"></div>}
          </div>
          <div className="flex items-center col-start-5 col-end-6">
            {!loading ? "0 UNI" : <div className="loading"></div>}
          </div>
          <div className="flex items-center col-start-6 col-end-7">
            {!loading ? "$140.77M" : <div className="loading"></div>}
          </div>
        </div>
      </div>

      {/* TOKEN NUMBER - 08 */}
      <div
        onClick={() => {
          setShowModal(!showmodal);
          window.sessionStorage.setItem("tokenName", "USD Coin");
          window.sessionStorage.setItem(
            "logoLink",
            "https://app.compound.finance/compound-components/assets/asset_USDC.svg"
          );
          window.sessionStorage.setItem("apyValue", USDcoinMarketValue);
        }}
        className="text-xs sm:text-sm setRow border-b-1 setBorderLeft cursor-pointer"
      >
        <div className="setRowHeader">
          <div className="flex items-center col-start-1 col-end-4">
            {!loading ? (
              <img
                className="h-8 w-8 mr-3"
                src="https://app.compound.finance/compound-components/assets/asset_USDC.svg"
                alt=""
              />
            ) : (
              <div className="loading circle mr-3"></div>
            )}
            {!loading ? (
              "USD Coin"
            ) : (
              <div style={{ width: "70px" }} className="loading"></div>
            )}
          </div>
          <div className="flex items-center col-start-4 col-end-5">
            {!loading ? USDcoinMarketValue : <div className="loading"></div>}
          </div>
          <div className="flex items-center col-start-5 col-end-6">
            {!loading ? "0 USDC" : <div className="loading"></div>}
          </div>
          <div className="flex items-center col-start-6 col-end-7">
            {!loading ? "$1,910.03M" : <div className="loading"></div>}
          </div>
        </div>
      </div>

      {/* TOKEN NUMBER - 09 */}
      <div
        onClick={() => {
          setShowModal(!showmodal);
          window.sessionStorage.setItem("tokenName", "Tether");
          window.sessionStorage.setItem(
            "logoLink",
            "https://app.compound.finance/compound-components/assets/asset_USDT.svg"
          );
          window.sessionStorage.setItem("apyValue", TetherMarketValue);
        }}
        className="text-xs sm:text-sm setRow border-b-1 setBorderLeft cursor-pointer"
      >
        <div className="setRowHeader">
          <div className="flex items-center col-start-1 col-end-4">
            {!loading ? (
              <img
                className="h-8 w-8 mr-3"
                src="https://app.compound.finance/compound-components/assets/asset_USDT.svg"
                alt=""
              />
            ) : (
              <div className="loading circle mr-3"></div>
            )}
            {!loading ? (
              "Tether"
            ) : (
              <div style={{ width: "70px" }} className="loading"></div>
            )}
          </div>
          <div className="flex items-center col-start-4 col-end-5">
            {!loading ? TetherMarketValue : <div className="loading"></div>}
          </div>
          <div className="flex items-center col-start-5 col-end-6">
            {!loading ? " 0 USDT" : <div className="loading"></div>}
          </div>
          <div className="flex items-center col-start-6 col-end-7">
            {!loading ? "$255.67M" : <div className="loading"></div>}
          </div>
        </div>
      </div>

      {/* TOKEN NUMBER - 10 */}
      <div
        onClick={() => {
          setShowModal(!showmodal);
          window.sessionStorage.setItem("tokenName", "Wrapped BTC");
          window.sessionStorage.setItem(
            "logoLink",
            "https://app.compound.finance/compound-components/assets/asset_BTC.svg"
          );
          window.sessionStorage.setItem("apyValue", WrappedMarketValue);
        }}
        className="text-xs sm:text-sm setRow border-b-1 setBorderLeft cursor-pointer"
      >
        <div className="setRowHeader">
          <div className="flex items-center col-start-1 col-end-4">
            {!loading ? (
              <img
                className="h-8 w-8 mr-3"
                src="https://app.compound.finance/compound-components/assets/asset_BTC.svg"
                alt=""
              />
            ) : (
              <div className="loading circle mr-3"></div>
            )}
            {!loading ? (
              "Wrapped BTC"
            ) : (
              <div style={{ width: "70px" }} className="loading"></div>
            )}
          </div>
          <div className="flex items-center col-start-4 col-end-5">
            {!loading ? WrappedMarketValue : <div className="loading"></div>}
          </div>
          <div className="flex items-center col-start-5 col-end-6">
            {!loading ? " 0 WBTC" : <div className="loading"></div>}
          </div>
          <div className="flex items-center col-start-6 col-end-7">
            {!loading ? "$907.43M" : <div className="loading"></div>}
          </div>
        </div>
      </div>

      {/* TOKEN NUMBER - 11 */}
      <div
        onClick={() => {
          setShowModal(!showmodal);
          window.sessionStorage.setItem("tokenName", "Ox");
          window.sessionStorage.setItem(
            "logoLink",
            "https://app.compound.finance/compound-components/assets/asset_ZRX.svg"
          );
          window.sessionStorage.setItem("apyValue", OXMarketValue);
        }}
        className="text-xs sm:text-sm setRow border-b-1 rounded-b-lg setBorderLeft cursor-pointer"
      >
        <div className="setRowHeader">
          <div className="flex items-center col-start-1 col-end-4">
            {!loading ? (
              <img
                className="h-8 w-8 mr-3"
                src="https://app.compound.finance/compound-components/assets/asset_ZRX.svg"
                alt=""
              />
            ) : (
              <div className="loading circle mr-3"></div>
            )}
            {!loading ? (
              "Ox"
            ) : (
              <div style={{ width: "70px" }} className="loading"></div>
            )}
          </div>
          <div className="flex items-center col-start-4 col-end-5">
            {!loading ? OXMarketValue : <div className="loading"></div>}
          </div>
          <div className="flex items-center col-start-5 col-end-6">
            {!loading ? "0 ZRX" : <div className="loading"></div>}
          </div>
          <div className="flex items-center col-start-6 col-end-7">
            {!loading ? "$65.71M" : <div className="loading"></div>}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardBoxRightSide;
