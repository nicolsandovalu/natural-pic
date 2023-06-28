import React, { useContext } from 'react';
import { FavoritesContext } from '../components/FavoritesContext';

const Favorites = () => {
  const { favoritePhotos } = useContext(FavoritesContext);

  return (
    <div>
      <h2>Fotos Favoritas</h2>
      {favoritePhotos.map((photo) => (
        <div key={photo.id}>
          <img src={photo.src.medium} alt={photo.photographer} />
          <p>Fotógrafo: {photo.photographer}</p>
        </div>
      ))}
    </div>
  );
};

export default Favorites;
