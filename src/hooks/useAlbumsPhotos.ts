import { useEffect, useState } from "react";
import { PhotoTypes } from "../types/types";
import { api } from "../api/api";

export const useAlbumsPhotos = (albumNumber: string | undefined) => {
  const [photosList, setPhotosList] = useState<PhotoTypes[]>([]);

  useEffect(() => {
    getAlbumPhotos();
  }, []);

  const getAlbumPhotos = async (): Promise<void> => {
    const photos: PhotoTypes[] = await api.getAllAlbumPhotos(albumNumber);
    setPhotosList(photos);
  };

  return photosList;
};
