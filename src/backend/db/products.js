import { v4 as uuid } from "uuid";
import plasticToy1 from "../../assets/toy4.jpg";
import softToy1 from "../../assets/toy2.jpg";
import hardToy1 from "../../assets/toy5.jpg";
import flexibleToy1 from "../../assets/toy1.jpg"

export const products = [
  {
    _id: uuid(),
    title: "Plastic Toys",
    price: "5000",
    categoryName: "plasticToys",
    includeStock: true,
    image: plasticToy1
  },
  {
    _id: uuid(),
    title: "Plastic Toys",
    price: "4400",
    categoryName: "plasticToys",
    includeStock: false,
    image: plasticToy1
  },
  {
    _id: uuid(),
    title: "Hard Toys",
    price: "6400",
    categoryName: "hardToys",
    includeStock: true,
    image: hardToy1
  },
  {
    _id: uuid(),
    title: "Hard Toys",
    price: "6100",
    categoryName: "hardToys",
    includeStock: false,
    image: hardToy1
  },
  {
    _id: uuid(),
    title: "Soft Toys",
    price: "3100",
    categoryName: "softToys",
    includeStock: true,
    image: softToy1
  },
  {
    _id: uuid(),
    title: "Soft Toys",
    price: "2500",
    categoryName: "softToys",
    includeStock: false,
    image: softToy1
  },
  {
    _id: uuid(),
    title: "Flexible Toys",
    price: "5700",
    categoryName: "flexibleToys",
    includeStock: true,
    image: flexibleToy1
  },
  {
    _id: uuid(),
    title: "Flexible Toys",
    price: "3300",
    categoryName: "flexibleToys",
    includeStock: false,
    image: flexibleToy1
  },
  {
    _id: uuid(),
    title: "Soft Toys",
    price: "9000",
    categoryName: "softToys",
    includeStock: false,
    image: softToy1
  },
];
