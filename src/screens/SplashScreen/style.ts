import styled from "styled-components/native";
import { theme } from "../../styles";

export const ViewContainer = styled.View`
  flex: 1;
  gap: 20px;
  color: ${({ theme }) => theme.colors.white};
  background-color: "#001D3B";
  align-items: center;
  justify-content: center;
`;
