import styled from "styled-components/native";
import { theme } from "../../styles";

// ganbiarinha que deve ser retirada depois
type ThemeColors = {
  blue: string;
  red: string;
  white: string;
};

theme.colors;
type PropTypes = {
  dir?: string;
  color?: keyof ThemeColors;
  align?: string;
  justify?: string;
  w?: string;
  h?:string
};

export const Container = styled.View<PropTypes>`
  display: flex;
  flex-direction: ${({ dir }) => dir || "column"};

  gap: ${({ theme }) => theme.metrics.px(20) || 0}px;

  background-color: ${({ color, theme }) => theme.colors[color || "white"]};
  align-items: ${({ align }) => align || "flex-start"};
  justify-content: ${({ justify }) => justify || "flex-start"};
  width: ${({ theme, w }) => (w ? `${theme.metrics.px(w)}px` : "100%")};
  height: ${({ theme, h }) => (h ? `${theme.metrics.px(h)}px` : "100%")};
`;
