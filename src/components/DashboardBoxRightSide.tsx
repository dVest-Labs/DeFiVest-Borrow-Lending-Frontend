import React from "react";

const DashboardBoxRightSide = ({ loading }) => {
  return (
    <>
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
              <div style={{ width: "75px" }} className="loading"></div>
            )}
          </div>
          <div className="flex items-center col-start-4 col-end-5">
            {!loading ? "8.02%" : <div className="loading"></div>}
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
            {!loading ? "6.86%" : <div className="loading"></div>}
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
            {!loading ? "4.17%" : <div className="loading"></div>}
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
            {!loading ? "3.41%" : <div className="loading"></div>}
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
            {!loading ? "6.65%" : <div className="loading"></div>}
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
            {!loading ? "3.77%" : <div className="loading"></div>}
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
            {!loading ? "10.61%" : <div className="loading"></div>}
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
            {!loading ? "3.43%" : <div className="loading"></div>}
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
            {!loading ? "3.50%" : <div className="loading"></div>}
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
            {!loading ? "6.49%" : <div className="loading"></div>}
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
            {!loading ? "7.78%" : <div className="loading"></div>}
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
