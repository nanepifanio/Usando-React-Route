import { useParams } from "react-router-dom";
import { BigPhoto } from "../components/BigPhoto";
import { BackButton } from "../components/BackButton";
import { useBigPhoto } from "../hooks/useBigPhoto";

export const Photo = () => {
  const params = useParams();
  const bigPhoto = useBigPhoto(params.photoNumber);
  return (
    <section>
      <BackButton onePage />
      {!!bigPhoto && <BigPhoto data={bigPhoto} />}
    </section>
  );
};
