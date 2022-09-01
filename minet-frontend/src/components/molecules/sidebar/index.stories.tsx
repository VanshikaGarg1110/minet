import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Sidebar from ".";
import { sidebarList } from "./sidebarList";

export default {
  title: "Molecules/Sidebar",
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => {
    return (
        <div>
        <Sidebar {...args}></Sidebar>
        </div>
    )
}

export const Default = Template.bind({});

Default.args = {
    list: sidebarList,
}