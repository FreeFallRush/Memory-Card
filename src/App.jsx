import { useEffect, useState } from "react";
import { fetchData } from "./utils/pokemonAPI";
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
      <div>
        {images.map((images, idx) => (
          <div key={idx}>
            <img src={images.image} alt={images.name} />
            <p>{images.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
