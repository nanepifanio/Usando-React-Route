import { Link, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { AlbumTypes } from "../types/types";
import { PhotoLinkBox } from "../components/PhotoLinkBox";
import { BackButton } from "../components/BackButton";
import { useAlbumsPhotos } from "../hooks/useAlbumsPhotos";
import { useAlbumTitle } from "../hooks/useAlbumTitle";

type AlbumPageProps = {
  albList: AlbumTypes[];
};

export const Album = ({ albList }: AlbumPageProps) => {
  const params = useParams();
  const photos = useAlbumsPhotos(params.albumNumber);
  const title = useAlbumTitle({ albList, albumNumber: params.albumNumber });

  return (
    <section>
      <h1 className="font-bold text-3xl text-center py-3 ">{title}</h1>

      <BackButton onePage />

      <div className="grid lg:grid-cols-5 m-auto gap-5 mt-8 max-w-6xl md:grid-cols-3 sm:grid-cols-2">
        {photos.map((photo) => {
          return (
            <Link to={`/photos/${photo.id}`} key={uuidv4()}>
              <PhotoLinkBox data={photo} />
            </Link>
          );
        })}
      </div>
    </section>
  );
};
