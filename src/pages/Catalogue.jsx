import Header from "../components/Header";
import { catalogueData } from "../data/data";

const Catalogue = () => {
  return (
    <>
      <Header>Catalogue</Header>
      <section className="pt-6 flex flex-col gap-2">
        {catalogueData.map((cat) => (
          <div className="flex flex-col" key={cat.title}>
            <div className="flex items-center justify-between px-2 w-full">
              <div className="flex items-center gap-2">
                <img src={cat.icon} alt="icon" />
                <div className="flex flex-col">
                  <p>{cat.title}</p>
                  <p className="text-[0.8rem] font-medium text-neutral-400">
                    The debt is{" "}
                    <span className="font-semibold">${cat.debt}</span>
                  </p>
                </div>
              </div>
              <button className="border py-1.5 px-5 rounded-xl border-slate-500 text-neutral-400 hover:border-slate-300 hover:text-neutral-300 transition-all duration-200">
                Pay
              </button>
            </div>
            <div className="w-[85%] border border-[#3f5db14f] self-end mt-2" />
          </div>
        ))}
      </section>
    </>
  );
};
export default Catalogue;
