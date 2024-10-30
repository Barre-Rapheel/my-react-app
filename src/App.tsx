import { useState } from 'react';
import './App.css';
import PokemonCard from './components/PokemonCard';

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  return (
    <div>
      <nav>
        {pokemonList.map((pokemon, index) => (
          <button 
            key={pokemon.name}   // Utilisation de pokemon.name comme key
            onClick={() => setPokemonIndex(index)}  // Gestionnaire onClick pour mettre à jour pokemonIndex
          >
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </button>
        ))}
      </nav>
      
      {/* Affichage du Pokémon sélectionné */}
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
    </div>
  );
}

export default App;


  
