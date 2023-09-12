
import { useEffect, useState } from "react"
import axios from 'axios';


const PokemonDisplay =  () => {
     const [pokmeonObjects, setPokemonObjectst] = useState([])


    useEffect(() => {
    // useEffect will run it once because array is empty in the parameter

    // go get data
    // set state to the results array
    // rerender!
    axios('https://pokeapi.co/api/v2/pokemon').then((response)=>{
        console.log(response);
        let array = response.data.results;
        setPokemonObjectst(array);
    });

        console.log("next code")

    }, [])


    //for the return we return the pokemon's name and an image of it
    return (
        <div>
            {pokmeonObjects.map((pokemon) => {
                return (
                
                <div key={pokemon.url}>
                    <span>{pokemon.name}</span>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split("/")[6]}.png`} style={{maxWidth: "100px"}} />
                </div>

            )
            })}
        </div>
    )
}

export default PokemonDisplay;