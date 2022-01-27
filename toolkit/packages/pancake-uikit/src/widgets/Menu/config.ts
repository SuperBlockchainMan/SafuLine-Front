import { noop } from "lodash";
import { DropdownMenuItems, DropdownMenuItemType } from "../../components/DropdownMenu/types";
import { MenuItemsType } from "../../components/MenuItems/types";
import { LinkStatus } from "./types";

export const status = {
  LIVE: <LinkStatus>{
    text: "LIVE",
    color: "failure",
  },
  SOON: <LinkStatus>{
    text: "SOON",
    color: "warning",
  },
  NEW: <LinkStatus>{
    text: "NEW",
    color: "success",
  },
};

export const links: MenuItemsType[] = [
  {
    label: "Home",
    href: "/",
    icon: "HomeIcon",
    items: [
      {
        label: "Exchange",
        href: "/swap",
      },
      {
        label: "Liquidity",
        href: "/pool",
      },
      {
        label: "Charts",
        href: "/charts",
        iconName: "Chart",
        isMobileOnly: true,
      },
    ],
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
    label: "Swap",
    href: "/swap",
    icon: "SyncAltIcon",
    items: [
      {
        label: "Earn",
        href: "/",
      },
      {
        label: "Yield Farms",
        href: "/",
      },
      {
        label: "Syrup pools",
        href: "/",
      },
    ],
  },
  {
    label: "Tokens",
    href: "/more",
    icon: "TokenIcon",
    items: [
      {
        label: "Info & Analytics",
        href: "/",
      },
      {
        label: "IFO Token Sales",
        href: "/",
        status: status.SOON,
      },
      {
        type: DropdownMenuItemType.DIVIDER,
      },
      {
        label: "NFT Collectibles",
        href: "/",
      },
      {
        label: "Team Leaderboard",
        href: "/",
      },
      {
        type: DropdownMenuItemType.DIVIDER,
      },
      {
        label: "Blog",
        href: "/",
      },
      {
        label: "Docs & Guides",
        href: "/",
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
    ],
  },
];

export const userMenulinks: DropdownMenuItems[] = [
  {
    label: "Wallet",
    onClick: noop,
    type: DropdownMenuItemType.BUTTON,
  },
  {
    label: "Transactions",
    type: DropdownMenuItemType.BUTTON,
  },
  {
    type: DropdownMenuItemType.DIVIDER,
  },
  {
    type: DropdownMenuItemType.BUTTON,
    disabled: true,
    label: "Dashboard",
  },
  {
    type: DropdownMenuItemType.BUTTON,
    disabled: true,
    label: "Portfolio",
  },
  {
    label: "Profile",
    href: "/profile",
  },
  {
    type: DropdownMenuItemType.EXTERNAL_LINK,
    href: "https://pancakeswap.finance",
    label: "Link",
  },
  {
    type: DropdownMenuItemType.DIVIDER,
  },
  {
    type: DropdownMenuItemType.BUTTON,
    onClick: noop,
    label: "Disconnect",
  },
];

export const socials = [
  {
    label: "Audit",
    icon: "AuditIcon",
    href: "https://www.certik.com/pancakeswap/",
  },
  {
    label: "Telegram",
    icon: "TelegramIcon",
    href: "https://t.me/pancakeswap",
  },
  {
    label: "Twitter",
    icon: "TwitterIcon",
    href: "https://twitter.com/pancakeswap",
  },
  {
    label: "Reddit",
    icon: "RedditIcon",
    href: "https://www.reddit.com/r/pancakeswap/",
  },
];

export const MENU_HEIGHT = 56;
export const MENU_ENTRY_HEIGHT = 48;
export const MOBILE_MENU_HEIGHT = 44;
export const SIDEBAR_WIDTH_FULL = 220;
export const SIDEBAR_WIDTH_REDUCED = 56;
export const TOP_BANNER_HEIGHT = 70;
export const TOP_BANNER_HEIGHT_MOBILE = 84;
