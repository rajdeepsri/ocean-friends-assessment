import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import card1 from "../assets/card1.png";
import dp from "../assets/dp.png";
import card2 from "../assets/card2.png";
import card1_back from "../assets/card1_back.png";
import card1_rotated from "../assets/card1_rotated.png";
import card2_rotated from "../assets/card2_rotated.png";
import { useState } from "react";
import CardDetails from "../components/CardDetails";

const cards = [
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

const Home = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const handleCardClick = (card) => setSelectedCard(card);
  const clearCardSelection = () => setSelectedCard(null);

  return (
    <main className="w-96 main_bg min-h-screen">
      {selectedCard === null ? (
        <>
          <header className="px-4">
            <div className="flex justify-between items-center pt-8">
              <h1 className="text-white text-[32px] font-bold leading-[41px] tracking-tight">
                Bank <br /> Cards
              </h1>
              <img src={dp} alt="dp" className="rounded-full w-12 h-12" />
            </div>
            <div>
              <h2 className="text-slate-400 text-base font-bold leading-relaxed tracking-tight">
                Balance
              </h2>
              <p className="text-white text-[26px] font-bold leading-relaxed tracking-tight">
                $2,748.00
              </p>
            </div>
          </header>
          <Carousel cards={cards} handleCardClick={handleCardClick} />
          <Footer />
        </>
      ) : (
        <CardDetails
          card={selectedCard}
          clearCardSelection={clearCardSelection}
        />
      )}
    </main>
  );
};

export default Home;
