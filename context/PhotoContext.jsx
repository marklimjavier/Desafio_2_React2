import { createContext, useState, useEffect } from "react";

export const PhotoContext = createContext();
const PhotoProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);

  const favoritos = photos.filter((photo) => photo.liked);

  useEffect(() => {
    fetch('./photos.json')
      .then((response) => response.json())
      .then(({ photos }) => {
        console.log('Datos obtenidos:', photos); // si ve esto aqui es que tuve problemas y sospechaba que era el json
        setPhotos(photos);
      })
      .catch(error => console.error('Error fetching photos:', error));
  }, []);

  const marcaFavoritos = (id) => {
    const updatedPhotos = photos.map((photo) => {
      if (photo.id === id) {
        return { ...photo, liked: !photo.liked };
      }
      return photo;
    });
    setPhotos(updatedPhotos);
  };

  return (
    <PhotoContext.Provider value={{ photos, favoritos, marcaFavoritos }}>
      {children}
    </PhotoContext.Provider>
  );
};

export default PhotoProvider;