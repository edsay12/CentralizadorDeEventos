import * as S from "./style";
import * as React from "react";
type PropTypes = {
  children: React.ReactNode;
  size?: string;
  color?: string;
  font?:string
};

export const Text = ({ children, color = "", size = "" ,font='Roboto_100Thin' }: PropTypes) => {
  return (
    <S.CustomText size={size} color={color} font={font}>
      {children}
    </S.CustomText>
  );
};
