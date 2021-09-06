import React from "react";
import LoadingForVoteLeftSide from "./LoadingForVoteLeftSide";

interface Props {
  loading: Boolean;
}

const VotePageLeftSide = ({ loading }: Props) => {
  return (
    <>
      {!loading ? (
        <div className="setHightForVoteLeftBox flex md:col-start-1 md:col-end-3 bg-white mb-10 rounded-lg shadow-2xl">
          <div className="">
            <div className="pl-7 h-14 border-b-1 border-underlinecl text-lg flex font-semibold items-center">
              Voting Wallet
            </div>
            <div className="pl-7 h-20 border-b-1 border-underlinecl text-lg flex flex-col justify-center">
              <div className="text-sm text-label">COMP Balance</div>
              <div className="tracking-wider">
                <div className="flex items-center text-xl">
                  <span>0.0000</span>
                  <span className="text-label">0000</span>
                  <img
                    className="h-5 w-5 ml-2"
                    src="https://app.compound.finance/compound-components/assets/asset_COMP.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="pb-5">
              <div className="pl-7 h-14 text-lg flex items-center">
                Setup Voting
              </div>
              <div className="pl-7 pr-7 text-sm text-label">
                You can either vote on each proposal yourself or delegate your
                votes to a third party. Compound Governance puts you in charge
                of the future of Compound.
                <span className="text-primary cursor-pointer">Learn more.</span>
              </div>
            </div>
            <div className="mx-7 pb-5">
              <button className="w-full text-white flex justify-center py-3 rounded-md bg-primary">
                Get Started
              </button>
            </div>
          </div>
        </div>
      ) : (
        <LoadingForVoteLeftSide loading={loading} />
      )}
    </>
  );
};

export default VotePageLeftSide;
