import React from 'react'
import styled from 'styled-components'
import { Button, Heading, Text, LogoIcon } from '@pancakeswap/uikit'
import { Link } from 'react-router-dom'
import Page from 'components/Layout/Page'
import { useTranslation } from 'contexts/Localization'

const StyledComingSoon = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 64px);
  justify-content: center;
`

const ComingSoon = () => {
  const { t } = useTranslation()

  return (
    <Page>
      <StyledComingSoon>
        <LogoIcon width="164px" mb="8px" />
        <Text fontSize="32px" mb="12px">{t('Coming Soon!')}</Text>
      </StyledComingSoon>
    </Page>
  )
}

export default ComingSoon
