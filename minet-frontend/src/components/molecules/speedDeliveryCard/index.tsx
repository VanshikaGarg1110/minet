import { Box, Typography } from "@mui/material";
import React from "react";
import Icon from "../../atoms/icon";
import arrowDown from "../../../assets/icons/arrowDown.svg";
import truck from "../../../assets/icons/truck.svg";
import theme from "../../../theme";

type SpeedDeliveryProps = {
    time?: string;
    fees?: string;
}

const SpeedDeliveryCard = ({ time, fees }: SpeedDeliveryProps) => {
    return (
        <Box sx={{border: `1px solid ${theme.palette.greyColors.main100}`, display: "flex", flexDirection: "column", padding: `${theme.spacing(6)}`, gap: `${theme.spacing(3)}`}}>
            <Typography variant="body1">Select speed delivery</Typography>
            <Box sx={{border: `1px solid ${theme.palette.greyColors.main100}`, display: "flex", flexDirection: "row", justifyContent: "space-between", padding: `${theme.spacing(4)}`, alignItems: "center"}}>
                <Icon src={truck}></Icon>
                <Box sx={{ml: `${theme.spacing(-90)}`}}>
                <Typography variant="body1">Instant : {time}</Typography>
                <Typography variant="caption1">Transaction fees : {fees}</Typography>
                </Box>
                <Icon src={arrowDown}></Icon>
            </Box>
        </Box>
    );
}

export default SpeedDeliveryCard;