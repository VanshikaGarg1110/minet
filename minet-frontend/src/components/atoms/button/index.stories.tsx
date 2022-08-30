import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from ".";
import { Typography } from "@mui/material";
import theme from "../../../theme";

export default {
  title: "Atoms/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
    return (
        <Button {...args}></Button>
    )
}

export const Default = Template.bind({});
export const Secondary = Template.bind({});

Default.args = {
    variant: "contained",
    children: <Typography variant="button" color="#FFFFFF">SELL</Typography>,
    backgroundColor: theme.palette.semantic.warning300,
    height: "42px",
    width: "120px"
}

Secondary.args = {
    variant: "outlined",
    children: <Typography variant="button" color="#0052FF">NEED HELP</Typography>,
    border: `1px solid ${theme.palette.primary.main500}`,
    height: "42px",
}