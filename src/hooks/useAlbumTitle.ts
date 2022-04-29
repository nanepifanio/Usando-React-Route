import { useEffect, useState } from "react";
import { AlbumTypes } from "../types/types";

type AlbumTitleProps = {
  albList: AlbumTypes[];
  albumNumber: string | undefined;
};

export const useAlbumTitle = ({ albList, albumNumber }: AlbumTitleProps) => {
  const [albumTitle, setAlbumTitle] = useState<string>("");

  useEffect(() => {
    findAlbumTitle();
  }, []);

  const findAlbumTitle = (): void => {
    const title = albList.find(
      (alb) => alb.id === +(albumNumber as string)
    )?.title;
    if (title) setAlbumTitle(title);
  };

  return albumTitle;
};
