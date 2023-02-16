import React, { useEffect, useState } from 'react'
import axios from 'axios';

const PokemonApi = () => {
    const [pokemons, setPokemons] = useState([]);


    const fetchPokemon = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then((response) => {
                setPokemons(response.data.results)
                console.log(response.data.results)
            })
            .catch((err) => {
                console.log("Error encountered pulling Pokemon list: ", err)
            })
    }


    return (
        <div>
            <h1>Pokemon Names</h1>
            <button onClick={fetchPokemon}>Fetch Pokemons</button>
            {
                pokemons.map((pokemon, id) => {
                    return (
                        <div key={id}>
                            <ul className='tiled-ul'>
                                <li>
                                {pokemon.name}
                                </li>
                            </ul>

                        </div>
                    )
                })
            }

        </div>
    )
}

export default PokemonApi