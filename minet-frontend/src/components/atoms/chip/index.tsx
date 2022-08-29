import React from 'react';
import Chip, { ChipProps } from '@mui/material/Chip';
import { styled, Typography } from '@mui/material';

type Props = {
  text?: string;
  backgroundColor?: string;
  border?: string;
  padding?: string;
  borderRadius?: string;
  fontColor?: string;
  textVariant?: any;
  selected?: boolean;
} 

const StyledChip = styled(Chip)<Props>(({ backgroundColor,  border, padding, borderRadius }) => ({
    backgroundColor: backgroundColor,
    border: border,
    padding: padding,
    borderRadius: borderRadius,
}))

const StyledTypography = styled(Typography)<Props>(({ fontColor, textVariant }) => ({
    variant: textVariant,
    color: fontColor,
}))

const Chips = ({ text, selected, backgroundColor, border, borderRadius, padding, fontColor, textVariant }: Props) => {
  return (
    <StyledChip 
        label={<StyledTypography fontColor={fontColor} textVariant={textVariant}>{text}</StyledTypography>} 
        backgroundColor={backgroundColor} 
        border={selected ? border : ""} 
        padding={padding} 
        borderRadius={borderRadius}/>
  );
};

export default Chips;
