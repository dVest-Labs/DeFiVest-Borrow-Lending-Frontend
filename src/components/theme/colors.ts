import { Colors } from "./types";

export const baseColors = {
  failure: "#C62073",
  primary: "#000",
  primaryBright: "#94BEFF",
  primaryDark: "#024ABB",
  secondary: "#20DFDA",
  secondaryDark: "#21c5d9",
  success: "#20DFDA",
  warning: "#FFB237",
  white: "#ffffff",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#F0F6FF",
  backgroundDisabled: "#E9EAEB", // not yet created
  contrast: "#191326",
  dropdown: "#F6F6F6",
  invertedContrast: "#FFFFFF",
  input: "#EFE9F4",
  inputSecondary: "#d6e5ff",
  tertiary: "#EFF4F5",
  tertiaryLight: "#EFF4F5",
  text: "#000",
  textDisabled: "#748db7",
  textSubtle: "#314F81",
  label: "#525563", // "#314F81",
  data: "#314F81",
  headerTitle: "#20DFDA", // "#ddeafd",99dae4
  headerSubtitle: "#d3f5f3", // b4e5ff
  borderColor: "rgba(59, 130, 246, 0.5)",
  secondaryDark: "#20DFDA",
  card: "#FFFFFF",
  tableHeader: "#FFFFFF", // "#A7C8FB",
  gradients: {
    bubblegum: "linear-gradient(119.91deg, #3480F6 36.36%, #0DD8D0 84.22%)",
    buttongum: "linear-gradient(121deg,#3480F6 36.22%,#0DD8D0 90.22%)",
    bubbleYum: "linear-gradient(230.91deg, #3480F6 74.22%, #0DD8D0 90.22%)",
  },
  bubblegum: "linear-gradient(140.91deg, #3480F6 68.36%, #0DD8D0 84.22%)",
  modal: {
    background: "#ffffff",
    color: "#58595B",
    borderColor: "#ffffee",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  // secondary: "#138AF2",
  primary: "white",
  background: "#1c2025",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  dropdown: "#1E1D20",
  invertedContrast: "#1c2025",
  input: "#264773",
  // inputSecondary: "#314F81",
  inputSecondary: "#313640",
  primaryDark: "#138AF2",
  tertiary: "#3F688C",
  tertiaryLight: "#EFF4F5",
  text: "#e6e5e8",
  // textDisabled: "#d0d0e1",
  textDisabled: "#d0d0e15c",
  textSubtle: "#adb0bb",
  label: "#adb0bb",
  data: "#C6D5EB",
  headerTitle: "#b8d3f7",
  headerSubtitle: "#b8d3f7", // #94BEFF",
  borderColor: "#525563", // "#191c1f", // "#0249BBA9",
  secondaryDark: "#21c5d9", // "#20CAC5",
  card: "#282c34",
  tableHeader: "#191b21",
  gradients: {
    bubblegum: "linear-gradient(119.91deg,#024ABBd1 36.36%,#0dd8d0d1 84.22%)", // "linear-gradient(119.91deg,#024ABBd1 36.36%,#0dd8d0d1 84.22%)",
    buttongum: "linear-gradient(140.91deg,#024abbf5 61.36%,#0DD8D0d1 93.22%)", // "linear-gradient(140.91deg, #024ABBd1 68.36%, #0DD8D0d1 84.22%)",
    bubbleYum: "linear-gradient(214.91deg, #024ABB 74.22%, #0DD8D0 90.22%)",
  },
  bubblegum: "linear-gradient(140.91deg, #024ABBd1 68.36%, #0DD8D0d1 84.22%)",
  modal: {
    background: "#282c34",
    color: "#ffffff",
    borderColor: "#ffffff",
  },
};
