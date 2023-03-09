import React from "react";

const Card = ({ nombre, generoMusical, animalFavorito, pelicula }) => {
  return (
    <div>
      <h3>Tu nombre es {nombre}</h3>
      <h3>Tu género musical favorito es {generoMusical}</h3>
      <h3>Tu animal favorito es {animalFavorito}</h3>
      <h3>Tu película favorita es {pelicula}</h3>
    </div>
  );
};

export default Card;
