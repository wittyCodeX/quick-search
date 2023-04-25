import { Genre, Movie } from './index.types'
import * as Movies from './db.json'

export const getFilteredMovies = ({ genres }: { genres: Genre[] }): Movie[] => {

  if (genres.length === 0) {
    const randomIndex = Math.floor(Math.random() * Movies.movies.length)
    return [Movies.movies[randomIndex]]
  }

  let threeMatchedMovies: Movie[] = []
  let twoMatchedMovies: Movie[] = []
  let oneMatchedMovies: Movie[] = []

  Movies.movies.forEach((movie: Movie) => {
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
  });

  return  [...threeMatchedMovies, ...twoMatchedMovies, ...oneMatchedMovies]
}

function compareGenre(genres: Genre[], movieGenres: string[]): Number {
  let count = 0
  genres.forEach(elem => {
    if (movieGenres.includes(elem)) {
      count++
    }
  })
  if (movieGenres.length === count) return count
  else return 0
}