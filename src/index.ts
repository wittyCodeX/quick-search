import { Genre, Movie } from './index.types'
import * as Movies from './db.json'

export const getFilteredMovies = ({ genres }: { genres: Genre[] }): Movie[] => {
  const movies = Movies.movies
  let matchingMovies = []

  if (genres.length === 0) {
    const randomIndex = Math.floor(Math.random() * movies.length)
    return [movies[randomIndex]]
  }

  const threeMatchedMovies = []
  const twoMatchedMovies = []
  const oneMatchedMovies = []

  for (const movie of movies) {
    const count = compareGenre(genres, movie.genres)
    switch (count) {
      case 3:
        threeMatchedMovies.push(movie)
        break

      case 2:
        twoMatchedMovies.push(movie)
        break

      case 1:
        oneMatchedMovies.push(movie)
        break

      default:
        break
    }
  }

  matchingMovies = [...threeMatchedMovies, ...twoMatchedMovies, ...oneMatchedMovies]
  return matchingMovies
}

function compareGenre(genres: Genre[], movieGenres: string[]): Number {
  let count = 0
  for (const elem of genres) {
    if (movieGenres.includes(elem)) {
      count++
    }
  }
  if (movieGenres.length === count) return count
  else return 0
}
