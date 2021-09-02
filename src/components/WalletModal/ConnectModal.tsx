import React from 'react'
import { Button } from 'components/Button'
import { Text } from 'components/Text'
import { connectorLocalStorageKey } from 'components/WalletModal'
import { setupNetwork } from 'utils/wallet'
import { useWeb3React } from '@web3-react/core'
import { connectorsByName } from 'connectors'
import { Modal } from '../Modal'
import WalletCard from './WalletCard'
import BSC from './icons/BinanceChain'
import config from './config'
import { Login } from './types'

interface Props {
  login: Login
  onDismiss?: () => void
}

const ConnectModal: React.FC<Props> = ({ login, onDismiss = () => null }) => {
  const { activate } = useWeb3React()
  const bscSwith = async (network) => {
    const connector = connectorsByName.injected
    const hasSetup = await setupNetwork(network)
    if (hasSetup) {
      activate(connector)
      window.localStorage.setItem(connectorLocalStorageKey, 'injected')
      onDismiss()
    }
  }
  return (
    <Modal title="Connect to a wallet" onDismiss={onDismiss}>
      {config.map((entry) => (
        <WalletCard key={entry.title} login={login} walletConfig={entry} onDismiss={onDismiss} mb="8px" />
      ))}
      <Button
        width="100%"
        variant="tertiary"
        onClick={() => {
          bscSwith('bsc')
        }}
        style={{ justifyContent: 'space-between' }}
        mb="8px"
        id="wallet-connect-binancesmartchain"
      >
        <Text bold color="primary" mr="16px">
          Binance Smart Chain
        </Text>
        <BSC width="32px" />
      </Button>
      <Button
        width="100%"
        variant="tertiary"
        onClick={() => {
          bscSwith('chapel')
        }}
        style={{ justifyContent: 'space-between' }}
        mb="0"
        id="wallet-connect-binancesmartchain"
      >
        <Text bold color="primary" mr="16px">
          Binance Smart Chain Testnet
        </Text>
        <BSC width="32px" />
      </Button>
      {/* <HelpLink
      href="https://docs.pancakeswap.finance/guides/faq#how-do-i-set-up-my-wallet-on-binance-smart-chain"
      external
    >
      <HelpIcon color="primary" mr="6px" />
      Learn how to connect
    </HelpLink> */}
    </Modal>
  )
}

export default ConnectModal
