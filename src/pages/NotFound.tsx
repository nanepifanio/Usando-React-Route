import { BackButton } from "../components/BackButton";

export const NotFound = () => {
  return (
    <div>
      <BackButton home />
      <p className="text-center">Página não encontrada</p>
    </div>
  );
};
