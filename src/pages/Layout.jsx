import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <main className="w-96 main_bg min-h-screen">
      <Outlet />
      <Footer />
    </main>
  );
};
export default Layout;
