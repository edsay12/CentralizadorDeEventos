import "styled-components";
import { theme } from "./src/styles/theme";


type CustomTheme = typeof theme;

declare module "styled-components" {
  interface DefaultTheme extends CustomTheme {}
}
