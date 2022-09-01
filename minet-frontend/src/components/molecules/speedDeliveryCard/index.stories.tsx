import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SpeedDeliveryCard from ".";

export default {
  title: "Molecules/SpeedDeliveryCard",
  component: SpeedDeliveryCard,
} as ComponentMeta<typeof SpeedDeliveryCard>;

const Template: ComponentStory<typeof SpeedDeliveryCard> = (args) => {
    return (
        <div style={{width: "680px", height: "156px"}}>
        <SpeedDeliveryCard {...args}></SpeedDeliveryCard>
        </div>
    )
}

export const Default = Template.bind({});

Default.args = {
    time: "2-5 min",
    fees: "0.001 BTC",
}