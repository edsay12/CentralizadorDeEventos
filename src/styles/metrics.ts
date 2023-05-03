//Dimentios:  pega o h e w da tela
// PiexelRatio : pega a prorporção de pixels da tela do celular
import { Dimensions, PixelRatio } from "react-native";

const { height, width } = Dimensions.get("window");
const defaultWidth = 375;

// traduz o px para garantir que em qualquer tela o px seja o correto
const px = (valuePx: any) => {
  const widthPercent = (valuePx / defaultWidth) * 100;
  const screenPixel = PixelRatio.roundToNearestPixel(
    (width * widthPercent) / 100
  );
  return screenPixel;
};

export const metrics = {
  px,
};
