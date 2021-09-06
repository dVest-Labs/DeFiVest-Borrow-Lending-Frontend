import React, { useState } from "react";
import Switch from "react-switch";
import Modal from "./ModalLeft/Modal";

const DashboardBoxLeftSide = ({ loading }) => {
  const BasicAttTokenValue = "22.22%";
  const CompTokenValue = "23.23%";
  const DAIValue = "24.24%";
  const EtherValue = "25.25%";
  const CainLinkValue = "26.26%";
  const TrueUSDValue = "27.27%";
  const UniswapValue = "28.28%";
  const USDcoinValue = "29.29%";
  const TetherValue = "30.30%";
  const WrappedValue = "31.31%";
  const OXValue = "32.32%";

  const [switchBtn, setSwitchBtn] = useState({ checked: false });
  const [switchBtn2, setSwitchBtn2] = useState({ checked: false });
  const [switchBtn3, setSwitchBtn3] = useState({ checked: false });
  const [switchBtn4, setSwitchBtn4] = useState({ checked: false });
  const [switchBtn5, setSwitchBtn5] = useState({ checked: false });
  const [switchBtn6, setSwitchBtn6] = useState({ checked: false });
  const [switchBtn7, setSwitchBtn7] = useState({ checked: false });
  const [switchBtn8, setSwitchBtn8] = useState({ checked: false });

  const [showmodal, setShowModal] = useState(false);

  const handleChange = (checked) => {
    setSwitchBtn({ checked });
  };
  const handleChange2 = (checked) => {
    setSwitchBtn2({ checked });
  };
  const handleChange3 = (checked) => {
    setSwitchBtn3({ checked });
  };
  const handleChange4 = (checked) => {
    setSwitchBtn4({ checked });
  };
  const handleChange5 = (checked) => {
    setSwitchBtn5({ checked });
  };
  const handleChange6 = (checked) => {
    setSwitchBtn6({ checked });
  };
  const handleChange7 = (checked) => {
    setSwitchBtn7({ checked });
  };
  const handleChange8 = (checked) => {
    setSwitchBtn8({ checked });
  };
  return (
    <>
      <Modal showmodal={showmodal} setShowModal={setShowModal} />
      <div className="pl-7 h-14 border-b-1 border-underlinecl text-lg flex font-semibold items-center">
        Supply Markets
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
            Collateral
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
          window.sessionStorage.setItem("apyValue", BasicAttTokenValue);
        }}
        className="cursor-pointer text-xs sm:text-sm setRow border-b-1 setBorderLeft"
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
              <div style={{ width: "70px" }} className="loading"></div>
            )}
          </div>
          <div className="flex items-center col-start-4 col-end-5">
            {!loading ? BasicAttTokenValue : <div className="loading"></div>}
          </div>
          <div className="flex items-center col-start-5 col-end-6">
            {!loading ? "0 BAT" : <div className="loading"></div>}
          </div>
          <div className="flex ml-3 items-center col-start-6 col-end-7">
            {!loading ? (
              !showmodal && (
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
              )
            ) : (
              <div className="loading"></div>
            )}
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
          window.sessionStorage.setItem("apyValue", CompTokenValue);
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
            {!loading ? CompTokenValue : <div className="loading"></div>}
          </div>
          <div className="flex items-center col-start-5 col-end-6">
            {!loading ? "0 COMP" : <div className="loading"></div>}
          </div>
          <div className="flex ml-3 items-center col-start-6 col-end-7">
            {!loading ? (
              !showmodal && (
                <Switch
                  offHandleColor={"#546E7A"}
                  onHandleColor={"#546E7A"}
                  onChange={handleChange2}
                  checked={switchBtn2.checked}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  height={6}
                  width={30}
                  onColor={"#01D2D4"}
                  handleDiameter={15}
                />
              )
            ) : (
              <div className="loading"></div>
            )}
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
          window.sessionStorage.setItem("apyValue", DAIValue);
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
            {!loading ? DAIValue : <div className="loading"></div>}
          </div>
          <div className="flex items-center col-start-5 col-end-6">
            {!loading ? "0 DAI" : <div className="loading"></div>}
          </div>
          <div className="flex ml-3 items-center col-start-6 col-end-7">
            {!loading ? (
              !showmodal && (
                <Switch
                  offHandleColor={"#546E7A"}
                  onHandleColor={"#546E7A"}
                  onChange={handleChange3}
                  checked={switchBtn3.checked}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  height={6}
                  width={30}
                  onColor={"#01D2D4"}
                  handleDiameter={15}
                />
              )
            ) : (
              <div className="loading"></div>
            )}
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
          window.sessionStorage.setItem("apyValue", EtherValue);
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
            {!loading ? EtherValue : <div className="loading"></div>}
          </div>
          <div className="flex items-center col-start-5 col-end-6">
            {!loading ? "0 ETH" : <div className="loading"></div>}
          </div>
          <div className="flex ml-3 items-center col-start-6 col-end-7">
            {!loading ? (
              !showmodal && (
                <Switch
                  offHandleColor={"#546E7A"}
                  onHandleColor={"#546E7A"}
                  onChange={handleChange4}
                  checked={switchBtn4.checked}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  height={6}
                  width={30}
                  onColor={"#01D2D4"}
                  handleDiameter={15}
                />
              )
            ) : (
              <div className="loading"></div>
            )}
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
          window.sessionStorage.setItem("apyValue", CainLinkValue);
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
            {!loading ? CainLinkValue : <div className="loading"></div>}
          </div>
          <div className="flex items-center col-start-5 col-end-6">
            {!loading ? "0 LINK" : <div className="loading"></div>}
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
          window.sessionStorage.setItem("apyValue", TrueUSDValue);
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
            {!loading ? TrueUSDValue : <div className="loading"></div>}
          </div>
          <div className="flex items-center col-start-5 col-end-6">
            {!loading ? "0 TUSD" : <div className="loading"></div>}
          </div>
          <div className="flex ml-3 items-center col-start-6 col-end-7"></div>
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
          window.sessionStorage.setItem("apyValue", UniswapValue);
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
            {!loading ? UniswapValue : <div className="loading"></div>}
          </div>
          <div className="flex items-center col-start-5 col-end-6">
            {!loading ? "0 UNI" : <div className="loading"></div>}
          </div>
          <div className="flex ml-3 items-center col-start-6 col-end-7">
            {!loading ? (
              !showmodal && (
                <Switch
                  offHandleColor={"#546E7A"}
                  onHandleColor={"#546E7A"}
                  onChange={handleChange5}
                  checked={switchBtn5.checked}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  height={6}
                  width={30}
                  onColor={"#01D2D4"}
                  handleDiameter={15}
                />
              )
            ) : (
              <div className="loading"></div>
            )}
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
          window.sessionStorage.setItem("apyValue", USDcoinValue);
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
            {!loading ? USDcoinValue : <div className="loading"></div>}
          </div>
          <div className="flex items-center col-start-5 col-end-6">
            {!loading ? "0 USDC" : <div className="loading"></div>}
          </div>
          <div className="flex ml-3 items-center col-start-6 col-end-7">
            {!loading ? (
              !showmodal && (
                <Switch
                  offHandleColor={"#546E7A"}
                  onHandleColor={"#546E7A"}
                  onChange={handleChange6}
                  checked={switchBtn6.checked}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  height={6}
                  width={30}
                  onColor={"#01D2D4"}
                  handleDiameter={15}
                />
              )
            ) : (
              <div className="loading"></div>
            )}
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
          window.sessionStorage.setItem("apyValue", TetherValue);
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
            {!loading ? TetherValue : <div className="loading"></div>}
          </div>
          <div className="flex items-center col-start-5 col-end-6">
            {!loading ? "0 USDT" : <div className="loading"></div>}
          </div>
          <div className="flex ml-3 items-center col-start-6 col-end-7"></div>
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
          window.sessionStorage.setItem("apyValue", WrappedValue);
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
            {!loading ? WrappedValue : <div className="loading"></div>}
          </div>
          <div className="flex items-center col-start-5 col-end-6">
            {!loading ? "0 WBTC" : <div className="loading"></div>}
          </div>
          <div className="flex ml-3 items-center col-start-6 col-end-7">
            {!loading ? (
              !showmodal && (
                <Switch
                  offHandleColor={"#546E7A"}
                  onHandleColor={"#546E7A"}
                  onChange={handleChange7}
                  checked={switchBtn7.checked}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  height={6}
                  width={30}
                  onColor={"#01D2D4"}
                  handleDiameter={15}
                />
              )
            ) : (
              <div className="loading"></div>
            )}
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
          window.sessionStorage.setItem("apyValue", OXValue);
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
            {!loading ? OXValue : <div className="loading"></div>}
          </div>
          <div className="flex items-center col-start-5 col-end-6">
            {!loading ? "0 ZRX" : <div className="loading"></div>}
          </div>
          <div className="flex ml-3 items-center col-start-6 col-end-7">
            {!loading ? (
              !showmodal && (
                <Switch
                  offHandleColor={"#546E7A"}
                  onHandleColor={"#546E7A"}
                  onChange={handleChange8}
                  checked={switchBtn8.checked}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  height={6}
                  width={30}
                  onColor={"#01D2D4"}
                  handleDiameter={15}
                />
              )
            ) : (
              <div className="loading"></div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardBoxLeftSide;
