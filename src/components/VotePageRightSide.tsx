import React from "react";
import LoadingForVoteRightSide from "./LoadingForVoteRightSide";

interface Props {
  loading: Boolean;
}

const VotePageRightSide = ({ loading }: Props) => {
  return (
    <>
      {!loading ? (
        <div className="box-shadow-inner flex flex-col md:col-start-3 md:col-end-7 mb-10 rounded-lg shadow-2xl">
          <div className="text-white pl-7 h-14 border-b-1 border-underlinecl text-lg flex items-center">
            Active Proposals
          </div>
          <div className="pl-7 pr-7 h-20 border-b-1 text-lg flex flex-col justify-center">
            <div className="flex justify-between">
              <div className="text-sm text-label">No active proposals</div>
              <div className="text-sm text-label">---</div>
            </div>
          </div>
          <div className="h-12 justify-center items-center text-label text-sm flex">
            ALL PROPOSALS
          </div>
        </div>
      ) : (
        <LoadingForVoteRightSide loading={loading} />
      )}
    </>
  );
};

export default VotePageRightSide;
