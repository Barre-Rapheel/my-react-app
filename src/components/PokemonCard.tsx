const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];

  function PokemonCard(props: any) {
    // Affichage de l'objet props dans la console du navigateur
    console.log(props);
     
    const pokemon = pokemonList[1];
  
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