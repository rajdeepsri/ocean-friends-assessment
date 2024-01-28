import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import { RouterProvider } from "react-router-dom";
import Catalogue from "./pages/Catalogue";
import History from "./pages/History";
import Layout from "./pages/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    element: <Layout />,
    children: [
      {
        path: "/catalogue",
        element: <Catalogue />,
      },
      {
        path: "/history",
        element: <History />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
