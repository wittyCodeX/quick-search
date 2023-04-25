import { getFilteredMovies } from '../index'
import { Genre } from '../index.types'

describe('Generate top movies algorithm', () => {
  it('should return top matched movies when passed 3 genres', () => {
    const genres: Genre[] = ['Crime', 'Drama', 'Music']
    const expectedMoviesToBeFound = [
      {
        id: 2,
        title: 'The Cotton Club',
        year: '1984',
        runtime: '127',
        genres: ['Crime', 'Drama', 'Music'],
        director: 'Francis Ford Coppola',
        actors: 'Richard Gere, Gregory Hines, Diane Lane, Lonette McKee',
        plot: 'The Cotton Club was a famous night club in Harlem. The story follows the people that visited the club, those that ran it, and is peppered with the Jazz music that made it so famous.',
        posterUrl:
          'https://images-na.ssl-images-amazon.com/images/M/MV5BMTU5ODAyNzA4OV5BMl5BanBnXkFtZTcwNzYwNTIzNA@@._V1_SX300.jpg',
      },
      {
        id: 3,
        title: 'The Shawshank Redemption',
        year: '1994',
        runtime: '142',
        genres: ['Crime', 'Drama'],
        director: 'Frank Darabont',
        actors: 'Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler',
        plot: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
        posterUrl:
          'https://images-na.ssl-images-amazon.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SX300.jpg',
      },
      {
        id: 7,
        title: 'City of God',
        year: '2002',
        runtime: '130',
        genres: ['Crime', 'Drama'],
        director: 'Fernando Meirelles, Kátia Lund',
        actors: 'Alexandre Rodrigues, Leandro Firmino, Phellipe Haagensen, Douglas Silva',
        plot: 'Two boys growing up in a violent neighborhood of Rio de Janeiro take different paths: one becomes a photographer, the other a drug dealer.',
        posterUrl:
          'https://images-na.ssl-images-amazon.com/images/M/MV5BMjA4ODQ3ODkzNV5BMl5BanBnXkFtZTYwOTc4NDI3._V1_SX300.jpg',
      },
      {
        id: 12,
        title: 'Taxi Driver',
        year: '1976',
        runtime: '113',
        genres: ['Crime', 'Drama'],
        director: 'Martin Scorsese',
        actors: 'Diahnne Abbott, Frank Adu, Victor Argo, Gino Ardito',
        plot: 'A mentally unstable Vietnam War veteran works as a night-time taxi driver in New York City where the perceived decadence and sleaze feeds his urge for violent action, attempting to save a preadolescent prostitute in the process.',
        posterUrl:
          'https://images-na.ssl-images-amazon.com/images/M/MV5BNGQxNDgzZWQtZTNjNi00M2RkLWExZmEtNmE1NjEyZDEwMzA5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
      },
      {
        id: 19,
        title: 'Scarface',
        year: '1983',
        runtime: '170',
        genres: ['Crime', 'Drama'],
        director: 'Brian De Palma',
        actors: 'Al Pacino, Steven Bauer, Michelle Pfeiffer, Mary Elizabeth Mastrantonio',
        plot: 'In Miami in 1980, a determined Cuban immigrant takes over a drug cartel and succumbs to greed.',
        posterUrl:
          'https://images-na.ssl-images-amazon.com/images/M/MV5BMjAzOTM4MzEwNl5BMl5BanBnXkFtZTgwMzU1OTc1MDE@._V1_SX300.jpg',
      },
      {
        id: 30,
        title: 'Pulp Fiction',
        year: '1994',
        runtime: '154',
        genres: ['Crime', 'Drama'],
        director: 'Quentin Tarantino',
        actors: 'Tim Roth, Amanda Plummer, Laura Lovelace, John Travolta',
        plot: "The lives of two mob hit men, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        posterUrl:
          'https://images-na.ssl-images-amazon.com/images/M/MV5BMTkxMTA5OTAzMl5BMl5BanBnXkFtZTgwNjA5MDc3NjE@._V1_SX300.jpg',
      },
      {
        id: 71,
        title: 'American History X',
        year: '1998',
        runtime: '119',
        genres: ['Crime', 'Drama'],
        director: 'Tony Kaye',
        actors: "Edward Norton, Edward Furlong, Beverly D'Angelo, Jennifer Lien",
        plot: 'A former neo-nazi skinhead tries to prevent his younger brother from going down the same wrong path that he did.',
        posterUrl:
          'https://images-na.ssl-images-amazon.com/images/M/MV5BZjA0MTM4MTQtNzY5MC00NzY3LWI1ZTgtYzcxMjkyMzU4MDZiXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg',
      },
      {
        id: 88,
        title: 'Once Upon a Time in America',
        year: '1984',
        runtime: '229',
        genres: ['Crime', 'Drama'],
        director: 'Sergio Leone',
        actors: 'Robert De Niro, James Woods, Elizabeth McGovern, Joe Pesci',
        plot: 'A former Prohibition-era Jewish gangster returns to the Lower East Side of Manhattan over thirty years later, where he once again must confront the ghosts and regrets of his old life.',
        posterUrl:
          'https://images-na.ssl-images-amazon.com/images/M/MV5BMGFkNWI4MTMtNGQ0OC00MWVmLTk3MTktOGYxN2Y2YWVkZWE2XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
      },
      {
        id: 114,
        title: '12 Angry Men',
        year: '1957',
        runtime: '96',
        genres: ['Crime', 'Drama'],
        director: 'Sidney Lumet',
        actors: 'Martin Balsam, John Fiedler, Lee J. Cobb, E.G. Marshall',
        plot: 'A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.',
        posterUrl:
          'https://images-na.ssl-images-amazon.com/images/M/MV5BODQwOTc5MDM2N15BMl5BanBnXkFtZTcwODQxNTEzNA@@._V1_SX300.jpg',
      },
      {
        id: 139,
        title: 'Whiplash',
        year: '2014',
        runtime: '107',
        genres: ['Drama', 'Music'],
        director: 'Damien Chazelle',
        actors: 'Miles Teller, J.K. Simmons, Paul Reiser, Melissa Benoist',
        plot: "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential.",
        posterUrl:
          'https://images-na.ssl-images-amazon.com/images/M/MV5BMTU4OTQ3MDUyMV5BMl5BanBnXkFtZTgwOTA2MjU0MjE@._V1_SX300.jpg',
      },
      {
        id: 143,
        title: 'To Kill a Mockingbird',
        year: '1962',
        runtime: '129',
        genres: ['Crime', 'Drama'],
        director: 'Robert Mulligan',
        actors: 'Gregory Peck, John Megna, Frank Overton, Rosemary Murphy',
        plot: 'Atticus Finch, a lawyer in the Depression-era South, defends a black man against an undeserved rape charge, and his kids against prejudice.',
        posterUrl:
          'http://ia.media-imdb.com/images/M/MV5BMjA4MzI1NDY2Nl5BMl5BanBnXkFtZTcwMTcyODc5Mw@@._V1_SX300.jpg',
      },
      {
        id: 43,
        title: 'The Great Beauty',
        year: '2013',
        runtime: '141',
        genres: ['Drama'],
        director: 'Paolo Sorrentino',
        actors: 'Toni Servillo, Carlo Verdone, Sabrina Ferilli, Carlo Buccirosso',
        plot: 'Jep Gambardella has seduced his way through the lavish nightlife of Rome for decades, but after his 65th birthday and a shock from the past, Jep looks past the nightclubs and parties to find a timeless landscape of absurd, exquisite beauty.',
        posterUrl:
          'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ0ODg1OTQ2Nl5BMl5BanBnXkFtZTgwNTc2MDY1MDE@._V1_SX300.jpg',
      },
      {
        id: 44,
        title: 'Gran Torino',
        year: '2008',
        runtime: '116',
        genres: ['Drama'],
        director: 'Clint Eastwood',
        actors: 'Clint Eastwood, Christopher Carley, Bee Vang, Ahney Her',
        plot: "Disgruntled Korean War veteran Walt Kowalski sets out to reform his neighbor, a Hmong teenager who tried to steal Kowalski's prized possession: a 1972 Gran Torino.",
        posterUrl:
          'http://ia.media-imdb.com/images/M/MV5BMTQyMTczMTAxMl5BMl5BanBnXkFtZTcwOTc1ODE0Mg@@._V1_SX300.jpg',
      },
      {
        id: 47,
        title: "One Flew Over the Cuckoo's Nest",
        year: '1975',
        runtime: '133',
        genres: ['Drama'],
        director: 'Milos Forman',
        actors: 'Michael Berryman, Peter Brocco, Dean R. Brooks, Alonzo Brown',
        plot: 'A criminal pleads insanity after getting into trouble again and once in the mental institution rebels against the oppressive nurse and rallies up the scared patients.',
        posterUrl:
          'https://images-na.ssl-images-amazon.com/images/M/MV5BYmJkODkwOTItZThjZC00MTE0LWIxNzQtYTM3MmQwMGI1OWFiXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg',
      },
      {
        id: 48,
        title: 'Requiem for a Dream',
        year: '2000',
        runtime: '102',
        genres: ['Drama'],
        director: 'Darren Aronofsky',
        actors: 'Ellen Burstyn, Jared Leto, Jennifer Connelly, Marlon Wayans',
        plot: 'The drug-induced utopias of four Coney Island people are shattered when their addictions run deep.',
        posterUrl:
          'https://images-na.ssl-images-amazon.com/images/M/MV5BMTkzODMzODYwOF5BMl5BanBnXkFtZTcwODM2NjA2NQ@@._V1_SX300.jpg',
      },
      {
        id: 55,
        title: 'Lost in Translation',
        year: '2003',
        runtime: '101',
        genres: ['Drama'],
        director: 'Sofia Coppola',
        actors: 'Scarlett Johansson, Bill Murray, Akiko Takeshita, Kazuyoshi Minamimagoe',
        plot: 'A faded movie star and a neglected young woman form an unlikely bond after crossing paths in Tokyo.',
        posterUrl:
          'https://images-na.ssl-images-amazon.com/images/M/MV5BMTI2NDI5ODk4N15BMl5BanBnXkFtZTYwMTI3NTE3._V1_SX300.jpg',
      },
      {
        id: 113,
        title: 'Boyhood',
        year: '2014',
        runtime: '165',
        genres: ['Drama'],
        director: 'Richard Linklater',
        actors: 'Ellar Coltrane, Patricia Arquette, Elijah Smith, Lorelei Linklater',
        plot: 'The life of Mason, from early childhood to his arrival at college.',
        posterUrl:
          'https://images-na.ssl-images-amazon.com/images/M/MV5BMTYzNDc2MDc0N15BMl5BanBnXkFtZTgwOTcwMDQ5MTE@._V1_SX300.jpg',
      },
    ]
    const foundMovies = getFilteredMovies({ genres })
    expect(foundMovies).toEqual(expectedMoviesToBeFound)
  })
  it('should return top matched movies when passed 2 genres', () => {
    const genres: Genre[] = ['Crime', 'Drama']
    const expectedMoviesToBeFound = [
      {
        id: 3,
        title: 'The Shawshank Redemption',
        year: '1994',
        runtime: '142',
        genres: ['Crime', 'Drama'],
        director: 'Frank Darabont',
        actors: 'Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler',
        plot: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
        posterUrl:
          'https://images-na.ssl-images-amazon.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SX300.jpg',
      },
      {
        id: 7,
        title: 'City of God',
        year: '2002',
        runtime: '130',
        genres: ['Crime', 'Drama'],
        director: 'Fernando Meirelles, Kátia Lund',
        actors: 'Alexandre Rodrigues, Leandro Firmino, Phellipe Haagensen, Douglas Silva',
        plot: 'Two boys growing up in a violent neighborhood of Rio de Janeiro take different paths: one becomes a photographer, the other a drug dealer.',
        posterUrl:
          'https://images-na.ssl-images-amazon.com/images/M/MV5BMjA4ODQ3ODkzNV5BMl5BanBnXkFtZTYwOTc4NDI3._V1_SX300.jpg',
      },
      {
        id: 12,
        title: 'Taxi Driver',
        year: '1976',
        runtime: '113',
        genres: ['Crime', 'Drama'],
        director: 'Martin Scorsese',
        actors: 'Diahnne Abbott, Frank Adu, Victor Argo, Gino Ardito',
        plot: 'A mentally unstable Vietnam War veteran works as a night-time taxi driver in New York City where the perceived decadence and sleaze feeds his urge for violent action, attempting to save a preadolescent prostitute in the process.',
        posterUrl:
          'https://images-na.ssl-images-amazon.com/images/M/MV5BNGQxNDgzZWQtZTNjNi00M2RkLWExZmEtNmE1NjEyZDEwMzA5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
      },
      {
        id: 19,
        title: 'Scarface',
        year: '1983',
        runtime: '170',
        genres: ['Crime', 'Drama'],
        director: 'Brian De Palma',
        actors: 'Al Pacino, Steven Bauer, Michelle Pfeiffer, Mary Elizabeth Mastrantonio',
        plot: 'In Miami in 1980, a determined Cuban immigrant takes over a drug cartel and succumbs to greed.',
        posterUrl:
          'https://images-na.ssl-images-amazon.com/images/M/MV5BMjAzOTM4MzEwNl5BMl5BanBnXkFtZTgwMzU1OTc1MDE@._V1_SX300.jpg',
      },
      {
        id: 30,
        title: 'Pulp Fiction',
        year: '1994',
        runtime: '154',
        genres: ['Crime', 'Drama'],
        director: 'Quentin Tarantino',
        actors: 'Tim Roth, Amanda Plummer, Laura Lovelace, John Travolta',
        plot: "The lives of two mob hit men, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        posterUrl:
          'https://images-na.ssl-images-amazon.com/images/M/MV5BMTkxMTA5OTAzMl5BMl5BanBnXkFtZTgwNjA5MDc3NjE@._V1_SX300.jpg',
      },
      {
        id: 71,
        title: 'American History X',
        year: '1998',
        runtime: '119',
        genres: ['Crime', 'Drama'],
        director: 'Tony Kaye',
        actors: "Edward Norton, Edward Furlong, Beverly D'Angelo, Jennifer Lien",
        plot: 'A former neo-nazi skinhead tries to prevent his younger brother from going down the same wrong path that he did.',
        posterUrl:
          'https://images-na.ssl-images-amazon.com/images/M/MV5BZjA0MTM4MTQtNzY5MC00NzY3LWI1ZTgtYzcxMjkyMzU4MDZiXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg',
      },
      {
        id: 88,
        title: 'Once Upon a Time in America',
        year: '1984',
        runtime: '229',
        genres: ['Crime', 'Drama'],
        director: 'Sergio Leone',
        actors: 'Robert De Niro, James Woods, Elizabeth McGovern, Joe Pesci',
        plot: 'A former Prohibition-era Jewish gangster returns to the Lower East Side of Manhattan over thirty years later, where he once again must confront the ghosts and regrets of his old life.',
        posterUrl:
          'https://images-na.ssl-images-amazon.com/images/M/MV5BMGFkNWI4MTMtNGQ0OC00MWVmLTk3MTktOGYxN2Y2YWVkZWE2XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
      },
      {
        id: 114,
        title: '12 Angry Men',
        year: '1957',
        runtime: '96',
        genres: ['Crime', 'Drama'],
        director: 'Sidney Lumet',
        actors: 'Martin Balsam, John Fiedler, Lee J. Cobb, E.G. Marshall',
        plot: 'A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.',
        posterUrl:
          'https://images-na.ssl-images-amazon.com/images/M/MV5BODQwOTc5MDM2N15BMl5BanBnXkFtZTcwODQxNTEzNA@@._V1_SX300.jpg',
      },
      {
        id: 143,
        title: 'To Kill a Mockingbird',
        year: '1962',
        runtime: '129',
        genres: ['Crime', 'Drama'],
        director: 'Robert Mulligan',
        actors: 'Gregory Peck, John Megna, Frank Overton, Rosemary Murphy',
        plot: 'Atticus Finch, a lawyer in the Depression-era South, defends a black man against an undeserved rape charge, and his kids against prejudice.',
        posterUrl:
          'http://ia.media-imdb.com/images/M/MV5BMjA4MzI1NDY2Nl5BMl5BanBnXkFtZTcwMTcyODc5Mw@@._V1_SX300.jpg',
      },
      {
        id: 43,
        title: 'The Great Beauty',
        year: '2013',
        runtime: '141',
        genres: ['Drama'],
        director: 'Paolo Sorrentino',
        actors: 'Toni Servillo, Carlo Verdone, Sabrina Ferilli, Carlo Buccirosso',
        plot: 'Jep Gambardella has seduced his way through the lavish nightlife of Rome for decades, but after his 65th birthday and a shock from the past, Jep looks past the nightclubs and parties to find a timeless landscape of absurd, exquisite beauty.',
        posterUrl:
          'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ0ODg1OTQ2Nl5BMl5BanBnXkFtZTgwNTc2MDY1MDE@._V1_SX300.jpg',
      },
      {
        id: 44,
        title: 'Gran Torino',
        year: '2008',
        runtime: '116',
        genres: ['Drama'],
        director: 'Clint Eastwood',
        actors: 'Clint Eastwood, Christopher Carley, Bee Vang, Ahney Her',
        plot: "Disgruntled Korean War veteran Walt Kowalski sets out to reform his neighbor, a Hmong teenager who tried to steal Kowalski's prized possession: a 1972 Gran Torino.",
        posterUrl:
          'http://ia.media-imdb.com/images/M/MV5BMTQyMTczMTAxMl5BMl5BanBnXkFtZTcwOTc1ODE0Mg@@._V1_SX300.jpg',
      },
      {
        id: 47,
        title: "One Flew Over the Cuckoo's Nest",
        year: '1975',
        runtime: '133',
        genres: ['Drama'],
        director: 'Milos Forman',
        actors: 'Michael Berryman, Peter Brocco, Dean R. Brooks, Alonzo Brown',
        plot: 'A criminal pleads insanity after getting into trouble again and once in the mental institution rebels against the oppressive nurse and rallies up the scared patients.',
        posterUrl:
          'https://images-na.ssl-images-amazon.com/images/M/MV5BYmJkODkwOTItZThjZC00MTE0LWIxNzQtYTM3MmQwMGI1OWFiXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg',
      },
      {
        id: 48,
        title: 'Requiem for a Dream',
        year: '2000',
        runtime: '102',
        genres: ['Drama'],
        director: 'Darren Aronofsky',
        actors: 'Ellen Burstyn, Jared Leto, Jennifer Connelly, Marlon Wayans',
        plot: 'The drug-induced utopias of four Coney Island people are shattered when their addictions run deep.',
        posterUrl:
          'https://images-na.ssl-images-amazon.com/images/M/MV5BMTkzODMzODYwOF5BMl5BanBnXkFtZTcwODM2NjA2NQ@@._V1_SX300.jpg',
      },
      {
        id: 55,
        title: 'Lost in Translation',
        year: '2003',
        runtime: '101',
        genres: ['Drama'],
        director: 'Sofia Coppola',
        actors: 'Scarlett Johansson, Bill Murray, Akiko Takeshita, Kazuyoshi Minamimagoe',
        plot: 'A faded movie star and a neglected young woman form an unlikely bond after crossing paths in Tokyo.',
        posterUrl:
          'https://images-na.ssl-images-amazon.com/images/M/MV5BMTI2NDI5ODk4N15BMl5BanBnXkFtZTYwMTI3NTE3._V1_SX300.jpg',
      },
      {
        id: 113,
        title: 'Boyhood',
        year: '2014',
        runtime: '165',
        genres: ['Drama'],
        director: 'Richard Linklater',
        actors: 'Ellar Coltrane, Patricia Arquette, Elijah Smith, Lorelei Linklater',
        plot: 'The life of Mason, from early childhood to his arrival at college.',
        posterUrl:
          'https://images-na.ssl-images-amazon.com/images/M/MV5BMTYzNDc2MDc0N15BMl5BanBnXkFtZTgwOTcwMDQ5MTE@._V1_SX300.jpg',
      },
    ]
    const foundMovies = getFilteredMovies({ genres })
    expect(foundMovies).toEqual(expectedMoviesToBeFound)
  })
  it('should return top matched movies when passed 1 genre', () => {
    const genres: Genre[] = ['Drama']
    const expectedMoviesToBeFound = [
      {
        id: 43,
        title: 'The Great Beauty',
        year: '2013',
        runtime: '141',
        genres: ['Drama'],
        director: 'Paolo Sorrentino',
        actors: 'Toni Servillo, Carlo Verdone, Sabrina Ferilli, Carlo Buccirosso',
        plot: 'Jep Gambardella has seduced his way through the lavish nightlife of Rome for decades, but after his 65th birthday and a shock from the past, Jep looks past the nightclubs and parties to find a timeless landscape of absurd, exquisite beauty.',
        posterUrl:
          'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ0ODg1OTQ2Nl5BMl5BanBnXkFtZTgwNTc2MDY1MDE@._V1_SX300.jpg',
      },
      {
        id: 44,
        title: 'Gran Torino',
        year: '2008',
        runtime: '116',
        genres: ['Drama'],
        director: 'Clint Eastwood',
        actors: 'Clint Eastwood, Christopher Carley, Bee Vang, Ahney Her',
        plot: "Disgruntled Korean War veteran Walt Kowalski sets out to reform his neighbor, a Hmong teenager who tried to steal Kowalski's prized possession: a 1972 Gran Torino.",
        posterUrl:
          'http://ia.media-imdb.com/images/M/MV5BMTQyMTczMTAxMl5BMl5BanBnXkFtZTcwOTc1ODE0Mg@@._V1_SX300.jpg',
      },
      {
        id: 47,
        title: "One Flew Over the Cuckoo's Nest",
        year: '1975',
        runtime: '133',
        genres: ['Drama'],
        director: 'Milos Forman',
        actors: 'Michael Berryman, Peter Brocco, Dean R. Brooks, Alonzo Brown',
        plot: 'A criminal pleads insanity after getting into trouble again and once in the mental institution rebels against the oppressive nurse and rallies up the scared patients.',
        posterUrl:
          'https://images-na.ssl-images-amazon.com/images/M/MV5BYmJkODkwOTItZThjZC00MTE0LWIxNzQtYTM3MmQwMGI1OWFiXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg',
      },
      {
        id: 48,
        title: 'Requiem for a Dream',
        year: '2000',
        runtime: '102',
        genres: ['Drama'],
        director: 'Darren Aronofsky',
        actors: 'Ellen Burstyn, Jared Leto, Jennifer Connelly, Marlon Wayans',
        plot: 'The drug-induced utopias of four Coney Island people are shattered when their addictions run deep.',
        posterUrl:
          'https://images-na.ssl-images-amazon.com/images/M/MV5BMTkzODMzODYwOF5BMl5BanBnXkFtZTcwODM2NjA2NQ@@._V1_SX300.jpg',
      },
      {
        id: 55,
        title: 'Lost in Translation',
        year: '2003',
        runtime: '101',
        genres: ['Drama'],
        director: 'Sofia Coppola',
        actors: 'Scarlett Johansson, Bill Murray, Akiko Takeshita, Kazuyoshi Minamimagoe',
        plot: 'A faded movie star and a neglected young woman form an unlikely bond after crossing paths in Tokyo.',
        posterUrl:
          'https://images-na.ssl-images-amazon.com/images/M/MV5BMTI2NDI5ODk4N15BMl5BanBnXkFtZTYwMTI3NTE3._V1_SX300.jpg',
      },
      {
        id: 113,
        title: 'Boyhood',
        year: '2014',
        runtime: '165',
        genres: ['Drama'],
        director: 'Richard Linklater',
        actors: 'Ellar Coltrane, Patricia Arquette, Elijah Smith, Lorelei Linklater',
        plot: 'The life of Mason, from early childhood to his arrival at college.',
        posterUrl:
          'https://images-na.ssl-images-amazon.com/images/M/MV5BMTYzNDc2MDc0N15BMl5BanBnXkFtZTgwOTcwMDQ5MTE@._V1_SX300.jpg',
      },
    ]
    const foundMovies = getFilteredMovies({ genres })
    expect(foundMovies).toEqual(expectedMoviesToBeFound)
  })

  it('should return random movie when empty array provided', () => {
    const foundMovies = getFilteredMovies({ genres: [] })
    expect(foundMovies).toHaveLength(1)
  })
})
