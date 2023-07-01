import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./modules/home/components/Home";
import { About } from "./modules/about/components/About";
import { ImageList } from "./modules/image-finder/components/ImageList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/image-finder",
    element: <ImageList />,
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
