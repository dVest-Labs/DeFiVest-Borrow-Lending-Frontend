import React, { useState } from "react";
import Switch from "react-switch";

const DashboardBoxLeftSide = ({ loading }) => {
  const [switchBtn, setSwitchBtn] = useState({ checked: false });
  const [switchBtn2, setSwitchBtn2] = useState({ checked: false });
  const [switchBtn3, setSwitchBtn3] = useState({ checked: false });
  const [switchBtn4, setSwitchBtn4] = useState({ checked: false });
  const [switchBtn5, setSwitchBtn5] = useState({ checked: false });
  const [switchBtn6, setSwitchBtn6] = useState({ checked: false });
  const [switchBtn7, setSwitchBtn7] = useState({ checked: false });
  const [switchBtn8, setSwitchBtn8] = useState({ checked: false });

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
      <div className="text-xs sm:text-sm setRow border-b-1 setBorderLeft">
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
            {!loading ? "0.95%" : <div className="loading"></div>}
          </div>
          <div className="flex items-center col-start-5 col-end-6">
            {!loading ? "0 BAT" : <div className="loading"></div>}
          </div>
          <div className="flex ml-3 items-center col-start-6 col-end-7">
            {!loading ? (
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
            ) : (
              <div className="loading"></div>
            )}
          </div>
        </div>
      </div>

      {/* TOKEN NUMBER - 02 */}
      <div className="text-xs sm:text-sm setRow border-b-1 setBorderLeft">
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
            {!loading ? "0.85%" : <div className="loading"></div>}
          </div>
          <div className="flex items-center col-start-5 col-end-6">
            {!loading ? "0 COMP" : <div className="loading"></div>}
          </div>
          <div className="flex ml-3 items-center col-start-6 col-end-7">
            {!loading ? (
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
            ) : (
              <div className="loading"></div>
            )}
          </div>
        </div>
      </div>

      {/* TOKEN NUMBER - 03 */}
      <div className="text-xs sm:text-sm setRow border-b-1 setBorderLeft">
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
            {!loading ? "2.52%" : <div className="loading"></div>}
          </div>
          <div className="flex items-center col-start-5 col-end-6">
            {!loading ? "0 DAI" : <div className="loading"></div>}
          </div>
          <div className="flex ml-3 items-center col-start-6 col-end-7">
            {!loading ? (
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
            ) : (
              <div className="loading"></div>
            )}
          </div>
        </div>
      </div>

      {/* TOKEN NUMBER - 04 */}
      <div className="text-xs sm:text-sm setRow border-b-1 setBorderLeft">
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
            {!loading ? "0.25%" : <div className="loading"></div>}
          </div>
          <div className="flex items-center col-start-5 col-end-6">
            {!loading ? "0 ETH" : <div className="loading"></div>}
          </div>
          <div className="flex ml-3 items-center col-start-6 col-end-7">
            {!loading ? (
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
            ) : (
              <div className="loading"></div>
            )}
          </div>
        </div>
      </div>

      {/* TOKEN NUMBER - 05 */}
      <div className="text-xs sm:text-sm setRow border-b-1 setBorderLeft">
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
            {!loading ? "0.79%" : <div className="loading"></div>}
          </div>
          <div className="flex items-center col-start-5 col-end-6">
            {!loading ? "0 LINK" : <div className="loading"></div>}
          </div>
        </div>
      </div>

      {/* TOKEN NUMBER - 06 */}
      <div className="text-xs sm:text-sm setRow border-b-1 setBorderLeft">
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
            {!loading ? "2.24%" : <div className="loading"></div>}
          </div>
          <div className="flex items-center col-start-5 col-end-6">
            {!loading ? "0 TUSD" : <div className="loading"></div>}
          </div>
          <div className="flex ml-3 items-center col-start-6 col-end-7"></div>
        </div>
      </div>

      {/* TOKEN NUMBER - 07 */}
      <div className="text-xs sm:text-sm setRow border-b-1 setBorderLeft">
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
            {!loading ? "1.49%" : <div className="loading"></div>}
          </div>
          <div className="flex items-center col-start-5 col-end-6">
            {!loading ? "0 UNI" : <div className="loading"></div>}
          </div>
          <div className="flex ml-3 items-center col-start-6 col-end-7">
            {!loading ? (
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
            ) : (
              <div className="loading"></div>
            )}
          </div>
        </div>
      </div>

      {/* TOKEN NUMBER - 08 */}
      <div className="text-xs sm:text-sm setRow border-b-1 setBorderLeft">
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
            {!loading ? "1.86%" : <div className="loading"></div>}
          </div>
          <div className="flex items-center col-start-5 col-end-6">
            {!loading ? "0 USDC" : <div className="loading"></div>}
          </div>
          <div className="flex ml-3 items-center col-start-6 col-end-7">
            {!loading ? (
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
            ) : (
              <div className="loading"></div>
            )}
          </div>
        </div>
      </div>

      {/* TOKEN NUMBER - 09 */}
      <div className="text-xs sm:text-sm setRow border-b-1 setBorderLeft">
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
            {!loading ? "1.94%" : <div className="loading"></div>}
          </div>
          <div className="flex items-center col-start-5 col-end-6">
            {!loading ? "0 USDT" : <div className="loading"></div>}
          </div>
          <div className="flex ml-3 items-center col-start-6 col-end-7"></div>
        </div>
      </div>

      {/* TOKEN NUMBER - 10 */}
      <div className="text-xs sm:text-sm setRow border-b-1 setBorderLeft">
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
            {!loading ? "0.79%" : <div className="loading"></div>}
          </div>
          <div className="flex items-center col-start-5 col-end-6">
            {!loading ? "0 WBTC" : <div className="loading"></div>}
          </div>
          <div className="flex ml-3 items-center col-start-6 col-end-7">
            {!loading ? (
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
            ) : (
              <div className="loading"></div>
            )}
          </div>
        </div>
      </div>

      {/* TOKEN NUMBER - 11 */}
      <div className="text-xs sm:text-sm setRow border-b-1 rounded-b-lg setBorderLeft">
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
            {!loading ? "0.87%" : <div className="loading"></div>}
          </div>
          <div className="flex items-center col-start-5 col-end-6">
            {!loading ? "0 ZRX" : <div className="loading"></div>}
          </div>
          <div className="flex ml-3 items-center col-start-6 col-end-7">
            {!loading ? (
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
