import { useState } from "react";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import CardDetails from "../components/CardDetails";
import Header from "../components/Header";
import { cardsData } from "../data/data";

const Home = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const handleCardClick = (card) => setSelectedCard(card);
  const clearCardSelection = () => setSelectedCard(null);

  return (
    <main className="w-96 main_bg min-h-screen">
      {selectedCard === null ? (
        <>
          <div>
            <Header>
              Bank <br /> Cards
            </Header>
            <div className="px-4">
              <h2 className="text-slate-400 text-base font-bold leading-relaxed tracking-tight">
                Balance
              </h2>
              <p className="text-white text-[26px] font-bold leading-relaxed tracking-tight">
                $2,748.00
              </p>
            </div>
          </div>
          <Carousel cards={cardsData} handleCardClick={handleCardClick} />
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
