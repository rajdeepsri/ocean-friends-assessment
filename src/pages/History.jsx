import Header from "../components/Header";
import { historyData } from "../data/data";

const History = () => {
  return (
    <>
      <Header>History</Header>
      <h2 className="pt-6 pl-4 font-semibold">20 April</h2>
      <section className="vstack w-full pl-4">
        {historyData.map((data) => (
          <div
            key={data.id}
            className="flex items-center justify-between pr-2 -ml-4 w-full"
          >
            <div className="flex items-center">
              <img src={data.icon} alt="icon" className="drop-shadow-glow" />
              <div className="flex flex-col">
                <p>{data.title}</p>
                <p className="font-light text-[0.8rem] text-neutral-300">
                  {data.subtitle}
                </p>
              </div>
            </div>
            <div className="font-bold">
              {data.isCredit ? "+" : "-"}${data.amount}
            </div>
          </div>
        ))}
      </section>
    </>
  );
};
export default History;
