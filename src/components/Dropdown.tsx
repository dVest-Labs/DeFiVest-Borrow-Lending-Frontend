import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { useWeb3React } from "@web3-react/core";
import useAuth from "hooks/useAuth";
import UserBlock from "components/UserBlock/UserBlock";

const Dropdown = ({ toggle, isOpen }) => {
  const { account, chainId } = useWeb3React();
  const { login, logout } = useAuth();
  return (
    <div
      style={{ marginTop: "-64px" }}
      className={
        isOpen ? "text-white fixed h-screen w-screen bg-black z-50" : "hidden"
      }
    >
      <div onClick={toggle} className="flex justify-end pt-5 mr-4">
        <svg
          onClick={toggle}
          className="cursor-pointer w-6 h-6 flex items-end md:hidden mr-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </div>
      <div className="text-3xl font-bold flex flex-col items-center justify-center pt-12 cursor-pointer">
        <img src={logo} style={{ height: "25px", width: "40px" }} alt="Logo" />
        <Link to="/" onClick={toggle}>
          <div className="pt-2">DeFiVest</div>
        </Link>
      </div>
      <div onClick={toggle} className="flex justify-center pt-20 font-semibold">
        <Link to="/">Dashboard</Link>
      </div>
      <div onClick={toggle} className="flex justify-center pt-5 font-semibold">
        <Link to="/vote">Vote</Link>
      </div>
      <div className="flex justify-center pt-10 font-semibold">
        <UserBlock account={account} login={login} logout={logout} />
      </div>
    </div>
  );
};

export default Dropdown;
