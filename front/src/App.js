import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Root from "./pages/Root";
import "./css/style.css";
import Shiny from "./pages/Shiny";
import PenPal from "./pages/PenPal";
import Boss from "./pages/Boss";
import Egg from "./pages/Egg";
import Research from "./pages/Research";
import Raid from "./pages/Raid";
import Event from "./pages/Event";
import Rocket from "./pages/Rocket";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { path: "/", element: <Home /> },
        {
          path: "/shiny",
          element: <Shiny />,
        },
        {
          path: "/penpal",
          element: <PenPal />,
        },
        { path: "/boss", element: <Boss /> },
        { path: "/egg", element: <Egg /> },
        { path: "/research", element: <Research /> },
        { path: "/raid", element: <Raid /> },
        { path: "/event", element: <Event /> },
        { path: "/rocket", element: <Rocket /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
