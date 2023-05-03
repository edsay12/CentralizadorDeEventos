import styled from "styled-components/native";

export const CustomText = styled.Text<{
  size: string;
  color: string;
  font: string;
}>`
  font-size: ${({ size,theme}) => size || theme.fonts.size.m};
  color: ${({ color,theme }) => color || theme.colors.blue};
  font-family: ${({ font }) => font};
`;
