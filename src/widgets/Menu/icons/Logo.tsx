import React from "react";
import Svg from "../../../components/Svg/Svg";
import ReactLogo from '../../../resources/Untitled-4.svg'
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <img src ={ReactLogo} alt="logo" />
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
