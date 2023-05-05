import { BannerContainer, BannerGradient, BannerImage } from "./style";

export const Banner = () => {
  return (
    <>
      <BannerContainer>
        <BannerImage
          source={{
            uri: "https://th.bing.com/th/id/OIP.6lUcLR57NjVPn5ab85IolwHaKR?pid=ImgDet&rs=1",
          }}
        >
          <BannerGradient colors={["black", "transparent", "black"]} />
        </BannerImage>
      </BannerContainer>
    </>
  );
};
