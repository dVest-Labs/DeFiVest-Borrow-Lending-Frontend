import React, { useRef, useEffect, useCallback } from "react";
import { MdClose } from "react-icons/md";
import "./Modal.css";

const Modal = ({ showmodal, setShowModal }) => {
  // const tokenName = "Basic Attension Token";
  const tokenName = window.sessionStorage.getItem("tokenName");
  const logoLink = window.sessionStorage.getItem("logoLink");
  const apyValue = window.sessionStorage.getItem("apyValue");

  const modalRef = useRef();
  const [rightOpen, setRightOpen] = React.useState(false);
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };
  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showmodal) {
        setShowModal(false);
      }
    },
    [setShowModal, showmodal]
  );
  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);
  return (
    <>
      {showmodal ? (
        <div
          className="Background overflow-y-scroll"
          ref={modalRef}
          onClick={closeModal}
          style={{ zIndex: 9999999 }}
        >
          <div className="ModalWrapper">
            <div className="px-6" style={{ flex: 5, alignSelf: "center" }}>
              <div className="ModelTitle py-4 px-">
                <div className="flex flex-row items-center">
                  <img className="h-7 w-7 mr-3" src={logoLink} alt="" />
                  {tokenName}
                </div>
                <MdClose
                  className="cursor-pointer h-7 w-7"
                  onClick={() => setShowModal((prev) => !prev)}
                />
              </div>
              <div className="ModalContent">
                {rightOpen ? (
                  <>
                    <img
                      className="h-20 w-20  mt-5 mb-3"
                      src={logoLink}
                      alt=""
                    />
                    <div
                      className="text-xs text-center px-6"
                      style={{ color: "#AAB8C1" }}
                    >
                      To Supply or Repay Aave Token to the Compound Protocol,
                      you need to enable it first.
                    </div>
                  </>
                ) : (
                  <div className="flex justify-between pt-10 pb-">
                    <input
                      placeholder="0"
                      className="outline-none text-4xl w-full text-center"
                    />
                    <div
                      className="pl-5 text-center text-xs"
                      style={{ color: "#AAB8C1" }}
                    >
                      80% LIMIT
                    </div>
                  </div>
                )}

                <div
                  className="mt-10 flex text-xs justify-around w-full"
                  style={{ borderColor: "#e4e4e4" }}
                >
                  <div
                    onClick={() => {
                      setRightOpen(false);
                    }}
                    // className="cursor-pointer pb-2 border-b-2 w-1/2 flex justify-center"
                    className={`${
                      !rightOpen
                        ? "border-primary text-primary"
                        : "border-underlinecl"
                    } cursor-pointer pb-2 font-bold border-b-2 w-1/2 flex justify-center`}
                  >
                    BORROW
                  </div>
                  <div
                    onClick={() => {
                      setRightOpen(true);
                    }}
                    className={`${
                      rightOpen
                        ? "border-primary text-primary"
                        : "border-underlinecl"
                    } cursor-pointer pb-2 border-b-2 font-bold w-1/2 flex justify-center`}
                  >
                    REPAY
                  </div>
                </div>

                {rightOpen ? (
                  <>
                    <div className="flex items-start text-xs w-full pt-6 ">
                      Borrow Rates
                    </div>
                    <div
                      className="flex w-full items-center justify-between border-b py-3"
                      style={{ borderColor: "#e4e4e4" }}
                    >
                      <div className="flex flex-row items-center">
                        <img src={logoLink} className="h-7 w-7 mr-3" alt="" />
                        <span className="text-sm">Supply APY</span>
                      </div>
                      <div className="text-sm">{apyValue}</div>
                    </div>
                    <div className="flex w-full items-center justify-between py-3">
                      <div className="flex flex-row items-center">
                        <img
                          src="https://app.compound.finance/compound-components/assets/asset_COMP.svg"
                          className="h-7 w-7 mr-3"
                          alt=""
                        />
                        <span className="text-sm">Distribution APY</span>
                      </div>
                      <div className="text-sm">0%</div>
                    </div>
                    <button className="buttonModalContent mt-5 mb-2 bg-primary">
                      ENABLE
                    </button>

                    <div className="mb-5 flex w-full items-center justify-between">
                      <div className="flex flex-row items-center">
                        <span className="text-sm">Wallet Balance</span>
                      </div>
                      <div className="text-sm">0 BAT</div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-start text-xs w-full pt-6 ">
                      Borrow Rates
                    </div>
                    <div
                      className="flex w-full items-center justify-between border-b py-3"
                      style={{ borderColor: "#e4e4e4" }}
                    >
                      <div className="flex flex-row items-center">
                        <img src={logoLink} className="h-7 w-7 mr-3" alt="" />
                        <span className="text-sm">Borrow APY</span>
                      </div>
                      <div className="text-sm">{apyValue}</div>
                    </div>
                    <div className="flex w-full items-center justify-between py-3">
                      <div className="flex flex-row items-center">
                        <img
                          src="https://app.compound.finance/compound-components/assets/asset_COMP.svg"
                          className="h-7 w-7 mr-3"
                          alt=""
                        />
                        <span className="text-sm">Distribution APY</span>
                      </div>
                      <div className="text-sm">0%</div>
                    </div>
                    <div className="flex items-start text-xs w-full pt-6 ">
                      Borrow Limit
                    </div>
                    <div
                      className="flex w-full items-center justify-between border-b py-3"
                      style={{ borderColor: "#e4e4e4" }}
                    >
                      <div className="flex flex-row items-center">
                        <span className="text-sm">Borrow Balance</span>
                      </div>
                      <div className="text-sm">$0.00%</div>
                    </div>
                    <div
                      className="border-b-2 flex w-full items-center justify-between py-3"
                      style={{ borderColor: "#e4e4e4" }}
                    >
                      <div className="flex flex-row items-center">
                        <span className="text-sm">Borrow Limit Used</span>
                      </div>
                      <div className="text-sm">0%</div>
                    </div>

                    <button
                      className="buttonModalContent bg-primary mt-3"
                      // style={{ background: " #aab8c1" }}
                    >
                      NO BALANCE TO WITHDRAW
                    </button>

                    <div className="flex w-full items-center justify-between mt-3 mb-5">
                      <div className="flex flex-row items-center">
                        <span className="text-sm">Currently Borrowing</span>
                      </div>
                      <div className="text-sm">0 BAT</div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
