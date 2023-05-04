import styled from "styled-components/native";
import { theme } from "../../styles";

export const CustomText = styled.Text<{
  size?: string;
  color?: string;
  font?: string;
}>`
  font-size: ${({ size,theme}) => theme.metrics.px(size) || theme.fonts.size.m}px;
  color: ${({ color,theme }) => color || theme.colors.blue};
  font-family: ${({ font }) => font || theme.fonts.family.roboto.regular};
`;
