import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store';

import selectAllPokemon from './reducers/selectors';
import {receiveAllPokemon, requestAllPokemon} from './actions/pokemon_actions';
import {fetchAllPokemon} from './util/api_util';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<h1>Root goes HERE</h1>, document.getElementById('root'));
  let store = configureStore();

  window.store = store;
  window.selectAllPokemon = selectAllPokemon;
  window.receiveAllPokemon = receiveAllPokemon;
  window.fetchAllPokemon = fetchAllPokemon;
  window.requestAllPokemon = requestAllPokemon;
});
