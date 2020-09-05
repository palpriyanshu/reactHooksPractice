import React, { useState, useEffect } from 'react';

const PokemonDetail = (props) => {
  const [img, setImage] = useState(props.frontImg);
  const [isFrontImg, toggleImage] = useState(true);

  useEffect(() => {
    const img = isFrontImg ? props.frontImg : props.backImg;
    setImage(img);
  }, [isFrontImg]);

  return (
    <div className="cardStyle">
      <p>{props.name.toUpperCase()}</p>
      <img
        src={img}
        onClick={() => toggleImage(!isFrontImg)}
        style={{ cursor: 'pointer' }}
      />
    </div>
  );
};

const Pokemon = (props) => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    fetch(`http://pokeapi.co/api/v2/pokemon/${props.id}`)
      .then((details) => details.json())
      .then(({ name, sprites }) => {
        const { front_default: frontImg, back_default: backImg } = sprites;
        setDetails({ name, frontImg, backImg });
      });
  }, []);

  return details === null ? (
    <p>loading...</p>
  ) : (
    <PokemonDetail
      name={details.name}
      frontImg={details.frontImg}
      backImg={details.backImg}
    />
  );
};

export default Pokemon;
