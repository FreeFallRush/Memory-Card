import Card from "./Card";

function CardGrid({ pokemons }) {
  return (
    <div className="card-grid">
      {pokemons.map((pokemon, idx) => {
        <Card key={idx} name={pokemon.name} image={pokemon.image} />;
      })}
    </div>
  );
}

export default CardGrid;
