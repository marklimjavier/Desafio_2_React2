import React, { useContext } from "react";
import { PhotoContext } from "../../context/PhotoContext";
import Card from "react-bootstrap/Card";
import IconHeart from "./IconHeart";

const Gallery = () => {
  const { photos, marcaFavoritos } = useContext(PhotoContext);
  console.log("Fotos recibidas:", photos);

  return (
    <div className="tarjeta">
      {photos.map((photo) => (
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

export default Gallery;
