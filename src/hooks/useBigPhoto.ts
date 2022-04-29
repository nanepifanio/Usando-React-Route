import { useEffect, useState } from "react";
import { PhotoTypes } from "../types/types";
import { api } from "../api/api";

export const useBigPhoto = (photoNumber: string | undefined) => {
  const [bigPhoto, setBigPhoto] = useState<PhotoTypes | undefined>(undefined);

  useEffect(() => {
    getLargePhoto();
  }, []);

  const getLargePhoto = async (): Promise<void> => {
    const big: PhotoTypes = await api.getBigPhoto(photoNumber);
    setBigPhoto(big);
  };

  return bigPhoto;
};
