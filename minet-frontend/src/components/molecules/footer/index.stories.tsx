import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Footer from ".";
import { FooterList } from "./footerList";

export default {
  title: "Molecules/Footer",
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => {
    return (
        <div>
        <Footer {...args}></Footer>
        </div>
    )
}

export const Default = Template.bind({});

Default.args = {
    list: FooterList,
}