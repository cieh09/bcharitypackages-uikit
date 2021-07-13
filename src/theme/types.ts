import { AlertTheme } from "@bcharitypackages/uikit/src/components/Alert/types";
import { CardTheme } from "@bcharitypackages/uikit/src/components/Card/types";
import { PancakeToggleTheme } from "@bcharitypackages/uikit/src/components/PancakeToggle/types";
import { RadioTheme } from "@bcharitypackages/uikit/src/components/Radio/types";
import { ToggleTheme } from "@bcharitypackages/uikit/src/components/Toggle/types";
import { TooltipTheme } from "@bcharitypackages/uikit/src/components/Tooltip/types";
import { NavTheme } from "@bcharitypackages/uikit/src/widgets/Menu/types";
import { ModalTheme } from "@bcharitypackages/uikit/src/widgets/Modal/types";


export type Breakpoints = string[];

export type MediaQueries = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  nav: string;
};

export type Spacing = number[];

export type Radii = {
  small: string;
  default: string;
  card: string;
  circle: string;
};

export type Shadows = {
  level1: string;
  active: string;
  success: string;
  warning: string;
  focus: string;
  inset: string;
};

export type Gradients = {
  bubblegum: string;
  inverseBubblegum: string;
  cardHeader: string;
  blue: string;
  violet: string;
  violetAlt: string;
  gold: string;
};

export type Colors = {
  primary: string;
  primaryBright: string;
  primaryDark: string;
  secondary: string;
  tertiary: string;
  success: string;
  failure: string;
  warning: string;
  cardBorder: string;
  contrast: string;
  dropdown: string;
  dropdownDeep: string;
  invertedContrast: string;
  input: string;
  inputSecondary: string;
  background: string;
  backgroundDisabled: string;
  backgroundAlt: string;
  text: string;
  textDisabled: string;
  textSubtle: string;
  disabled: string;

  // Gradients
  gradients: Gradients;

  // Additional colors
  binance: string;
  overlay: string;
};

export type ZIndices = {
  dropdown: number;
  modal: number;
};

export interface PancakeTheme {
  siteWidth?: number;
  isDark?: boolean;
  alert?: AlertTheme;
  colors?: Colors;
  card?: CardTheme;
  nav?: NavTheme;
  modal?: ModalTheme;
  pancakeToggle?: PancakeToggleTheme;
  radio?: RadioTheme;
  toggle?: ToggleTheme;
  tooltip?: TooltipTheme;
  breakpoints?: Breakpoints;
  mediaQueries?: MediaQueries;
  spacing?: Spacing;
  shadows?: Shadows;
  radii?: Radii;
  zIndices?: ZIndices;
};
