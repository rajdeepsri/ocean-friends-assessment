import useEmblaCarousel from "embla-carousel-react";
import { useState } from "react";

const Carousel = ({ cards, handleCardClick }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const updateCurrent = () => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  };

  const handleDotClick = (index) => {
    if (!emblaApi) return;
    emblaApi.scrollTo(index);
    updateCurrent();
  };

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4 touch-pan-y py-6 mx-6">
          {cards.map((card, index) => (
            <div
              className="flex flex-[0_0_75%]"
              key={index}
              onClick={() => handleCardClick(card)}
            >
              <img
                className="w-full h-[24rem]"
                src={card.imgUrl}
                alt={card.variant}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="z-50 absolute -bottom-3 left-0 right-0 flex items-center justify-center">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={"embla__dot".concat(
              index === selectedIndex ? " embla__dot--selected" : ""
            )}
          ></button>
        ))}
      </div>
    </div>
  );
};
export default Carousel;
