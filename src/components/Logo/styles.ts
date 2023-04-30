import styled from "styled-components/native";

export const LogoImage = styled.Image.attrs(({}) => {})`
  width: ${({ width }) => width || "64px"};
  height: ${({ height }) => height || "64px"};
`;
