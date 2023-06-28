import React, { useState, useEffect, useContext } from 'react';
import { searchPhotos } from '../components/PexelsAPI';
import { FavoritesContext } from '../components/FavoritesContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


const Gallery = () => {
    const [photos, setPhotos] = useState([]);
    const { favoritePhotos, addFavoritePhoto, removeFavoritePhoto } = useContext(FavoritesContext);
  
    useEffect(() => {
      const fetchPhotos = async () => {
        try {
          const result = await searchPhotos('nature');
          setPhotos(result);
        } catch (error) {
          console.error('Error al obtener las fotos:', error);
        }
      };
  
      fetchPhotos();
    }, []);
  
    const toggleFavorite = (photoId) => {
      const updatedPhotos = photos.map((photo) =>
        photo.id === photoId ? { ...photo, isFavorite: !photo.isFavorite } : photo
      );
      setPhotos(updatedPhotos);
  
      const favoritePhoto = updatedPhotos.find((photo) => photo.id === photoId);
      if (favoritePhoto) {
        if (favoritePhoto.isFavorite) {
          addFavoritePhoto(favoritePhoto);
        } else {
          removeFavoritePhoto(favoritePhoto.id);
        }
      }
    };
  
    return (
      <div className='container'>
        <h2>Galería de Fotos</h2>
        <div className="gallery row">
          {photos.map((photo) => (
            <div key={photo.id} className="photo col-md-4">
                <div className='galley-item'>
              <img src={photo.src.medium} alt={photo.photographer} />
              <p>Fotógrafo: {photo.photographer}</p>
              <button className= {`favorite-button ${favoritePhotos.find ((fav) => fav.id===photo.id)?"secondary":"primary"}`} 
                    onClick={() => favoritePhotos.find ((fav)=> fav.id === photo.id) ? removeFavoritePhoto (photo.id) : addFavoritePhoto (photo)}>
                
                {favoritePhotos.find ((fav) => fav.id === photo.id) ? '' : ''}
                <FontAwesomeIcon icon={faHeart} color={favoritePhotos.includes(photo.id) ? 'red' : 'black'} />
              </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Gallery;