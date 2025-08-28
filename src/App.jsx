import { useEffect, useState } from "react";
import { fetchData } from "./utils/pokemonAPI";
import CardGrid from "./components/CardGrid";
import "./App.css";

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function loadData() {
      const data = await fetchData();
      setImages(data);
    }
    loadData();
  }, []);

  return (
    <>
      <h1>Pokemon memory game</h1>
      <CardGrid pokemons={images} />
    </>
  );
}

export default App;
