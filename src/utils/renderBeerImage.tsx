import { Corona } from "@/assets/svg/Corona";
import { ClubColombia } from "@/assets/svg/ClubColombia";
import { Quilmes } from "@/assets/svg/Quilmes";

export const renderBeerImage = (name: string) => {
  switch (name) {
    case "Corona":
      return <Corona />;
    case "Quilmes":
      return <Quilmes />;
    case "Club Colombia":
      return <ClubColombia />;
    default:
      return null;
  }
};
