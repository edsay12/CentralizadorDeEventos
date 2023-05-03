import { ActivityIndicator } from "react-native";

type PropTypes = {
  isLoading?: boolean;
  size: "small" | "large";
  color: string;
};

export const Loading = ({ isLoading = false, color, size }: PropTypes) => {
  return (
    <>
      {isLoading && <ActivityIndicator size={size} color={color} />}
      {!isLoading && <></>}
    </>
  );
};
