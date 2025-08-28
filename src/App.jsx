import { useEffect, useState } from "react";
import { fetchData } from "./utils/pokemonAPI";
import CardGrid from "./components/CardGrid";
import Header from "./components/Header";
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

  const handleRules = () => {
    alert(
      "Click on a Pokemon card to increase your score. Don't click the same card twice!"
    );
  };

  return (
    <>
      <Header onShowRules={handleRules} />
      <CardGrid pokemons={images} />
    </>
  );
}

export default App;
