import { useEffect, useState } from "react";
import { AlbumTypes } from "../types/types";
import { api } from "../api/api";

export const useAlbums = () => {
  const [albumsList, setAlbumsList] = useState<AlbumTypes[]>([]);

  useEffect(() => {
    getAlbums();
  }, []);

  const getAlbums = async (): Promise<void> => {
    const albums: AlbumTypes[] = await api.getAllAlbums();
    setAlbumsList(albums);
  };

  return albumsList;
};
