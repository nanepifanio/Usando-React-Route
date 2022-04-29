import { useNavigate } from "react-router-dom";

type BackProps = {
  onePage?: boolean;
  home?: boolean;
};

export const BackButton = (props: BackProps) => {
  const navigate = useNavigate();

  const handleBack = () => navigate(-1);
  const handleHome = () => navigate("/");

  return (
    <div className="m-4">
      {props.home && (
        <button
          onClick={handleHome}
          className="block m-auto p-2 bg-black border-2 text-white "
        >
          Home
        </button>
      )}

      {props.onePage && (
        <button
          onClick={handleBack}
          className="block m-auto p-2 bg-black border-2 text-white "
        >
          Voltar
        </button>
      )}
    </div>
  );
};
