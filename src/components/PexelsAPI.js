import axios from 'axios';

export const API_KEY = 'k6bx7cKMHK9Iia7bKmiUdyiMGD2kYHvsF7wBvHEHYuRxC9Fq1A5mGiyV'; // Reemplaza 'tu_clave_de_API_de_Pexels' con tu propia clave de API

export const searchPhotos = async (query) => {
  const apiUrl = `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=10`;

  try {
    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: API_KEY,
      },
    });

    if (!response.data.photos) {
      throw new Error('No se encontraron fotos');
    }

    return response.data.photos.map((photo) => ({
      id: photo.id,
      photographer: photo.photographer,
      src: {
        small: photo.src.small,
        medium: photo.src.medium,
        large: photo.src.large,
      },
      isFavorite: false
    }));
  } catch (error) {
    console.error('Error al buscar fotos:', error);
    throw error;
  }
};
