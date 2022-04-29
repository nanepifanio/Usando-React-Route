import { AlbumsRoutes } from "./routes/AlbumsRoutes";

const App = () => {
  return (
    <>
      <header className="font-bold text-4xl text-center border-b-2  py-3 ">
        <p>Galeria de fotos</p>
      </header>
      <main className="p-2">
        <AlbumsRoutes />
      </main>
    </>
  );
};

export default App;
