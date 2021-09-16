import React, { useState } from "react";
import Modal from "./ModalRight/Modal";

const DashboardBoxRightSide = ({ loading }) => {
  const [showmodal, setShowModal] = useState(false);

  const BoxRightSideData = [
    {
      name: "Basic Attention Token",
      apy: "1.11%",
      wallet: "0 BAT",
      liquidity: "$61.67M",
      img: "https://app.compound.finance/compound-components/assets/asset_BAT.svg",
    },
    {
      name: "Compound Gov Token",
      apy: "2.22%",
      wallet: "0 COMP",
      liquidity: "$0k",
      img: "https://app.compound.finance/compound-components/assets/asset_COMP.svg",
    },
    {
      name: "DAI",
      apy: "3.33%",
      wallet: "0 DAI",
      liquidity: "$112467M",
      img: "https://app.compound.finance/compound-components/assets/asset_DAI.svg",
    },
    {
      name: "Ether",
      apy: "4.44%",
      wallet: "0 ETH",
      liquidity: "$999M",
      img: "https://app.compound.finance/compound-components/assets/asset_ETH.svg",
    },
    {
      name: "ChainLink Token",
      apy: "5.55%",
      wallet: "0 LINK",
      liquidity: "$5555M",
      img: "https://app.compound.finance/compound-components/assets/asset_LINK.svg",
    },
    {
      name: "TrueUSD",
      apy: "6.66%",
      wallet: "0 TUSD",
      liquidity: "$3333M",
      img: "https://app.compound.finance/compound-components/assets/asset_TUSD.svg",
    },
    {
      name: "Uniswap",
      apy: "7.77%",
      wallet: "0 UNI",
      liquidity: "$8888M",
      img: "https://app.compound.finance/compound-components/assets/asset_UNI.svg",
    },
    {
      name: "USD coin",
      apy: "8.88%",
      wallet: "0 USDC",
      liquidity: "$2222M",
      img: "https://app.compound.finance/compound-components/assets/asset_USDC.svg",
    },
    {
      name: "Tether",
      apy: "9.99%",
      wallet: "0 USDT",
      liquidity: "$1111M",
      img: "https://app.compound.finance/compound-components/assets/asset_USDT.svg",
    },
    {
      name: "Wrapped BTC",
      apy: "10.10%",
      wallet: "0 WBTC",
      liquidity: "$7777M",
      img: "https://app.compound.finance/compound-components/assets/asset_BTC.svg",
    },
    {
      name: "Ox",
      apy: "22.55%",
      wallet: "0 ZRX",
      liquidity: "$6668k",
      img: "https://app.compound.finance/compound-components/assets/asset_ZRX.svg",
    },
  ];

  return (
    <>
      <Modal showmodal={showmodal} setShowModal={setShowModal} />
      <div className="box-shadow-inner shadow-lg rounded-t-lg text-white pl-7 h-14  text-lg flex items-center">
        Borrow Markets
      </div>
      <div className="box-shadow-inner pl-7 pr-7 h-10 shadow-lg text-lg flex items-center">
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

      {BoxRightSideData.map((item, index) => (
        <div
          onClick={() => {
            setShowModal(!showmodal);
            window.sessionStorage.setItem("tokenName", item.name);
            window.sessionStorage.setItem("logoLink", item.img);
            window.sessionStorage.setItem("apyValue", item.apy);
            window.sessionStorage.setItem("wallet", item.wallet);
            window.sessionStorage.setItem("liquidity", item.liquidity);
          }}
          key={index}
          className="box-shadow-inner text-xs sm:text-sm setRow shadow-lg setBorderLef cursor-pointer"
        >
          {!loading && (
            <div className="setRowHeader text-white">
              <div className="flex items-center col-start-1 col-end-4">
                <img className="h-8 w-8 mr-3" src={item.img} alt="" />
                <span>{item.name}</span>
              </div>
              <div className="flex items-center col-start-4 col-end-5">
                <span>{item.apy}</span>
              </div>
              <div className="flex items-center col-start-5 col-end-6">
                <span>{item.wallet}</span>
              </div>
              <div className="flex items-center col-start-6 col-end-7">
                <span>{item.liquidity}</span>
              </div>
            </div>
          )}
          {loading && (
            <div className="setRowHeader">
              <div className="flex items-center col-start-1 col-end-4">
                <div className="loading circle mr-3"></div>
                <div style={{ width: "75px" }} className="loading"></div>
              </div>
              <div className="flex items-center col-start-4 col-end-5">
                <div className="loading"></div>
              </div>
              <div className="flex items-center col-start-5 col-end-6">
                <div className="loading"></div>
              </div>
              <div className="flex items-center col-start-6 col-end-7">
                <div className="loading"></div>
              </div>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default DashboardBoxRightSide;
