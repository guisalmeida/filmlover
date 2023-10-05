import axios from 'axios'

export const API_URL = 'https://api.themoviedb.org/3'
export const IMAGE_URL = 'http://image.tmdb.org/t/p/w342'
export const API_KEY = import.meta.env.VITE_API_KEY
export const MOVIE_GENRES = [
  {
    "id": 28,
    "name": "Action"
  },
  {
    "id": 12,
    "name": "Adventure"
  },
  {
    "id": 16,
    "name": "Animation"
  },
  {
    "id": 35,
    "name": "Comedy"
  },
  {
    "id": 80,
    "name": "Crime"
  },
  {
    "id": 99,
    "name": "Documentary"
  },
  {
    "id": 18,
    "name": "Drama"
  },
  {
    "id": 10751,
    "name": "Family"
  },
  {
    "id": 14,
    "name": "Fantasy"
  },
  {
    "id": 36,
    "name": "History"
  },
  {
    "id": 27,
    "name": "Horror"
  },
  {
    "id": 10402,
    "name": "Music"
  },
  {
    "id": 9648,
    "name": "Mystery"
  },
  {
    "id": 10749,
    "name": "Romance"
  },
  {
    "id": 878,
    "name": "Science Fiction"
  },
  {
    "id": 10770,
    "name": "TV Movie"
  },
  {
    "id": 53,
    "name": "Thriller"
  },
  {
    "id": 10752,
    "name": "War"
  },
  {
    "id": 37,
    "name": "Western"
  }
]

export const fetchMovies = async (searchKey = "", page = 1, genre = null) => {
  const type = searchKey ? "search" : "discover"
  try {
    const { data } = await axios.get(`${API_URL}/${type}/movie`, {
      params: {
        api_key: API_KEY,
        query: searchKey,
        page: page,
        ...(genre && { with_genres: genre })
      }
    })
    return data.results

  } catch (error) {
    console.log('Error creating the user!', error.message);
  }
}
