import { Pokemon } from "../types/types";

export async function fetchData(): Promise<Pokemon[]> {
  try {
    const result = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=20&offset=18"
    );
    const data = await result.json();

    const detailedData = await Promise.all(
      data.results.map(async (pokemon: { name: string; url: string }) => {
        const res = await fetch(pokemon.url);
        const details = await res.json();
        return {
          name: details.name,
          image: details.sprites.front_default,
        };
      })
    );

    return detailedData;
  } catch (error) {
    console.error("Error fetching data: ", error);
    return [];
  }
}
