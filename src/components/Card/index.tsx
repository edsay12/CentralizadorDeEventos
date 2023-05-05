import { CardContainer, CardImage } from "./style";

type PropTypes = {
  image_url: string;
};
export const Card = ({ image_url }: PropTypes) => {
  return (
    <CardContainer>
      <CardImage
        source={{
          uri: image_url,
        }}
      ></CardImage>
    </CardContainer>
  );
};
