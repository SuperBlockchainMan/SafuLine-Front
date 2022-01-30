import React from "react";
import { BNBPrice, BNBPriceProps } from ".";
import { Flex } from "../Box";

export default {
  title: "Components/BNBPrice",
  component: CakePrice,
};

const Template: React.FC<BNBPriceProps> = ({ ...args }) => {
  return (
    <Flex p="10px">
      <BNBPrice {...args} />
    </Flex>
  );
};

export const Default = Template.bind({});
Default.args = {
  bnbPriceUsd: 20.0,
};
