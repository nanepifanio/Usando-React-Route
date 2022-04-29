import { PhotoTypes } from "../types/types";

type PhotoProps = {
  data: PhotoTypes;
};

export const BigPhoto = ({ data }: PhotoProps) => {
  return (
    <div className="flex justify-center">
      <figure>
        <img src={data.url} alt={data.title} />
        <figcaption className="text-center mb-3">{data.title}</figcaption>
      </figure>
    </div>
  );
};
