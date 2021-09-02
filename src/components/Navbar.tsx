import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useWeb3React } from "@web3-react/core";
import useAuth from "hooks/useAuth";
import UserBlock from "components/UserBlock/UserBlock";
import logo from "../images/logo.png";

const Navbar = ({ toggle, isOpen }) => {
  const { pathname } = useLocation();
  const { account, chainId } = useWeb3React();
  const { login, logout } = useAuth();
  return (
    <>
      <div className="grid bg-black text-white grid-cols-12 gap-1 h-16 shadow-md">
        <div className="col-start-1 col-end-5 md:col-start-1 md:col-end-4  flex justify-center items-center">
          <div className="ml-8 text-2xl font-bold flex items-center cursor-pointer">
            <img
              src={logo}
              style={{ height: "25px", width: "40px" }}
              alt="Logo"
            />
            <Link to="/" className="ml-2">
              DeFiVest
            </Link>
          </div>
        </div>

        <div className="col-start-5 col-end-5 md:col-start-4 md:col-end-10  flex justify-center items-center">
          <div className="flex invisible md:visible ">
            <div
              className={
                pathname === "/"
                  ? "py-1 px-3 mr-2 rounded-lg bg-primary text-sm font-medium cursor-pointer"
                  : "py-1 mr-2 px-3 bg-gray rounded-lg text-sm font-medium cursor-pointer"
              }
            >
              <Link to="/">Dashboard</Link>
            </div>
            <div
              className={
                pathname === "/vote"
                  ? "py-1 px-3 mr-2 rounded-lg bg-primary text-sm font-medium cursor-pointer"
                  : "py-1 mr-2 bg-gray rounded-lg px-3 text-sm font-medium cursor-pointer"
              }
            >
              <Link to="/vote">Vote</Link>
            </div>
          </div>
        </div>

        <div className="col-start-6 col-end-13 md:col-start-10 md:col-end-13 flex justify-end md:justify-center items-center">
          <div className="hidden md:flex">
            <UserBlock account={account} login={login} logout={logout} />
          </div>
          {isOpen ? (
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
          ) : (
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
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
