import styled from "styled-components/native";

export const LogoImage = styled.Image<{
  width: string;
  height: string;
}>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;
