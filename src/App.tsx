import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./Pages/AppLayout";
import Home from "./Pages/Home";
import Character from "./Pages/Character";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/characters", element: <Character /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
