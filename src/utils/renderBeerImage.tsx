import { Corona } from "@/assets/svg/Corona";
import { ClubColombia } from "@/assets/svg/ClubColombia";
import { Quilmes } from "@/assets/svg/Quilmes";

type ImageProp = {
  name: string;
  size?: { width: string; height: string };
};

export const renderBeerImage = ({ name, size }: ImageProp) => {
  switch (name) {
    case "Corona":
      return <Corona width={size?.width} height={size?.height} />;
    case "Quilmes":
      return <Quilmes width={size?.width} height={size?.height} />;
    case "Club Colombia":
      return <ClubColombia width={size?.width} height={size?.height} />;
    default:
      return null;
  }
};
