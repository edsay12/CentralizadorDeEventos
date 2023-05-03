import { Image, ImageProps, StyleSheet } from "react-native";
import logo from "../../../assets/logo.png";
import * as S from "./styles";
import { ImgHTMLAttributes } from "react";

type Proptypes = {
  width?: string;
  height?: string;
} & Partial<ImageProps>;

export const Logo = ({
  height = "64px",
  width = "64px",
  ...rest
}: Proptypes) => {
  return (
    <S.LogoImage
    height={height}
    width={width}
    source={logo}
    {...rest}
    ></S.LogoImage>
  );
};
