import React from "react";

const LoadingForVoteRightSide = ({ loading }) => {
  return (
    <div className="box-shadow-inner flex flex-col md:col-start-3 md:col-end-7 mb-10 rounded-lg shadow-2xl">
      <div className="text-white pl-7 h-14 border-b-1 border-underlinecl text-lg flex items-center">
        Active Proposals
      </div>
      <div className="pl-7 pr-7 h-20 border-b-1 text-lg flex flex-col justify-center">
        <div className="flex justify-between">
          <div className="text-sm text-label w-1/2">
            <div style={{ width: "100%" }} className="loading mb-2"></div>
            <div className="flex">
              <div style={{ width: "30%" }} className="loading mr-2"></div>
              <div style={{ width: "70%" }} className="loading"></div>
            </div>
          </div>
          <div className="text-sm text-label flex justify-center items-center">
            <div className="flex items-center">
              <div
                style={{ width: "30px", height: "30px" }}
                className="loading circle mr-2"
              ></div>
              <div style={{ width: "50px" }} className="loading"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="pl-7 pr-7 h-20 border-b-1 text-lg flex flex-col justify-center">
        <div className="flex justify-between">
          <div className="text-sm text-label w-1/2">
            <div style={{ width: "100%" }} className="loading mb-2"></div>
            <div className="flex">
              <div style={{ width: "30%" }} className="loading mr-2"></div>
              <div style={{ width: "70%" }} className="loading"></div>
            </div>
          </div>
          <div className="text-sm text-label flex justify-center items-center">
            <div className="flex items-center">
              <div
                style={{ width: "30px", height: "30px" }}
                className="loading circle mr-2"
              ></div>
              <div style={{ width: "50px" }} className="loading"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="pl-7 pr-7 h-20 border-b-1 text-lg flex flex-col justify-center">
        <div className="flex justify-between">
          <div className="text-sm text-label w-1/2">
            <div style={{ width: "100%" }} className="loading mb-2"></div>
            <div className="flex">
              <div style={{ width: "30%" }} className="loading mr-2"></div>
              <div style={{ width: "70%" }} className="loading"></div>
            </div>
          </div>
          <div className="text-sm text-label flex justify-center items-center">
            <div className="flex items-center">
              <div
                style={{ width: "30px", height: "30px" }}
                className="loading circle mr-2"
              ></div>
              <div style={{ width: "50px" }} className="loading"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="pl-7 pr-7 h-20 text-lg flex flex-col justify-center">
        <div className="flex justify-between">
          <div className="text-sm text-label w-1/2">
            <div style={{ width: "100%" }} className="loading mb-2"></div>
            <div className="flex">
              <div style={{ width: "30%" }} className="loading mr-2"></div>
              <div style={{ width: "70%" }} className="loading"></div>
            </div>
          </div>
          <div className="text-sm text-label flex justify-center items-center">
            <div className="flex items-center">
              <div
                style={{ width: "30px", height: "30px" }}
                className="loading circle mr-2"
              ></div>
              <div style={{ width: "50px" }} className="loading"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingForVoteRightSide;
