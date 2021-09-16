import React from "react";
import { Squash as Hamburger } from "hamburger-react";
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
      style={{ zIndex: 99999 }}
      className={!isOpen ? "dropDown2 text-white" : "dropDown text-white"}
    >
      <div className="flex justify-end pt-5 mr-8">
        <Hamburger toggle={toggle} toggled={isOpen} />
      </div>
      <div className="text-3xl font-bold flex flex-col items-center justify-center pt-12 cursor-pointer">
        <img
          src={logo}
          style={{ height: "40px", width: "40px" }}
          alt="Logo"
          className="rounded-xl border-2 border-black"
        />
        <Link to="/" onClick={toggle}>
          <div className="pt-2">DEFIVEST</div>
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
