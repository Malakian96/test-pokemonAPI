import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router, Switch,
} from 'react-router-dom';
import http from '@Common/http';
import RouteWithProps from '@Application/components/RouteWithProps/RouteWithProps';
import './App.css';
import Pokedex from '@Pages/Pokedex/Pokedex';
import Detail from '@Common/components/Detail/Detail';

const POKEMON_LIMIT = 151;
const App = () => {
  const [pokemons, setPokemons] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [pokemon, setPokemon] = useState({});

  useEffect(async () => {
    const arrPokemons = await http.get(`/pokemon?limit=${POKEMON_LIMIT}`);
    setPokemons(arrPokemons.data.results);
  }, []);

  return (
    <Router>
      <Switch>
        <RouteWithProps path="/" exact component={Pokedex} data={{ pokemons, setPokemon }} />
        <RouteWithProps path="/:name" component={Detail} />
      </Switch>
    </Router>
  );
};

export default App;
