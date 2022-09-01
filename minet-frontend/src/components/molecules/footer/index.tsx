import { Box, Typography } from "@mui/material";
import React from "react";
import theme from "../../../theme";
import Icon from "../../atoms/icon";
import arrowDown from "../../../assets/icons/arrowDown.svg";
import Button from "../../atoms/button";

type FooterProps = {
    list: any;
}

const Footer = ({ list }: FooterProps) => {
    return (
        <Box sx={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
            <Box sx={{display: "flex", flexDirection: "row", gap: `${theme.spacing(6)}`}}>
                <Box sx={{display: "flex", flexDirection: "row", gap: `${theme.spacing(6)}`}}>
                    {list.map((item: any, key: any) => {
                        return (
                            <Typography variant="body2" color={theme.palette.primary.main500}>{item.text}</Typography>
                        )
                    })}
                </Box>
                <Box>
                    <Typography variant="body2" color={theme.palette.textColor.highEmphasis}>@ 2021 Minet</Typography>
                </Box>
            </Box>
            <Box sx={{display: "flex", flexDirection: "row", gap: `${theme.spacing(4)}`}}>
                <Box sx={{display: "flex", flexDirection: "row", border: `1px solid ${theme.palette.greyColors.main100}`, justifyContent: "space-between", alignItems: "center", padding: "4px 12px", gap: "145px"}}>
                    <Typography variant="body2" color={theme.palette.textColor.highEmphasis}>English</Typography>
                    <Icon src={arrowDown}></Icon>
                </Box>
                <Box>
                <Button 
                children={<Typography variant="button" color="#0052FF">NEED HELP</Typography>}
                variant="outlined"
                border={`1px solid ${theme.palette.primary.main500}`}></Button>
                </Box>
            </Box>
        </Box>
    )
}

export default Footer;