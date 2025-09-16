import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About, Home, Recipe, Recipes } from "./pages";
import MainLayout from "./layout/MainLayout";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/recipe/:id",
          element: <Recipe />,
        },
        {
          path: "/recipes",
          element: <Recipes />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}
export default App;