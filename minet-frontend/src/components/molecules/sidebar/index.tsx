import { Box } from "@mui/material";
import React from "react";
import theme from "../../../theme";
import Icon from "../../atoms/icon";

type SidebarProps = {
    list: any;
}

const Sidebar = ({ list }: SidebarProps) => {
    return (
        <Box sx={{display: "flex", flexDirection: "column", alignItems: "flex-start", padding: `${theme.spacing(6)}`, gap: `${theme.spacing(18)}` }}>
            {list.map((item: any, index: any) => {
                return (
                    <Icon src={item.icon}></Icon>
                );
            })}
        </Box>
    )
}

export default Sidebar;