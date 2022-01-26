import React from 'react'
import styled from 'styled-components'
import { Text, Box, Card, Skeleton } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { useTokenData } from 'state/info/hooks'
import Percent from 'views/Info/components/Percent'
import { formatAmount } from 'views/Info/utils/formatInfoNumbers'

const StyledCard = styled(Card)`
  width: 100%;
`

interface TokenDataCardProps {
  address: string
}

const TokenDataCard: React.FC<TokenDataCardProps> = ({ address }) => {
  const { t } = useTranslation()
  const tokenData = useTokenData(address)

  return (
    <StyledCard>
      <Box p="24px">
        <Text bold small color="secondary" fontSize="12px" textTransform="uppercase">
          {t('Liquidity')}
        </Text>
        { tokenData ?
          <Text bold fontSize="24px">
            ${formatAmount(tokenData.liquidityUSD)}
          </Text>
          :
          <Skeleton />
        }
        { tokenData ?
          <Percent value={tokenData.liquidityUSDChange} />
          :
          <Skeleton />
        }

        <Text mt="24px" bold color="secondary" fontSize="12px" textTransform="uppercase">
          {t('Volume 24H')}
        </Text>
        { tokenData ?
          <Text bold fontSize="24px" textTransform="uppercase">
            ${formatAmount(tokenData.volumeUSD)}
          </Text>
          :
          <Skeleton />
        }
        {tokenData ? 
          <Percent value={tokenData.volumeUSDChange} />
          :
          <Skeleton />
        }

        <Text mt="24px" bold color="secondary" fontSize="12px" textTransform="uppercase">
          {t('Volume 7D')}
        </Text>
        { tokenData ? 
          <Text bold fontSize="24px">
            ${formatAmount(tokenData.volumeUSDWeek)}
          </Text>
          :
          <Skeleton />
        }

        <Text mt="24px" bold color="secondary" fontSize="12px" textTransform="uppercase">
          {t('Transactions 24H')}
        </Text>
        { tokenData ?
          <Text bold fontSize="24px">
            {formatAmount(tokenData.txCount, { isInteger: true })}
          </Text>
          :
          <Skeleton />
        }
      </Box>
    </StyledCard>
  )
}

export default TokenDataCard