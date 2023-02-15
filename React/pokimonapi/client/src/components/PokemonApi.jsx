import React, { useState } from 'react'

const PokemonApi = () => {
    const [pokemons, setPokemons] = useState([]);


    const fetchPokemon = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                console.log("Getting Pokemon Data", response)
                setPokemons(response.results)
            })
            .catch((err) => {
                console.log("Error encountered pulling Pokemon list: ", err)
            })
    }


    return (
        <div>
            <h1>Pokemon Names</h1>
            <button onClick={fetchPokemon}>Get 807 Pokemons</button>
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