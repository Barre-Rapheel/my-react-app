import './PokemonCard.css';

interface Pokemon {
  name: string;
  imgSrc?: string;
}

function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
  const cardClass = `card ${
    pokemon.name === 'bulbasaur' ? 'card-bulbasaur' :
    pokemon.name === 'charmander' ? 'card-charmander' :
    pokemon.name === 'squirtle' ? 'card-squirtle' :
    pokemon.name === 'pikachu' ? 'card-pikachu' : 'card-no-image'
  }`;

  return (
    <figure className={cardClass}>
      {pokemon.imgSrc ? (
        <img src={pokemon.imgSrc} alt={pokemon.name} className="cardImg" />
      ) : (
        <p className="no-image-text">???</p> // Affiche "???" en noir
      )}
      <figcaption className="no-image-text">{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</figcaption>
    </figure>
  );
}

export default PokemonCard;


