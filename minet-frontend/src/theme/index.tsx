import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    heading4: React.CSSProperties;
    heading6: React.CSSProperties;
    caption1: React.CSSProperties;
    caption2: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    heading4: React.CSSProperties;
    heading6: React.CSSProperties;
    caption1: React.CSSProperties;
    caption2: React.CSSProperties;
  }

  interface Palette {
    semantic: Palette["primary"];
    greyColors: Palette["primary"];
    textColor: Palette["primary"];
  }

  interface PaletteOptions {
    semantic?: PaletteOptions["primary"];
    greyColors?: PaletteOptions["primary"];
    textColor?: PaletteOptions["primary"];
  }

  interface PaletteColor {
    main900?: string;
    main700?: string;
    main500?: string;
    main300?: string;
    main100?: string;
    highEmphasis?: string;
    mediumEmphasis?: string;
    lowEmphasis?: string;
    success100?:string;
    success500?:string;
    warning100?:string;
    warning300?:string;
    error100?:string;
    error500?:string;
  }

  interface SimplePaletteColorOptions {
    main900?: string;
    main700?: string;
    main500?: string;
    main300?: string;
    main100?: string;
    highEmphasis?: string;
    mediumEmphasis?: string;
    lowEmphasis?: string;
    success100?:string;
    success500?:string;
    warning100?:string;
    warning300?:string;
    error100?:string;
    error500?:string;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    heading4: true;
    heading6: true;
    caption1: true;
    caption2: true;
  }
}

const theme = createTheme({
  spacing: 4,
  typography: {
    fontFamily: "Graphik",
    heading4: {
      fontSize: "40px",
      fontWeight: 500,
      lineHeight: "54px",
      textTransform: "none",
    },

    heading6: {
      fontSize: "24px",
      fontWeight: 400,
      lineHeight: "34px",
      textTransform: "none",
    },

    subtitle1: {
      fontSize: "20px",
      fontWeight: 500,
      lineHeight: "28px",
      textTransform: "none",
    },

    subtitle2: {
      fontSize: "20px",
      fontWeight: 400,
      lineHeight: "28px",
      textTransform: "none",
    },

    body1: {
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: "22px",
      textTransform: "none",
    },

    body2: {
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "22px",
      textTransform: "none",
    },

    caption1: {
      fontSize: "14px",
      fontWeight: 500,
      lineHeight: "16px",
      textTransform: "none",
    },

    caption2: {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "16px",
      textTransform: "none",
    },

    button: {
      fontSize: "14px",
      fontWeight: "500",
      lineHeight: "42px",
      textTransform: "none",
    },

    overline: {
      fontSize: "12px",
      fontWeight: "400",
      lineHeight: "14px",
      textTransform: "none",
    }
  },

  palette: {
    primary: {
      main: "#FAFCFF",
      main100: "#FAFCFF",
      main300: "#66A1FF",
      main500: "#0052FF",
      main700: "#002EB7",
      main900: "#00177A",
    },

    textColor: {
      main: "#000000",
      highEmphasis: "#343446",
      mediumEmphasis: "#7D7D89",
      lowEmphasis: "#B2B2B9",
    },

    greyColors: {
      main: "#F2F2F7",
      main100: "#ECECF7",
      main300: "#B4B4CF",
      main500: "#4B4B60",
      main700: "#252545",
      main900: "#0E0E2E",
    },

    semantic: {
      main: "#FFFFFF",
      success100: "#E9F7EC",
      success500: "#46BF31",
      warning100: "#FFF6ED",
      warning300: "#FFA74F",
      error100: "#F3E6EB",
      error500: "#B71A33",
    },
  },
});

export default theme;
