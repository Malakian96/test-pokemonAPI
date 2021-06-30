import React from 'react';

import Card from "@Common/components/Card/Card";
import { Grid, Wrapper } from "./Pokedex.styled";
import pokemonLogo from "@Assets/pokemon_logo.png";

const Pokedex = ({data: {pokemons, event}}) => {
    
    return (
        <Wrapper>
            <img src={pokemonLogo}/>
            <div>
            <p>First Generation</p>
            <p>151 Pokémon</p>
            </div>
            <Grid>
            {
                pokemons.map(pokemon => <Card name={pokemon.name} />)
            }
            
            </Grid>
        </Wrapper>
    )
}

export default Pokedex
