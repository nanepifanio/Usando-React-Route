import { PhotoTypes } from "../types/types";

type PhotoProps = {
  data: PhotoTypes;
};

export const PhotoLinkBox = ({ data }: PhotoProps) => {
  return (
    <div className="box-border p-5 border-2 border-black hover:bg-gray-200 flex justify-center w-52 m-auto">
      <img src={data.thumbnailUrl} alt={data.title} />
    </div>
  );
};
