import { Card } from "../Card";
import { CustomText } from "../CustomText/style";
import { FlatList } from "react-native";

const fakeData = [
  {
    id: 0,
    image_url:
      "https://th.bing.com/th/id/OIP.Qc2cOtwWmXJAhuR-y97WpgHaHa?pid=ImgDet&rs=1",
  },
  {
    id: 1,
    image_url:
      "https://i.pinimg.com/736x/47/1b/d8/471bd8921255aca31e0e484c8ea48ced.jpg",
  },
  {
    id: 2,
    image_url:
      "https://s4.anilist.co/file/anilistcdn/character/large/b137810-x5JEOQTuxd86.png",
  },
  {
    id: 3,
    image_url:
      "https://th.bing.com/th/id/R.0a7fff109f3e5614896777a448ccb827?rik=109niSGyF13s8A&pid=ImgRaw&r=0",
  },
  {
    id: 4,
    image_url:
      "https://th.bing.com/th/id/R.a0c129d3a1ac42fed334d816f3302df6?rik=ae3e6VI6vxTtrQ&pid=ImgRaw&r=0",
  },
];


export const CardList = () => {
  return (
    <FlatList
      horizontal
      data={fakeData}
      renderItem={({ item }) => <Card image_url={item.image_url} key={item.id} />}
    />
  );
};
