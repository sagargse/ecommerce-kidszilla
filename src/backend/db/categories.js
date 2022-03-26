import { v4 as uuid } from "uuid";
import toy2 from "../../assets/toy2.jpg";
import toy5 from "../../assets/toy5.jpg";
import toy1 from "../../assets/toy1.jpg";
import toy4 from "../../assets/toy4.jpg";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Soft Toys",
    image: toy2,
  },
  {
    _id: uuid(),
    categoryName: "Hard Toys",
    image: toy5,
  },
  {
    _id: uuid(),
    categoryName: "Flexible Toys",
    image: toy1,
  },
  {
    _id: uuid(),
    categoryName: "Plastic Toys",
    image: toy4,
  },
];
