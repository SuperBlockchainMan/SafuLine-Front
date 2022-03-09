import React, { useMemo } from 'react'
import styled from 'styled-components'
import { Text, Box, Card, Flex, Skeleton } from '@pancakeswap/uikit'
import { useTokenData, useTokenChartData, useTokenPriceData } from 'state/info/hooks'
import { ONE_HOUR_SECONDS } from 'config/constants/info'
import ChartCard from 'views/Info/components/InfoCharts/ChartCard'
import TokenDataCard from './TokenData/TokenDataCard'
import TransactionTable from './TokenData/TransactionTable'

export const StyledTokenDataContainer = styled(Flex)`
  flex-shrink: 0;
  height: fit-content;
  padding: 0 24px;

  ${({ theme }) => theme.mediaQueries.lg} {
    padding: 0 40px;
  }
`

interface TokenInfoProps {
  address: string
}

const DEFAULT_TIME_WINDOW: Duration = { weeks: 1 }

const TokenInfo: React.FC<TokenInfoProps> = ({ address }) => {
  const tokenData = useTokenData(address)
  const chartData = useTokenChartData(address)
  const priceData = useTokenPriceData(address, ONE_HOUR_SECONDS, DEFAULT_TIME_WINDOW)

  const adjustedPriceData = useMemo(() => {
    // Include latest available price
    if (priceData && tokenData && priceData.length > 0) {
      return [
        ...priceData,
        {
          time: new Date().getTime() / 1000,
          open: priceData[priceData.length - 1].close,
          close: tokenData?.priceUSD,
          high: tokenData?.priceUSD,
          low: priceData[priceData.length - 1].close,
        },
      ]
    }
    return undefined
  }, [priceData, tokenData])

  return (
    <Flex width="100%" justifyContent="center" position="relative" mt="30px">
      <StyledTokenDataContainer>
        <Flex minWidth="328px">
          <TokenDataCard address={address} />
        </Flex>
      </StyledTokenDataContainer>
      <Flex width="50%">
        <ChartCard
          variant="token"
          chartData={chartData}
          tokenData={tokenData}
          tokenPriceData={adjustedPriceData}
        />
      </Flex>
    </Flex>
  )
}

export default TokenInfo