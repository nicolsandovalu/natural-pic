import { createContext, useState } from "react";

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favoritePhotos, setFavoritePhotos] = useState([]);

  const addFavoritePhoto = (photo) => {
    setFavoritePhotos([...favoritePhotos, photo]);
  };

  const removeFavoritePhoto = (photoId) => {
    setFavoritePhotos(favoritePhotos.filter((photo) => photo.id !== photoId));
  };

  return (
    <FavoritesContext.Provider value={{ favoritePhotos, addFavoritePhoto, removeFavoritePhoto }}>
      {children}
    </FavoritesContext.Provider>
  );
};
