import * as S from "./style";
import * as React from "react";
type PropTypes = {
  children: React.ReactNode;
  size?: string;
  color?: string;
};

export const Text = ({ children, color='', size='' }: PropTypes) => {
  return (
    <S.CustomText size={size} color={color}>
      {children}
    </S.CustomText>
  );
};
