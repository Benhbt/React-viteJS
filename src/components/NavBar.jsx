import PropTypes from "prop-types";


function NavBar({pokemonIndex, setPokemonIndex, pokemonList}) {
  
    /* if(pokemonIndex > 0){
  
    } else if (pokemonIndex < pokemonList.length - 1){
  
    }  */
  
      const handleClick = () => {
        setPokemonIndex(pokemonIndex + 1)
      }
  
      const decrementClick = () => {
        setPokemonIndex(pokemonIndex - 1)
      } 
  
    return (
      <div>
        <button onClick={decrementClick}>Précedent</button>
        <button onClick={handleClick}>Suivant</button>
      </div>
    );
  }

export default NavBar;



