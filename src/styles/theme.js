import color from "./color";

export const theme = {
  default: {
    button: {
      primary: {
        enabled: color.purple[600],
        disabled: color.gray[300],
        hover: color.purple[700],
        pressed: color.purple[800],
        focus: color.purple[900],
      },
      secondary: {
        enabled: "",
        disabled: "",
        hover: "",
        pressed: "",
        focus: "",
      },
    },
  },
  years: {
    button: {
      primary: {
        enabled: color.years[600],
        disabled: color.years[300],
        hover: color.years[700],
        pressed: color.years[800],
        focus: color.years[900],
      },
    },
  },
};
