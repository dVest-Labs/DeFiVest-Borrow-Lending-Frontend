import React from 'react'
import styled from 'styled-components'
import { useWeb3React } from '@web3-react/core'

import { connectorLocalStorageKey } from './config'
import { setupNetwork } from 'utils/wallet'
import { connectorsByName } from 'connectors'
import Button from 'components/Button/Button'
import Text from 'components/Text/Text'

import { Modal } from 'components/Modal'

interface Props {
  account: string
  logout: () => void
  onDismiss?: () => void
  history?: any
}

const FitContent = styled.div`
  * > * {
    width: fit-content;
  }
  svg {
    width: 24px;
  }
`

const AccountModal: React.FC<Props> = ({ account, logout, onDismiss = () => null, history }) => {
  return (
    <Modal title="Your wallet" onDismiss={onDismiss} styles={{ minHeight: '250px', justifyContent: 'space-between' }}>
      <Text
        fontSize="20px"
        bold
        style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', marginBottom: '8px' }}
      >
        {account}
      </Text>
      <Button
        scale="sm"
        variant="secondary"
        onClick={() => {
          logout()
          window.localStorage.removeItem(connectorLocalStorageKey)
          onDismiss()
        }}
      >
        Logout
      </Button>
    </Modal>
  )
}

export default AccountModal
