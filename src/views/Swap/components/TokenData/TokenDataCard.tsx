import React from 'react'
import styled from 'styled-components'
import { Text, Box, Card, Skeleton } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { useTokenData } from 'state/info/hooks'
import Percent from 'views/Info/components/Percent'
import { formatAmount } from 'views/Info/utils/formatInfoNumbers'

const StyledCard = styled(Card)`
  width: 100%;
  background: transparent;
`

const StyledPercent = styled(Percent)`
  line-height: 1;
`

const StyledText = styled(Text)`
  line-height: 1.17;
`

interface TokenDataCardProps {
  address: string
  drawer?: boolean
}

const TokenDataCard: React.FC<TokenDataCardProps> = ({ address, drawer = false }) => {
  const { t } = useTranslation()
  const tokenData = useTokenData(address)

  return (
    <StyledCard mt={drawer ? "50px" : "0px"} >
      <Box p="24px">
        <Text bold small color="secondary" fontSize="12px" textTransform="uppercase">
          {t('Liquidity')}
        </Text>
        { tokenData ?
          <StyledText bold fontSize="24px">
            ${formatAmount(tokenData.liquidityUSD)}
          </StyledText>
          :
          <Skeleton />
        }
        { tokenData ?
          <StyledPercent value={tokenData.liquidityUSDChange} />
          :
          <Skeleton />
        }

        <Text mt="10px" bold color="secondary" fontSize="12px" textTransform="uppercase">
          {t('Volume 24H')}
        </Text>
        { tokenData ?
          <StyledText bold fontSize="24px" textTransform="uppercase">
            ${formatAmount(tokenData.volumeUSD)}
          </StyledText>
          :
          <Skeleton />
        }
        {tokenData ? 
          <StyledPercent value={tokenData.volumeUSDChange} />
          :
          <Skeleton />
        }

        <Text mt="10px" bold color="secondary" fontSize="12px" textTransform="uppercase">
          {t('Volume 7D')}
        </Text>
        { tokenData ? 
          <StyledText bold fontSize="24px">
            ${formatAmount(tokenData.volumeUSDWeek)}
          </StyledText>
          :
          <Skeleton />
        }

        <Text mt="10px" bold color="secondary" fontSize="12px" textTransform="uppercase">
          {t('Transactions 24H')}
        </Text>
        { tokenData ?
          <StyledText bold fontSize="24px">
            {formatAmount(tokenData.txCount, { isInteger: true })}
          </StyledText>
          :
          <Skeleton />
        }
      </Box>
    </StyledCard>
  )
}

export default TokenDataCard