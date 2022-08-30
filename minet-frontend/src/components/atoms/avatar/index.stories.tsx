import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Avatar from ".";
import avatarImage from "../../../assets/icons/avatarImage.svg";

export default {
  title: "Atoms/Avatar",
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => {
    return (
        <Avatar {...args}></Avatar>
    )
}

export const Default = Template.bind({});

Default.args = {
    src: avatarImage, 
    alt: "avatarImage",
}