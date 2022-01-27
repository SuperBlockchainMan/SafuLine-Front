import { MenuItemsType, DropdownMenuItemType, menuStatus } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'
import { nftsBaseUrl } from 'views/Nft/market/constants'

export type ConfigMenuItemsType = MenuItemsType & { hideSubNav?: boolean }

const config: (t: ContextApi['t']) => ConfigMenuItemsType[] = (t) => [
  {
    label: t('Home'),
    icon: 'HomeIcon',
    href: '/',
    showItemsOnMobile: false,
    items: [],
  },
  {
    label: t('Swap'),
    href: '/swap',
    icon: 'SyncAltIcon',
    items: [],
    bottoms: [
      {
        label: "Chart",
        icon: "Chart",
      },
      {
        label: "Liquidity",
        icon: "Earn",
      },
      {
        label: "Transactions",
        icon: "Trade",
      },
    ],
  },
  {
    label: "Tokens",
    href: "/more",
    icon: "TokenIcon",
    items: [],
  },
]

export default config
