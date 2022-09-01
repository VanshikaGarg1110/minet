import { Box, styled, Typography } from "@mui/material";
import React from "react";
import theme from "../../../theme";
import Icon from "../../atoms/icon";
import check from "../../../assets/icons/check.svg";

type CryptoProps = {
    icon?: any;
    crypto?: any;
    value?: any;
    selected?: boolean;
    onClick?: any;
}
const StyledBox = styled(Box)<CryptoProps>(({ selected }) => ({
    border: selected ? `2px solid ${theme.palette.primary.main500}` : "none",
    display: "flex", 
    flexDirection: "column", 
    gap: "12px", 
    alignItems: "center", 
    padding: `${theme.spacing(3)}`,
}))

const CheckBox = styled(Box)<CryptoProps>(({ selected }) => ({
    alignSelf: "flex-end", 
    display: selected ? "" : "none",
}))

const CryptoCard = ({icon, crypto, value, selected, onClick}: CryptoProps) => {
    return (
        <StyledBox selected={selected} onClick={onClick}>
            <CheckBox selected={selected}>
                <Icon src={check}></Icon>
            </CheckBox>
            <Icon src={icon}></Icon>
            <Box>
            <Typography variant="body1" align="center">{crypto}</Typography>
            <Typography variant="caption1" color="${theme.palette.textColor.mediumEmphasis}" align="center">{value}</Typography>
            </Box>
        </StyledBox>
    );
}

export default CryptoCard;