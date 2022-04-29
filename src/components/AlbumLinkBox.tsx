import { AlbumTypes } from "../types/types";

type AlbumProps = {
  data: AlbumTypes;
};

export const AlbumLinkBox = ({ data }: AlbumProps) => {
  return (
    <div className="border-2 border-black p-4 mb-3 hover:bg-gray-200 text-center">
      {data.title}
    </div>
  );
};
