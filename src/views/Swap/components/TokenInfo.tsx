import React, { useMemo } from 'react'
import styled from 'styled-components'
import { Text, Box, Card, Flex, Skeleton } from '@pancakeswap/uikit'
import { useTokenData, useTokenChartData, useTokenPriceData } from 'state/info/hooks'
import { ONE_HOUR_SECONDS } from 'config/constants/info'
import ChartCard from 'views/Info/components/InfoCharts/ChartCard'
import TokenDataCard from './TokenData/TokenDataCard'
import TransactionTable from './TokenData/TransactionTable'
import TokenChartCard from './TokenData/TokenChartCard'

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

const TokenInfo: React.FC<TokenInfoProps> = ({ address }) => {

  return (
    <Flex width="100%" justifyContent="center" position="relative" mt="30px">
      <StyledTokenDataContainer>
        <Flex minWidth="328px">
          <TokenDataCard address={address} />
        </Flex>
      </StyledTokenDataContainer>
      <Flex width="50%">
        <TokenChartCard address={address} />
      </Flex>
    </Flex>
  )
}

export default TokenInfo