import React from "react";
import DashboardBoxLeftSide from "../components/DashboardBoxLeftSide";
import DashboardBoxRightSide from "../components/DashboardBoxRightSide";
import Footer from "../components/Footer";
import { useWeb3React } from "@web3-react/core";

const Dashboard = () => {
  const { account, chainId } = useWeb3React();
  const loading = account == null;

  return (
    <>
      <div className="h-screen flex flex-col justify-between">
        <div>
          <div className="h-96 w-full bg-black rounded-b-xl flex flex-col items-center justify-center">
            <div className="h-96 w-full bg-black flex md:justify-center">
              <div className="flex flex-col md:flex-row justify-center items-center text-white md:w-1/2">
                <div className="mt-3 md:mt-3 min-w-max flex flex-col ml-60 md:ml-0 items-center">
                  <div className="text-primary">Supply Balance</div>
                  {!loading ? (
                    <div className="text-xl md:text-3xl w-full flex justify-center">
                      $0
                    </div>
                  ) : (
                    <div className="text-xl md:text-3xl w-full flex justify-center">
                      <div className="rainbow" style={{ width: "60px" }}></div>
                    </div>
                  )}
                </div>

                <div className="mx-10 md:mx-24 lg:mx-28 hidden md:flex flex-col items-center justify-center border-2 border-primary w-40 h-40 rounded-full">
                  <div className="cngTxtHover cursor-pointer">
                    <span className="txtShowFirst flex flex-col items-center w-40 h-40 justify-center rounded-full">
                      <div>Net APY</div>
                      {loading ? (
                        <div
                          className="rainbow"
                          style={{ width: "80px" }}
                        ></div>
                      ) : (
                        <div>...</div>
                      )}
                    </span>
                    <span className="txtShowLast text-xs flex flex-col items-center border-2 border-primary w-40 h-40 bg-hovercl justify-center rounded-full">
                      <div className="pb-2">...</div>
                      <div>Interest earned and</div>
                      <div>paid, plus COMP</div>
                    </span>
                  </div>
                </div>

                <div className="min-w-max mt-3 flex flex-col items-center ml-60 md:ml-0">
                  <div className="text-primary flex">Borrow Balance</div>
                  {!loading ? (
                    <div className="text-xl md:text-3xl w-full flex justify-center">
                      $0
                    </div>
                  ) : (
                    <div className="text-xl md:text-3xl w-full flex justify-center">
                      <div className="rainbow" style={{ width: "60px" }}></div>
                    </div>
                  )}
                </div>

                <div
                  className="absolute flex md:hidden"
                  style={{ marginLeft: "-130px" }}
                >
                  <div className="text-white flex md:hidden flex-col items-center justify-center border-2 border-primary w-40 h-40 rounded-full">
                    <div className="cngTxtHover cursor-pointer">
                      <span className="txtShowFirst flex flex-col items-center w-40 h-40 justify-center rounded-full">
                        <div>Net APY</div>
                        {loading ? (
                          <div
                            className="rainbow"
                            style={{ width: "80px" }}
                          ></div>
                        ) : (
                          <div>...</div>
                        )}
                      </span>
                      <span className="txtShowLast text-xs flex flex-col items-center border-2 border-primary w-40 h-40 bg-hovercl justify-center rounded-full">
                        <div className="pb-2">...</div>
                        <div>Interest earned and</div>
                        <div>paid, plus COMP</div>
                      </span>
                    </div>
                  </div>
                </div>

                <div></div>
              </div>
            </div>
            <div className="mb-28 w-full flex items-center justify-center">
              <div className="text-white mr-3">
                <span className="text-label text-sm mr-2">Borrow Limit</span>
                <span>0%</span>
              </div>
              <progress
                style={{ color: "red" }}
                className="w-3/5 h-1"
                value="0"
                max="100"
              ></progress>
              <div className="text-white ml-3">
                <span className="text-label text-md">$0.00</span>
              </div>
            </div>
          </div>

          <div
            className="flex justify-center mb-6"
            style={{ marginTop: "-60px" }}
          >
            <div className="w-11/12 grid grid-flow-col grid-col-1 grid-rows-2 lg:grid-col-2 lg:grid-rows-1 gap-6">
              <div className="bg-white mx-2 h-auto rounded-lg shadow-2xl">
                <DashboardBoxLeftSide loading={loading} />
              </div>

              <div className="bg-white mx-2 h-auto rounded-lg shadow-2xl">
                <DashboardBoxRightSide loading={loading} />
              </div>
            </div>
          </div>
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
