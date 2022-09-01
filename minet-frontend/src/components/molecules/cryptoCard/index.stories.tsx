import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import CryptoCard from ".";
import bitcoin from "../../../assets/icons/bitcoin.svg";
import { Typography } from "@mui/material";
import theme from "../../../theme";

export default {
  title: "Molecules/CryptoCard",
  component: CryptoCard,
} as ComponentMeta<typeof CryptoCard>;

const Template: ComponentStory<typeof CryptoCard> = (args) => {
    return (
        <div style={{width: "159px", height: "156px" }}>
        <CryptoCard {...args}></CryptoCard>
        </div>
    )
}

export const Default = Template.bind({});

Default.args = {
    icon: bitcoin,
    crypto: <Typography variant="body1">Bitcoin</Typography>,
    value: <Typography variant="caption1" color="#7D7D89">$3,406,069.54</Typography>,
    selected: true,
}