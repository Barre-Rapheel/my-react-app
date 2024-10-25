
import './App.css'
import PokemonCard from './components/PokemonCard';
import { useState } from 'react'; // Importation de useState

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
// Déclaration et initialisation de l'état pokemonIndex à 0
const [pokemonIndex, setPokemonIndex] = useState(0);

// Fonction pour aller au Pokémon précédent
const handlePrevious = () => {
  setPokemonIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : pokemonList.length - 1));
};

// Fonction pour aller au Pokémon suivant
const handleNext = () => {
  setPokemonIndex((prevIndex) => (prevIndex < pokemonList.length - 1 ? prevIndex + 1 : 0));
};
  return(
    <div>
      {/*Utilisation de pokemonIndex pour accéder au Pokémon dans pokemonList */}
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      
      {/* Boutons de navigation avec gestion d'événements onClick */}
       
       {/* Bouton Précédent rendu uniquement si pokemonIndex > 0 */}
       {pokemonIndex > 0 && (
        <button onClick={handlePrevious}>Précédent</button>
       )}
       
       {/* Bouton Suivant rendu uniquement si pokemonIndex < pokemonList.length - 1 */}
       {pokemonIndex < pokemonList.length - 1 && (
        <button onClick={handleNext}>Suivant</button>
      )}
    </div>
  )
}
  

export default App
