import React, { useContext } from "react";
import { PhotoContext } from "../../context/PhotoContext";
import Card from "react-bootstrap/Card";
import IconHeart from "./IconHeart";

//antes que nada, si, solo hice un copia y pega del otro codigo de Galery y lo filtre aprovechando la marca
// pienso yo que es la solucion al desafio ya que gracias al context se puede traspasar los datos entre si sin la
//necesidad de props o componentes padres e hijos (lo cual este seria nieto).
const GalleriaFavoritos = () => {
  const { photos, marcaFavoritos } = useContext(PhotoContext);
  console.log("Fotos recibidas:", photos);

  const photosFiltradas = photos.filter((photo) => photo.liked);

  return (
    <div className="tarjeta">
      {photosFiltradas.map((photo) => (
        <Card
          onClick={() => marcaFavoritos(photo.id)}
          key={photo.id}
          style={{ width: "12rem" }}
        >
          <img className="imagen" src={photo.src.medium} alt={photo.title} />
          <section>
            <article className="info">{photo.alt}</article>
            <article>
              <p>Add Favorites</p>
              {photo.liked ? <IconHeart filled /> : <IconHeart fill />}
            </article>
          </section>
        </Card>
      ))}
    </div>
  );
};

export default GalleriaFavoritos;
