import React from "react";
import { useHistory } from "react-router-dom";
import "./UserBlock.css";
import Button from "../Button/Button";
import { useWalletModal } from "../WalletModal";
import { Login } from "../WalletModal/types";
import useTheme from "hooks/useTheme";
import ConnectButton from "./ConnectButton";

interface Props {
  account?: string;
  login: Login;
  logout: () => void;
}

const UserBlock: React.FC<Props> = ({ account, login, logout }) => {
  const history = useHistory();
  const { isDark, toggleTheme } = useTheme();

  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(
    login,
    logout,
    account,
    history
  );
  const accountEllipsis = account
    ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}`
    : null;
  return account ? (
    // <ConnectButton
    //   isDark={isDark}
    //   onClick={() => {
    //     onPresentAccountModal();
    //   }}
    // >
    //   {accountEllipsis}
    // </ConnectButton>
    <div
      className="connectWalletBtn text-base cursor-pointer border-2 border-red-600 trans rounded-md pt-1 pb-1 pr-3 pl-3 font-bold"
      onClick={() => {
        onPresentAccountModal();
      }}
    >
      {accountEllipsis}
    </div>
  ) : (
    // <ConnectButton
    //   isDark={isDark}
    //   onClick={() => {
    //     onPresentConnectModal();
    //   }}
    // >
    //   Connect Wallet
    // </ConnectButton>
    <div
      className="connectWalletBtn text-base cursor-pointer border-2 border-red-600 hover:border-red-500 trans rounded-md pt-1 pb-1 pr-3 pl-3 font-medium"
      onClick={() => {
        onPresentConnectModal();
      }}
    >
      Connect Wallet
    </div>
  );
};

export default React.memo(
  UserBlock,
  (prevProps, nextProps) => prevProps.account === nextProps.account
);
