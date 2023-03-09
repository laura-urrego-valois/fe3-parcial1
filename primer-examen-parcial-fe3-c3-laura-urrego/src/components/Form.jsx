import React, { useState } from "react";
import Card from "./Card";
import "../stylesheets/Form.css";

const Form = () => {
  const [usuario, setUsuario] = useState({
    nombre: "",
    generoMusical: "",
    animalFavorito: "",
    pelicula: "",
  });

  const [show, setShow] = useState(false);
  const [err, setErr] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (usuario.nombre.length > 3) {
      setShow(true);
      setErr(false);
    } else {
      setShow(false);
      setErr(true);
    }
    if (usuario.generoMusical.length > 6) {
      setShow(true);
      setErr(false);
    } else {
      setShow(false);
      setErr(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label> Ingresa tu nombre 😊</label>
        <input
          type="text"
          onChange={(event) =>
            setUsuario({ ...usuario, nombre: event.target.value })
          }
        />
        <br></br>
        <br></br>
        <label> Genero musical favorito 🎵 </label>
        <input
          type="text"
          onChange={(event) =>
            setUsuario({ ...usuario, generoMusical: event.target.value })
          }
        />
        <br></br>
        <br></br>
        <label> Animal favorito 🐾 </label>
        <input
          type="text"
          onChange={(event) =>
            setUsuario({ ...usuario, animalFavorito: event.target.value })
          }
        />
        <br></br>
        <br></br>
        <select
          onChange={(event) =>
            setUsuario({ ...usuario, pelicula: event.target.value })
          }
        >
          <option value="">Seleccione la película que más te guste 🎥 </option>
          <option value="Harry Potter">Harry Potter</option>
          <option value="Titanic">Titanic</option>
          <option value="La Guerra de las galaxias">
            La Guerra de las galaxias
          </option>
        </select>
        <br></br>
        <br></br>
        <button>Enviar 📨</button>
      </form>
      {show ? (
        <Card
          nombre={usuario.nombre}
          generoMusical={usuario.generoMusical}
          animalFavorito={usuario.animalFavorito}
          pelicula={usuario.pelicula}
        />
      ) : null}
      <br></br>
      <br></br>
      {err ? "Por favor chequea que la información sea correcta ⚠️" : null}

    </div>
  );
};

export default Form;
