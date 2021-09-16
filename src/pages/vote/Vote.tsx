import React from "react";
import VotePageLeftSide from "../../components/VotePageLeftSide";
import VotePageRightSide from "../../components/VotePageRightSide";
import Footer from "../../components/Footer";

const Vote = () => {
  const loading = false;
  return (
    <div className="max-w-screen-xl mx-auto h-screen flex flex-col justify-between">
      <div className="mt-24">
        <div className="pt-16 h-72 w-full bg-blac rounded-b-xl flex flex-col items-center">
          <div className="text-white text-label text-base">Votes</div>
          <div className="text-white text-3xl tracking-wider">
            {!loading ? (
              <span>
                <span>0.0000</span>
              </span>
            ) : (
              <div className="rainbow"></div>
            )}
          </div>
        </div>

        <div
          className="flex justify-center mb-6"
          style={{ marginTop: "-60px" }}
        >
          <div className="w-11/12 grid md:grid-cols-6 grid-flow-row gap-6">
            <VotePageLeftSide loading={loading} />

            <VotePageRightSide loading={loading} />
          </div>
        </div>
      </div>

      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default Vote;
