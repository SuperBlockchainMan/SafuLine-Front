import React, { useState } from "react";
import BottomNavItem from "../BottomNavItem";
import StyledBottomNav from "./styles";
import { Box } from "../Box";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import { BottomNavProps } from "./types";
import { NotificationDot } from "../NotificationDot";
import { Overlay } from "../Overlay";

const BottomNav: React.FC<BottomNavProps> = ({ items = [], activeItem = "", activeSubItem = "", ...props }) => {
  const [menuOpenByIndex, setMenuOpenByIndex] = useState({});
  const isBottomMenuOpen = Object.values(menuOpenByIndex).reduce((acc, value) => acc || value, false);
  return (
    <>
      {isBottomMenuOpen && <Overlay />}
      <StyledBottomNav justifyContent="space-around" {...props}>
        {items.map(({ label, items: menuItems, bottoms: bottomItems, href, icon, showOnMobile = true, showItemsOnMobile = true }, index) => {
          const statusColor = menuItems?.find((menuItem) => menuItem.status !== undefined)?.status?.color;
          if (href !== activeItem || !bottomItems) {
            return null
          }
          return (
            bottomItems.map((bottomeItem) => {
              return (
                <BottomNavItem
                  label={bottomeItem.label}
                  iconName={bottomeItem.icon}
                  href={href}
                />
              )
            })
          )
        })}
      </StyledBottomNav>
    </>
  );
};

export default BottomNav;
