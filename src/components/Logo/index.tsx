import { Image, ImageProps, StyleSheet } from "react-native";
import logo from "../../../assets/logo.png";
import * as S from "./styles";
import { ImgHTMLAttributes } from "react";

type Proptypes = {
  width?: number;
  height?: number;
} & Partial<ImageProps>;

export const Logo = ({ height = 64, width = 64, ...rest }: Proptypes) => {
  return (
    <S.LogoImage
      height={height}
      width={width}
      source={logo}
      {...rest}
    ></S.LogoImage>
  );
};
