import React from "react";
import { useHistory } from "react-router-dom";

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
      className="text-base cursor-pointer bg-black border-2 border-primary hover:bg-primary trans rounded-md pt-1 pb-1 pr-3 pl-3 font-bold"
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
      className="text-base cursor-pointer bg-black border-2 border-primary hover:bg-primary trans rounded-md pt-1 pb-1 pr-3 pl-3 font-bold"
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
