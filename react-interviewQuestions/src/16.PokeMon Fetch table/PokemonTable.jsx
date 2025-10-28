import React, { useEffect, useState } from "react";

const PokemonTable = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);

  // Step 1: Fetch list of Pokemons
  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10"); // limit 10 for demo
        const data = await res.json();

        // Step 2: Fetch each pokemon details in parallel
        const details = await Promise.all(
          data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            const details = await res.json();
            return {
              name: pokemon.name,
              abilities: details.abilities.map(
                (ab) => ab.ability.name
              ), // extract ability names
            };
          })
        );

        setPokemonList(details);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Pokemon:", error);
        setLoading(false);
      }
    };

    fetchPokemons();
  }, []);

  if (loading) return <p>Loading Pokémon data...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Pokémon Abilities Table</h2>
      <table
        border="1"
        cellPadding="10"
        style={{ borderCollapse: "collapse", width: "100%", textAlign: "left" }}
      >
        <thead>
          <tr style={{ background: "#f2f2f2" }}>
            <th>Pokémon Name</th>
            <th>Abilities</th>
          </tr>
        </thead>
        <tbody>
          {pokemonList.map((poke, index) => (
            <tr key={index}>
              <td style={{ textTransform: "capitalize" }}>{poke.name}</td>
              <td>{poke.abilities.join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PokemonTable;
