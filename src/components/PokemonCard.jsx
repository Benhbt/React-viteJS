function PokemonCard(props) {

  console.log(props); 


    return (
        <figure>
            <img src={props.pokemon.imgSrc}
            alt= "???" />
            <figcaption>{props.pokemon.name}</figcaption>
        </figure>
    )

}

export default PokemonCard;



