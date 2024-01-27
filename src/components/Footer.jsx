import NavHomeIcon from "../assets/nav_home_icon.png";
import NavScanIcon from "../assets/nav_scan_icon.png";
import NavHistoryIcon from "../assets/nav_history_icon.png";
import NavMenuIcon from "../assets/nav_menu_icon.png";
import { useLocation } from "react-router-dom";

const footerData = [
  { key: "home", pathName: "/", icon: NavHomeIcon },
  { key: "catalogue", pathName: "/catalogue", icon: NavScanIcon },
  { key: "history", pathName: "/history", icon: NavHistoryIcon },
  { key: "menu", pathName: "/menu", icon: NavMenuIcon },
];

const Footer = () => {
  const location = useLocation();

  return (
    <footer className="w-96 h-20 fixed left-1/2 -translate-x-1/2 bottom-0 z-1 bg-gradient-to-b rounded-t-[35px] from-[#2c3657] to-[#141d33]">
      <div className="max-w-96 mx-auto flex flex-row gap-8 py-3 px-4 justify-around">
        {footerData.map((navItem) => (
          <div
            key={navItem.key}
            title={navItem.key}
            className={`w-14 h-14 flex items-center justify-center rounded-full shadow cursor-pointer ${
              location.pathname === navItem.pathName
                ? "bg-gradient-to-b from-blue-400 to-violet-500"
                : "hover:bg-inherit"
            }`}
          >
            <img className="w-5 h-5 shadow" src={navItem.icon} />
          </div>
        ))}
      </div>
    </footer>
  );
};
export default Footer;
