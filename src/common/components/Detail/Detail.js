import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import http from "@Common/http";
import { DetailCard, CancelBtn } from './Detail.styled'

const Detail = () => {

    const location = useLocation();
    const history = useHistory();
    const [pokemon, setPokemon] = useState({});
    useEffect(async () => {
        try {
            const res = await http.get(`https://pokeapi.co/api/v2/pokemon${location.pathname}`)
            setPokemon(res.data)
            console.log(res.data.types[0].type.name)
        } catch (error) {
            history.push('/')
        }
    }, []);

    const listAbilities = () => pokemon.abilities.map(ability => <li>{ability.ability.name}</li>);
    return (
        <DetailCard>
        <CancelBtn onClick={()=>history.push('/')}>
            <span className={'left'}> </span>
            <span className={'right'}> </span>
        </CancelBtn>
        <div>
                <img src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemon.name}.gif`} />
            <p>{pokemon.name}</p>
        </div>

            <p>ID: {pokemon.id}</p>
            <p>Type: {pokemon.types ? pokemon.types.map(type => `${type.type.name} `) : ''}</p>
            <p>Height: {pokemon.height}</p>
            <p>Abilities: <ul>{pokemon.abilities ? listAbilities() : ''}</ul></p>

        </DetailCard>
    )
}

export default Detail;
