import styled from "styled-components/native";
import { theme } from "../../styles";

export const ViewContainer = styled.View`
  flex: 1;
  gap: ${({ theme }) => (theme.metrics.px(20))}px;
  color: ${({ theme }) => theme.colors.white};
  background-color: "#001D3B";
  align-items: center;
  justify-content: center;
`;
