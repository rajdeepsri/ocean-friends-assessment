import mobile from "../assets/mobile.png";
import house from "../assets/house.png";
import internet from "../assets/internet.png";
import utility from "../assets/utility.png";
import traffic from "../assets/traffic.png";

import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card1_back from "../assets/card1_back.png";
import card1_rotated from "../assets/card1_rotated.png";
import card2_rotated from "../assets/card2_rotated.png";

import car from "../assets/car.png";
import music from "../assets/music.png";
import arrow from "../assets/arrow.png";

export const cardsData = [
  {
    variant: "primary",
    number: "4642 3489 9867 7632",
    bank: "Universal Bank",
    imgUrl: card1,
    backImg: card1_back,
    rotatedImg: card1_rotated,
  },
  {
    variant: "secondary",
    number: "5489 7452 5726 9827",
    bank: "Universal Bank",
    imgUrl: card2,
    backImg: card1_back,
    rotatedImg: card2_rotated,
  },
];

export const catalogueData = [
  {
    title: "Mobile",
    debt: "34.00",
    icon: mobile,
  },
  {
    title: "Internet and TV",
    debt: "21.00",
    icon: internet,
  },
  {
    title: "Traffic fines",
    debt: "1,221.00",
    icon: traffic,
  },
  {
    title: "Housing Services",
    debt: "0.00",
    icon: house,
  },
  {
    title: "Utility payment",
    debt: "442.00",
    icon: utility,
  },
];

export const historyData = [
  {
    id: "1",
    title: "Card to card",
    subtitle: "Maria",
    amount: "143.00",
    isCredit: true,
    icon: arrow,
  },
  {
    id: "2",
    title: "Apple Music",
    subtitle: "Online",
    amount: "467.00",
    isCredit: false,
    icon: music,
  },
  {
    id: "3",
    title: "Uber",
    subtitle: "Service",
    amount: "467.00",
    isCredit: false,
    icon: car,
  },
  {
    id: "4",
    title: "Uber",
    subtitle: "Service",
    amount: "43.00",
    isCredit: false,
    icon: car,
  },
  {
    id: "5",
    title: "Card to card",
    subtitle: "Service",
    amount: "2467.00",
    isCredit: false,
    icon: arrow,
  },
];
