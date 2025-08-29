import { useEffect, useState } from "react";
import { fetchData } from "./utils/pokemonAPI";
import CardGrid from "./components/CardGrid";
import Header from "./components/Header";
import RulesModal from "./components/RulesModal";
import "./App.css";

function App() {
  const [images, setImages] = useState([]);
  const [isRulesOpen, setIsRulesOpen] = useState(false);

  useEffect(() => {
    async function loadData() {
      const data = await fetchData();
      setImages(data);
    }
    loadData();
  }, []);

  const handleOpenRules = () => setIsRulesOpen(true);
  const handleCloseRules = () => setIsRulesOpen(false);

  return (
    <>
      <Header onShowRules={handleOpenRules} />
      <CardGrid pokemons={images} />
      <RulesModal isOpen={isRulesOpen} onClose={handleCloseRules} />
    </>
  );
}

export default App;
