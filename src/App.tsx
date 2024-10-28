
import { useState } from 'react';
import './App.css';
import PokemonCard from './components/PokemonCard';
import NavBar from './components/NavBar';

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

  const handlePrevious = () => {
    setPokemonIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : pokemonList.length - 1));
  };

  const handleNext = () => {
    setPokemonIndex((prevIndex) => (prevIndex < pokemonList.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div>
      {/* Utilisation de pokemonIndex pour afficher le Pokémon actuel */}
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />

      {/* NavBar reçoit les props pour contrôler les boutons */}
      <NavBar
        onPrevious={handlePrevious}
        onNext={handleNext}
        showPrevious={pokemonIndex > 0}
        showNext={pokemonIndex < pokemonList.length - 1}
      />
    </div>
  );
}

export default App;

  
