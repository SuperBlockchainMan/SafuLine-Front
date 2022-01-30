import React, { useRef, useState, useEffect, useMemo } from 'react'
import styled from 'styled-components'
import { Currency, Token } from '@pancakeswap/sdk'
import { Text, Input, Flex, Skeleton, useMatchBreakpoints } from '@pancakeswap/uikit'
import { CurrencyLogo, DoubleCurrencyLogo } from 'views/Info/components/CurrencyLogo'
import { formatAmount } from 'views/Info/utils/formatInfoNumbers'
import { useToken } from 'hooks/Tokens'

export type TokenData = {
  exists: boolean

  name: string
  symbol: string
  address: string

  volumeUSD: number
  volumeUSDChange: number
  volumeUSDWeek: number
  txCount: number

  liquidityToken: number
  liquidityUSD: number
  liquidityUSDChange: number

  priceUSD: number
  priceUSDChange: number
  priceUSDChangeWeek: number
}

const HoverRowLink = styled.div`
  :hover {
    cursor: pointer;
    opacity: 0.6;
  }
`

const ResponsiveGrid = styled(Flex)`
  display: grid;
  grid-gap: 1em;
  grid-template-columns: 1fr;
  margin: 8px 0;
  align-items: center;
  ${({ theme }) => theme.mediaQueries.sm} {
    grid-template-columns: 1.5fr repeat(3, 1fr);
  }
`

interface SearchProps {
  setTokenAddress: React.Dispatch<React.SetStateAction<string>>
}
interface TokenSearchItemProps {
  token: TokenData
  setTokenAddress: React.Dispatch<React.SetStateAction<string>>
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>
  onTokenSelect: (currency: Currency) => void
}

const TokenSearchItem: React.FC<TokenSearchItemProps> = ({ token, setTokenAddress, setShowMenu, onTokenSelect }) => {
  const { isXs, isSm } = useMatchBreakpoints()
  const currency = useToken(token.address)

  const handleItemClick = (address: string) => {
    setTokenAddress(address)
    setShowMenu(false)
    onTokenSelect(currency)
  }

  return (
    <HoverRowLink>
      <ResponsiveGrid onClick={() => {handleItemClick(token.address)}}>
        <Flex>
          <CurrencyLogo address={token.address} />
          <Text ml="10px">
            <Text>{`${token.name} (${token.symbol})`}</Text>
          </Text>
        </Flex>
        {!isXs && !isSm && <Text textAlign="end">${formatAmount(token.priceUSD)}</Text>}
        {!isXs && !isSm && <Text textAlign="end">${formatAmount(token.volumeUSD)}</Text>}
        {!isXs && !isSm && <Text textAlign="end">${formatAmount(token.liquidityUSD)}</Text>}
      </ResponsiveGrid>
    </HoverRowLink>
  )
}

export default TokenSearchItem