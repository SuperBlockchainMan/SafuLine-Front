import React,  { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'
import { Text, Box, Card, Flex, Skeleton, ChartIcon, EarnIcon, TradeIcon, useMatchBreakpoints } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { useExchangeChartManager, useLiquidityCardManager, useTransactionCardManager } from '../../../state/user/hooks'

const StyledSwapBottomMenuArea = styled(Flex)`
  position: fixed;
  bottom: 0px;
  height: 60px;
  justify-content: space-around;
  background: ${({ theme }) => theme.colors.backgroundAlt};
`

const SwapBottomMenu: React.FC = () => {
  const { t } = useTranslation()
  const { isMobile } = useMatchBreakpoints()
  const { pathname } = useLocation()
  const [userChartPreference, setUserChartPreference] = useExchangeChartManager()
  const [userLiquidityCardPreference, setUserLiquidityCardPreference] = useLiquidityCardManager()
  const [userTransactionCardPreference, setUserTransactionCardPreference] = useTransactionCardManager()

  const handleChartClick = () => {
    setUserChartPreference(!userChartPreference)
  }

  const handleLiquidityClick = () => {
    setUserLiquidityCardPreference(!userLiquidityCardPreference)
  }

  const handleTransactionClick = () => {
    setUserTransactionCardPreference(!userTransactionCardPreference)
  }

  if (!isMobile || pathname !== "/swap") {
    return null
  }

  return (
    <StyledSwapBottomMenuArea width="100%" justifyContent="center" alignItems="center">
      <Flex flexDirection="column" alignItems="center" onClick={handleChartClick} >
        <Text>{t('Chart')}</Text>
      </Flex>
      <Flex flexDirection="column" alignItems="center" onClick={handleLiquidityClick} >
        <Text>{t('Liquidity')}</Text>
      </Flex>
      <Flex flexDirection="column" alignItems="center" onClick={handleTransactionClick} >
        <Text>{t('Price')}</Text>
      </Flex>
    </StyledSwapBottomMenuArea>
  )
}

export default SwapBottomMenu