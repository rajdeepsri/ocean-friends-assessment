import dp from "../assets/dp.png";

const Header = ({ children }) => {
  return (
    <header className="px-4 pt-4">
      <div className="flex justify-between items-center pt-8">
        <h1 className="text-white text-[32px] font-bold leading-[41px] tracking-tight">
          {children}
        </h1>
        <img src={dp} alt="dp" className="rounded-full w-12 h-12" />
      </div>
    </header>
  );
};
export default Header;
