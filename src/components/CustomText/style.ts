import styled from "styled-components/native";

export const CustomText = styled.Text<{ size: string; color: string }>`
  font-size: ${({ size }) => size || "16px"};
  color: ${({ color }) => color || "white"};
`;
