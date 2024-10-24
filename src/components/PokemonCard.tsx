

  function PokemonCard({ pokemon }) {
    // Affichage de l'objet props dans la console du navigateur
    
  
    return (
      <figure>
        {pokemon.imgSrc ? (
          <img src={pokemon.imgSrc} alt={pokemon.name} />
        ) : (
          <p>???</p> // Si l'image n'existe pas, afficher "???"
        )}
        <figcaption>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</figcaption>
      </figure>
    );
  }
  
  export default PokemonCard;  