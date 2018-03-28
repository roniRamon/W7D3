import React from 'react';

const selectAllPokemon = (state) => {
  return Object.values(state.entities.pokemon);
};

export default selectAllPokemon;
