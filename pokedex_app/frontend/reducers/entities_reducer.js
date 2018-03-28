import {combineReducers} from 'redux';
import React from 'react';
import pokemonReducer from './pokemon_reducer';

const entitiesReducer = combineReducers({
  pokemon: pokemonReducer
});

export default entitiesReducer;
