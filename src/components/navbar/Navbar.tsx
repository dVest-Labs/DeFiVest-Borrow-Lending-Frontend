import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useWeb3React } from "@web3-react/core";
import useAuth from "hooks/useAuth";
import UserBlock from "components/UserBlock/UserBlock";
import logo from "../../images/logo.png";
import "./Navbar.css";
import { Squash as Hamburger } from "hamburger-react";
// import Dashboard from "../../pages/dashboard/Dashboard";

const Navbar = ({ toggle, isOpen }) => {
  const { pathname } = useLocation();
  const { account, chainId } = useWeb3React();
  const { login, logout } = useAuth();
  return (
    <>
      <div
        style={{ zIndex: 9999 }}
        className="fixed w-full navbarContainer flex text-white h-20 shadow-lg box-shadow-inner"
      >
        <div className="w-1/2 md:w-3/12 flex items-center">
          <div className="text-2xl font-bold flex items-center cursor-pointer">
            <img
              src={logo}
              style={{ height: "30px", width: "30px" }}
              alt="Logo"
              className="rounded-xl border-2 border-black"
            />
            <Link to="/" className="ml-2 text-2xl">
              DEFIVEST
            </Link>
          </div>
        </div>

        <div className="w-0 md:w-6/12 flex justify-center items-center">
          <div className="pt-2 flex invisible md:visible ">
            <div
              className={
                pathname === "/"
                  ? "px-3 mr-2 text-base cursor-pointer font-medium border-b-2"
                  : "mr-2 px-3 bg-gra text-base cursor-pointer font-medium"
              }
            >
              <Link to="/">Dashboard</Link>
            </div>
            <div
              className={
                pathname === "/vote"
                  ? "px-3 mr-2 text-base font-medium cursor-pointer border-b-2"
                  : "mr-2 px-3 text-base font-medium cursor-pointer"
              }
            >
              <Link to="/vote">Vote</Link>
            </div>
          </div>
        </div>

        <div className="w-1/2 md:w-3/12 flex justify-end items-center">
          <div className="hidden md:flex">
            <UserBlock account={account} login={login} logout={logout} />
          </div>
          {isOpen ? (
            <div className="cursor-pointer flex items-end md:hidden text-white">
              <Hamburger toggle={toggle} toggled={isOpen} />
            </div>
          ) : (
            <div className=" cursor-pointer flex items-end md:hidden text-white">
              <Hamburger toggle={toggle} toggled={isOpen} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
