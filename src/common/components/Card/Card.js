import React from 'react'
import { useHistory } from 'react-router-dom';
import { PokemonCard } from './Card.styled'


const Card = ({name, image}) => {
    const history = useHistory();

    const handleClickGetPokemon = () => {
        history.push(name)
    }
    return (
        <PokemonCard onClick={handleClickGetPokemon}>
           <div>
            <img src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${name}.gif`} />
            <p>{name}</p>
            </div>
        </PokemonCard>
    )
}

export default Card
