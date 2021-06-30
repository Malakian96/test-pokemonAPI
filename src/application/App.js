import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import http from "@Common/http";
import RouteWithProps from "@Application/components/RouteWithProps/RouteWithProps";
import './App.css';
import Pokedex from '@Pages/Pokedex/Pokedex';
import Detail from '@Common/components/Detail/Detail';

const POKEMON_LIMIT = 151;
const App = () => {
    const [pokemons, setPokemons] = useState([]);
    const [pokemon, setPokemon] = useState({});
    
    useEffect(async () => {
        const arrPokemons = await http.get(`/pokemon?limit=${POKEMON_LIMIT}`)
        setPokemons(arrPokemons.data.results);
    },[]);

    return(
    <Router>
      <Switch>
        <RouteWithProps path="/" exact component={Pokedex} data={{pokemons:pokemons, setPokemon:setPokemon}} />
        <RouteWithProps path="/:name" component={Detail}/>
      </Switch>
    </Router>
    );
};

export default App;