import React from 'react';
import Pokemon from './Pokemon';

const PokemonGallery = function (props) {
  return (
    <div className={props.className}>
      {props.pokemonList.map((id) => (
        <Pokemon id={id} key={id} />
      ))}
    </div>
  );
};

export default PokemonGallery;
