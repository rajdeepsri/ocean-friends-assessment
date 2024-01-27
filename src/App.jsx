import { createBrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
