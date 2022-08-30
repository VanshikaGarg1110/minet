import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Icon from ".";
import bitcoin from "../../../assets/icons/bitcoin.svg";

export default {
  title: "Atoms/Icon",
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => {
    return (
        <Icon {...args}></Icon>
    )
}

export const Default = Template.bind({});

Default.args = {
    src: bitcoin
}