import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Image from ".";
import graph1 from "../../../assets/images/graph1.svg";

export default {
  title: "Atoms/Image",
  component: Image,
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => {
    return (
        <Image {...args}></Image>
    )
}

export const Default = Template.bind({});

Default.args = {
  src: graph1, 
  alt: "graph1",
}
