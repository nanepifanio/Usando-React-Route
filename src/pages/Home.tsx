import { AlbumTypes } from "../types/types";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import { AlbumLinkBox } from "../components/AlbumLinkBox";

type HomePageProps = {
  albList: AlbumTypes[];
};

export const Home = ({ albList }: HomePageProps) => {
  return (
    <section>
      {!!albList &&
        albList.map((album) => {
          return (
            <Link to={`/albums/${album.id}`} key={uuidv4()}>
              <AlbumLinkBox data={album} />
            </Link>
          );
        })}
    </section>
  );
};
