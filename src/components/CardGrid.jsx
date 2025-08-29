import Card from "./Card";
import "../styles/CardGrid.css";

function CardGrid({ pokemons, onCardClick }) {
  return (
    <div className="card-grid-container">
      <div className="card-grid">
        {pokemons.map((pokemon, idx) => (
          <Card
            key={idx}
            name={pokemon.name}
            image={pokemon.image}
            onClick={() => onCardClick(pokemon.name)}
          />
        ))}
      </div>
    </div>
  );
}

export default CardGrid;
