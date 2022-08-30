import React from "react";
import { Button as MUIButton, ButtonProps, styled, ThemeProvider } from "@mui/material";
import theme from "../../../theme";
import { height } from "@mui/system";

interface Props extends ButtonProps {
    backgroundColor?: string;
    children: any;
    border?: string;
    height?: string;
    width?: string;
}

const StyledButton = styled(MUIButton)<Props>(({ backgroundColor, height, width, border }) => ({
    backgroundColor: backgroundColor,
    border: border,
    borderRadius: theme.spacing(1),
    padding: `${theme.spacing(0)} ${theme.spacing(4)}`,
    height: height,
    width: width,
    boxShadow: "none",
    textTransform: "none",
    "&:hover": {
        backgroundColor: backgroundColor,
        border: border,
        boxShadow: "none",
    }
}))

const Button = (props: Props) => {
  return (  
    <StyledButton {...props}></StyledButton>
  );
};

export default Button;
