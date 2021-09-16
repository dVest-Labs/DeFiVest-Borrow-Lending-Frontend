import React from "react";
import DashboardBoxLeftSide from "../../components/DashboardBoxLeftSide";
import DashboardBoxRightSide from "../../components/DashboardBoxRightSide";
import Footer from "../../components/Footer";
import { useWeb3React } from "@web3-react/core";
import "./Dashboard.css";

const Dashboard = () => {
  const { account, chainId } = useWeb3React();
  const loading = account == null;

  return (
    <>
      <div className="max-w-screen-xl mx-auto h-screen flex flex-col justify-between">
        <div className="mt-24">
          <section className="text-white flex justify-center mt-10">
            <div className="mx-10  md:mx-24 lg:mx-28 flex flex-col items-center justify-center rounded-3x">
              <div className="cngTxtHover cursor-pointer">
                <span className="box-shadow-inner txtShowFirst animationColor flex flex-col items-center w-44 h-44 justify-center border border-primary rounded-3x rounded-full">
                  <div>Net APY</div>
                  {loading ? (
                    <div className="rainbow" style={{ width: "80px" }}></div>
                  ) : (
                    <div>...</div>
                  )}
                </span>
                <span
                  style={{ background: "" }}
                  className="box-shadow-inner animationColor2 txtShowLast text-xs flex flex-col items-center border border-primary w-44 h-44 justify-center rounded-full"
                >
                  <div className="pb-2">...</div>
                  <div>Interest earned and</div>
                  <div>paid, plus COMP</div>
                </span>
              </div>
            </div>
          </section>
          <section className="mt-7 mb-5 w-full flex justify-center">
            <div className="max-w-xl text-white px-10 md:px-24 lg:px-28 flex flex-col w-full justify-center">
              <div className="animationColo2 box-shadow-inner px-4 py-2 rounded-md flex flex-col items-center">
                <div className="font-medium text-xs">SUPPLY BALANCE</div>
                {!loading ? (
                  <div className="font-medium text-xl">$0</div>
                ) : (
                  <div className="">
                    <div className="rainbow" style={{ width: "60px" }}></div>
                  </div>
                )}
              </div>
              <div className="mt-5 animationColo2 box-shadow-inner px-4 py-2 rounded-md flex flex-col items-center">
                <div className="font-medium text-xs">BORROW BALANCE</div>
                {!loading ? (
                  <div className="font-medium text-xl">$0</div>
                ) : (
                  <div className="">
                    <div className="rainbow" style={{ width: "60px" }}></div>
                  </div>
                )}
              </div>
            </div>
          </section>
          <section className="mx-10 md:mx-24 lg:mx-28">
            <div className="bg-blac box-shadow-inner px-3 py-5 rounded-xl mb-16 w-full flex items-center justify-center">
              <div className="text-white mr-3">
                <span className="text-label text-sm mr-2">BORROW LIMIT</span>
                <span>0%</span>
              </div>
              <div className="progress">
                <div className="progress-value"></div>
              </div>
              <div className="text-white ml-3">
                <span className="text-label text-md">$0.00</span>
              </div>
            </div>
          </section>

          <div className="flex justify-center mb-6">
            <div className="w-11/12 flex flex-col md:flex-row">
              <div className="bg-whit mx-0 md:mx-2 w-full md:w-1/2 h-auto rounded-lg shadow-2xl">
                <DashboardBoxLeftSide loading={loading} />
              </div>

              <div className="mt-5 md:mt-0 bg-whit mx-0 md:mx-2 w-full md:w-1/2 h-auto rounded-lg shadow-2xl">
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
