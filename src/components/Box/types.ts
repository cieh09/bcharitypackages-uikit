import { HTMLAttributes } from "react";
import { BorderProps,BackgroundProps, FlexboxProps, LayoutProps,
  PositionProps,
  SpaceProps,
  GridProps as _GridProps,
} from "styled-components";


export interface BoxProps
  extends
    BorderProps,
    LayoutProps,
    PositionProps,
    SpaceProps,
    HTMLAttributes<HTMLDivElement>, 
    BackgroundProps {}

export interface FlexProps extends BoxProps, FlexboxProps {}

export interface GridProps extends FlexProps, _GridProps {}
