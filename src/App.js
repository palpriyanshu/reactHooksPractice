import React from 'react';
import PokemonGallery from './PokemonGallery';
import './App.css';

const App = (props) => {
  const list = Array.from(Array(100).keys()).slice(1);
  return <PokemonGallery pokemonList={list} className="gallery" />;
};

export default App;
