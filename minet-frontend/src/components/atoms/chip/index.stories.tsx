import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Chips from ".";
import theme from "../../../theme/index";

export default {
  title: "Atoms/Chips",
  component: Chips,
} as ComponentMeta<typeof Chips>;

const Template: ComponentStory<typeof Chips> = (args) => {
    return (
        <Chips {...args}></Chips>
    )
}

export const Default = Template.bind({});
export const Secondary = Template.bind({});

Default.args = {
    text: "Bitcoin",
    backgroundColor: `${theme.palette.semantic.warning100}`,
    border: `2px solid ${theme.palette.semantic.warning300}`,
    padding: "8px 16px",
    borderRadius: "4px",
    fontColor: `${theme.palette.textColor.highEmphasis}`,
    textVariant: theme.typography.body1,
    selected: false,
}

Secondary.args = {
    text: "Purchased",
    backgroundColor: `${theme.palette.greyColors.main100}`,
    padding: "2px 8px",
    borderRadius: "100px",
    fontColor: `${theme.palette.greyColors.main500}`,
    textVariant: theme.typography.caption2,
}
