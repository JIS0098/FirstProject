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
  loading: color.purple[600],
};

export const theme = {
  light: {
    ...common,
    header: color.white,
    display: "white",
    logo: "#4a494f",
    fontColor: color.gray[900],
    subFontColor: color.gray[500],
    border: color.gray[200],
    card: {
      backgroundColor: color.white,
      color: color.black,
      border: "#eeeeee",
    },
    emoji: {
      backgroundColor: "rgba(0, 0, 0, 0.54)", // 왜 안됨..
      color: "#2b2b2b",
    },
    input: {
      border: color.gray[200],
      backgroundColor: color.white,
      textColor: color.black,
    },
  },
  dark: {
    ...common,
    header: color.shark[100],
    display: "#202124",
    logo: color.white,
    fontColor: color.white,
    subFontColor: color.blue[500],
    border: "#4F5256",
    card: {
      backgroundColor: color.shark[100],
      color: color.white,
      border: "#4F5256",
    },
    emoji: {
      backgroundColor: "rgba(255, 255, 255, 0.54)",
      color: color.white,
    },
    input: {
      border: "#4f5256",
      backgroundColor: color.shark[100],
      textColor: color.white,
    },
  },
};
