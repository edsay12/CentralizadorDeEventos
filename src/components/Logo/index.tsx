import { Image, StyleSheet } from "react-native";
import logo from "../../../assets/logo.png";
import * as S from "./styles";

type Proptypes = {
  width?: string;
  height?: string;
};

export const Logo = ({ height, width }: Proptypes) => {
  return (
    <S.LogoImage source={logo} height={height} width={width}></S.LogoImage>
  );
};
