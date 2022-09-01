import { Box, styled, Typography } from "@mui/material";
import React from "react";
import theme from "../../../theme";
import Icon from "../../atoms/icon";
import Image from "../../atoms/image";

type WatchlistProps = {
    icon: string;
    image?: string;
    crypto?: string;
    value?: string;
    width?: string;
}

const StyledBox = styled(Box)(() => ({
    display: "flex", 
    gap: `${theme.spacing(2.5)}`, 
    padding: `${theme.spacing(6)}`, 
    border: `1px solid ${theme.palette.greyColors.main100}`, 
    borderRadius: "4px",
}))

const WatchlistCard = ({icon, image, crypto, value}: WatchlistProps) => {
    return (
        <StyledBox>
            <Icon src={icon}></Icon>
            <Box>
                <Typography variant="body1">{crypto}</Typography>
                <Typography variant="body1">{value}</Typography>
            </Box>
            <Image src={image} alt="image"></Image>
        </StyledBox>
    );
}

export default WatchlistCard;