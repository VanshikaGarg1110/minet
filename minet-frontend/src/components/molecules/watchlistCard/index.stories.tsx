import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import WatchlistCard from ".";
import graph1 from "../../../assets/images/graph1.svg";
import bitcoin from "../../../assets/icons/bitcoin.svg";

export default {
  title: "Molecules/WatchlistCard",
  component: WatchlistCard,
} as ComponentMeta<typeof WatchlistCard>;

const Template: ComponentStory<typeof WatchlistCard> = (args) => {
    return (
        <div style={{width: "385px"}}>
        <WatchlistCard {...args}></WatchlistCard>
        </div>
    )
}

export const Default = Template.bind({});

Default.args = {
    image: graph1,
    icon: bitcoin,
    crypto: "Bitcoin",
    value: "$3,00,439.93"
}