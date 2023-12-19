import color from "./color";

const common = {
  nameColor: color.gray[900],
  authorColor: color.gray[700],
  cardMainColor: color.purple[200],
  backgroundColor: {
    beige: color.orange[200],
    purple: color.purple[200],
    blue: color.blue[200],
    green: color.green[200],
  },
  button: {
    enabled: color.purple[600],
    disabled: color.gray[300],
    hover: color.purple[700],
    pressed: color.purple[800],
    focus: color.purple[900],
  },
  outline: {
    enabled: color.gray[300],
    focus: color.gray[500],
  },
};

export const theme = {
  light: {
    ...common,
    display: "white",
    header: color.white,
    logo: "#4a494f",
    fontColor: color.gray[900],
    subFontColor: color.gray[500],
    border: color.gray[200],
  },
  dark: {
    ...common,
    header: "#303134",
    display: "#202124",
    logo: color.white,
    fontColor: color.white,
    subFontColor: color.blue[500],
    border: "#4F5256",
  },
};
