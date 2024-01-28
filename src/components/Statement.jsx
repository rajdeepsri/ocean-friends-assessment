import car from "../assets/car.png";
import music from "../assets/music.png";
import arrow from "../assets/arrow.png";
import Footer from "../components/Footer";
import dp from "../assets/dp.png";

const statements = [
  {
    title: "Card to card",
    subtitle: "Maria",
    amount: "143.00",
    isCredit: true,
    icon: arrow,
  },
  {
    title: "Apple Music",
    subtitle: "Online",
    amount: "467.00",
    isCredit: false,
    icon: music,
  },
  {
    title: "Uber",
    subtitle: "Service",
    amount: "467.00",
    isCredit: false,
    icon: car,
  },
];

const Statement = () => {
  return (
    <div className="py-4 w-full">
      <h2>Today</h2>
      <div className="vstack py-2 w-full">
        {statements.map((transaction) => (
          <div
            key={transaction.title}
            className="flex items-center justify-between pr-2 -ml-4 w-full"
          >
            <div className="flex items-center">
              <img
                src={transaction.icon}
                alt="icon"
                className="drop-shadow-glow"
              />
              <div className="flex flex-col">
                <p>{transaction.title}</p>
                <p className="font-light text-[0.8rem] text-neutral-300">
                  {transaction.subtitle}
                </p>
              </div>
            </div>
            <div className="font-bold text-[1.2rem]">
              {transaction.isCredit ? "+" : "-"}${transaction.amount}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statement;
