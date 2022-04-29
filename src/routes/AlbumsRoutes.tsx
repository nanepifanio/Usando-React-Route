import { useRoutes } from "react-router-dom";
import { useAlbums } from "../hooks/useAlbums";
// Pages
import { Album } from "../pages/Album";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import { Photo } from "../pages/Photo";

export const AlbumsRoutes = () => {
  const albums = useAlbums();

  return useRoutes([
    { path: "/", element: <Home albList={albums} /> },
    { path: "/albums/:albumNumber", element: <Album albList={albums} /> },
    { path: "/photos/:photoNumber", element: <Photo /> },
    { path: "*", element: <NotFound /> },
  ]);
};
