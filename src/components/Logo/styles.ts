import styled from "styled-components/native";

export const LogoImage = styled.Image<{
  width: number;
  height: number;
}>`
  width: ${({ width, theme }) => theme.metrics.px(width)}px;
  height: ${({ height, theme }) => theme.metrics.px(height)}px;
`;
