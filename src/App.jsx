import { useEffect, useState } from "react";
import { fetchData } from "./utils/pokemonAPI";
import CardGrid from "./components/CardGrid";
import Header from "./components/Header";
import Scoreboard from "./components/Scoreboard";
import RulesModal from "./components/RulesModal";
import "./App.css";

function App() {
  const [images, setImages] = useState([]);
  const [isRulesOpen, setIsRulesOpen] = useState(false);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clicked, setClicked] = useState([]);

  useEffect(() => {
    async function loadData() {
      const data = await fetchData();
      setImages(data);
    }
    loadData();
  }, []);

  const handleOpenRules = () => setIsRulesOpen(true);
  const handleCloseRules = () => setIsRulesOpen(false);

  const handleCardClick = (name) => {
    if (clicked.includes(name)) {
      setScore(0);
      setClicked([]);
    } else {
      const newScore = score + 1;
      setScore(newScore);
      setClicked([...clicked, name]);

      if (newScore > bestScore) {
        setBestScore(newScore);
      }
    }

    setImages((prev) => shuffleArray([...prev]));
  };

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  return (
    <>
      <Header onShowRules={handleOpenRules} />
      <Scoreboard score={score} bestScore={bestScore} />
      <CardGrid pokemons={images} onCardClick={handleCardClick} />
      <RulesModal isOpen={isRulesOpen} onClose={handleCloseRules} />
    </>
  );
}

export default App;
