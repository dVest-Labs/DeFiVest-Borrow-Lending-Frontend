import React, { useState } from "react";
import Switch from "react-switch";
import Modal from "./ModalLeft/Modal";

const DashboardBoxLeftSide = ({ loading }) => {
  const BoxLeftSideData = [
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

  const [switchBtn, setSwitchBtn] = useState({ checked: false });
  // const [switchBtn2, setSwitchBtn2] = useState({ checked: false });
  // const [switchBtn3, setSwitchBtn3] = useState({ checked: false });
  // const [switchBtn4, setSwitchBtn4] = useState({ checked: false });
  // const [switchBtn5, setSwitchBtn5] = useState({ checked: false });
  // const [switchBtn6, setSwitchBtn6] = useState({ checked: false });
  // const [switchBtn7, setSwitchBtn7] = useState({ checked: false });
  // const [switchBtn8, setSwitchBtn8] = useState({ checked: false });

  const [showmodal, setShowModal] = useState(false);

  const handleChange = (checked) => {
    setSwitchBtn({ checked });
  };
  // const handleChange2 = (checked) => {
  //   setSwitchBtn2({ checked });
  // };
  // const handleChange3 = (checked) => {
  //   setSwitchBtn3({ checked });
  // };
  // const handleChange4 = (checked) => {
  //   setSwitchBtn4({ checked });
  // };
  // const handleChange5 = (checked) => {
  //   setSwitchBtn5({ checked });
  // };
  // const handleChange6 = (checked) => {
  //   setSwitchBtn6({ checked });
  // };
  // const handleChange7 = (checked) => {
  //   setSwitchBtn7({ checked });
  // };
  // const handleChange8 = (checked) => {
  //   setSwitchBtn8({ checked });
  // };
  return (
    <>
      <Modal showmodal={showmodal} setShowModal={setShowModal} />
      <div className="shadow-lg box-shadow-inner rounded-t-lg text-white pl-7 h-14 text-lg flex items-center">
        Supply Markets
      </div>
      <div className="box-shadow-inner pl-7 pr-7 h-10 shadow-lg text-lg flex  items-center">
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
            Collateral
          </div>
        </div>
      </div>

      {BoxLeftSideData.map((item, index) => (
        <div
          key={index}
          className="box-shadow-inner text-xs sm:text-sm setRow shadow-lg"
        >
          <div className="setRowHeader text-white">
            {!loading && (
              <>
                <div
                  onClick={() => {
                    setShowModal(!showmodal);
                    window.sessionStorage.setItem("tokenName", item.name);
                    window.sessionStorage.setItem("logoLink", item.img);
                    window.sessionStorage.setItem("apyValue", item.apy);
                    window.sessionStorage.setItem("wallet", item.wallet);
                    window.sessionStorage.setItem("liquidity", item.liquidity);
                  }}
                  className="cursor-pointer flex items-center col-start-1 col-end-4"
                >
                  <img className="h-8 w-8 mr-3" src={item.img} alt="" />
                  <span>{item.name}</span>
                </div>
                <div
                  onClick={() => {
                    setShowModal(!showmodal);
                    window.sessionStorage.setItem("tokenName", item.name);
                    window.sessionStorage.setItem("logoLink", item.img);
                    window.sessionStorage.setItem("apyValue", item.apy);
                    window.sessionStorage.setItem("wallet", item.wallet);
                    window.sessionStorage.setItem("liquidity", item.liquidity);
                  }}
                  className="cursor-pointer flex items-center col-start-4 col-end-5"
                >
                  <span>{item.apy}</span>
                </div>
                <div
                  onClick={() => {
                    setShowModal(!showmodal);
                    window.sessionStorage.setItem("tokenName", item.name);
                    window.sessionStorage.setItem("logoLink", item.img);
                    window.sessionStorage.setItem("apyValue", item.apy);
                    window.sessionStorage.setItem("wallet", item.wallet);
                    window.sessionStorage.setItem("liquidity", item.liquidity);
                  }}
                  className="cursor-pointer flex items-center col-start-5 col-end-6"
                >
                  <span>{item.wallet}</span>
                </div>
                <div className="flex ml-3 items-center col-start-6 col-end-7">
                  {!showmodal && (
                    <Switch
                      offHandleColor={"#546E7A"}
                      onHandleColor={"#546E7A"}
                      onChange={handleChange}
                      checked={switchBtn.checked}
                      uncheckedIcon={false}
                      checkedIcon={false}
                      height={6}
                      width={30}
                      onColor={"#01D2D4"}
                      handleDiameter={15}
                    />
                  )}
                </div>
              </>
            )}
            {/* LOADING SHOW */}
            {loading && (
              <>
                <div className="flex items-center col-start-1 col-end-4">
                  <div className="loading circle mr-3"></div>
                  <div style={{ width: "70px" }} className="loading"></div>
                </div>
                <div className="flex items-center col-start-4 col-end-5">
                  <div className="loading"></div>
                </div>
                <div className="flex items-center col-start-5 col-end-6">
                  <div className="loading"></div>
                </div>
                <div className="flex ml-3 items-center col-start-6 col-end-7">
                  <div className="loading"></div>
                </div>
              </>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default DashboardBoxLeftSide;
