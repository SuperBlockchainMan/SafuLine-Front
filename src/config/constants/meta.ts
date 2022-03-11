import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'SafuLine',
  description: 'SafuLine',
  image: 'https://safuline.finance/logo.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  return {
    title: `${t('SafuLine')}`,
  }
}
