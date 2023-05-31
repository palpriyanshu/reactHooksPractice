import React from 'react';
import './App.css';

// import ToggleComponent from './Timer';
import PokemonGallery from "./PokemonGallery";

// const App = (props) => <ToggleComponent />;

const App = (props) => {
    const list = Array.from(Array(100).keys()).slice(1);
    return <PokemonGallery pokemonList={list} className="gallery" />;
};

export default App;
