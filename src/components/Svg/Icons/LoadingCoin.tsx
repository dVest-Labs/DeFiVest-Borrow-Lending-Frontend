/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { memo } from 'react'
import styled from 'styled-components'
import loadingCoinGif from '../Gifs/LoadingCoinGif.gif'

const LoadingCoinWrapper = styled.img<{ isMobileView: boolean }>`
  width: 60px;
  height: 60px;
`
const LoadingCoin: React.FC = () => {
  return <img style={{ width: '25%', height: '25%' }} src={loadingCoinGif} alt="loading data..." />
}

export default LoadingCoin
