import React from "react";

const LoadingForVoteRightSide = ({ loading }) => {
  return (
    <div className="box-shadow-inner w-full flex md:col-start-1 md:col-end-3 mb-10 rounded-lg shadow-2xl">
      <div className="w-full">
        <div className="text-white pl-7 h-14 border-b-1 border-underlinecl text-lg flex items-center">
          Voting Wallet
        </div>
        <div className="pl-7 h-20 border-b-1 border-underlinecl text-lg flex flex-col justify-center">
          <div className="text-sm text-label">
            <div style={{ width: "30%" }} className="loading mr-2"></div>
          </div>
          <div className="tracking-wider mt-2">
            <div className="flex items-center text-xl">
              <div style={{ width: "40%" }} className="loading mr-2"></div>
              <div
                style={{ width: "20px", height: "20px" }}
                className="loading circle mr-2"
              ></div>
            </div>
          </div>
        </div>
        <div className="pb-5">
          <div className="text-white mb-3 pl-7 h-14 text-lg flex items-center">
            Setup Voting
          </div>
          <div className="pl-7 pr-7 text-sm text-label">
            <span className="invisible" style={{ height: "1px" }}>
              You can either vote on each proposal yourself or delegate your
            </span>
            <div
              style={{ width: "100%", marginTop: "-35px" }}
              className="loading m"
            ></div>
            <div style={{ width: "100%" }} className="loading mt-2"></div>
            <div style={{ width: "100%" }} className="loading mt-2"></div>
          </div>
        </div>
        <div className="mx-7 mb-8">
          <div
            style={{ width: "100%", height: "30px" }}
            className="loading mt-2"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingForVoteRightSide;
