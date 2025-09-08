import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./Pages/AppLayout";
import Home from "./Pages/Home";
import Character from "./Pages/Character";
import CharacterDetail from "./Pages/CharacterDetail";
import World from "./Pages/World";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/characters", element: <Character /> },
        { path: "/characters/:id", element: <CharacterDetail /> },
        { path: "/world", element: <World /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
