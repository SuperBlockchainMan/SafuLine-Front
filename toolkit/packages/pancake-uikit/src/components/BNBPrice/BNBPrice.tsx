import React from "react";
import styled from "styled-components";
import Binance from "../Svg/Icons/Binance";
import Text from "../Text/Text";
import Skeleton from "../Skeleton/Skeleton";
import { Colors } from "../../theme";

export interface Props {
  color?: keyof Colors;
  bnbPriceUsd?: number;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const BNBPrice: React.FC<Props> = ({ bnbPriceUsd, color = "textSubtle" }) => {
  return bnbPriceUsd ? (
    <PriceLink
      href="https://pancakeswap.finance/swap"
      target="_blank"
    >
      <Binance width="24px" mr="8px" />
      <Text color={color} bold>{`$${bnbPriceUsd.toFixed(3)}`}</Text>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(BNBPrice);
