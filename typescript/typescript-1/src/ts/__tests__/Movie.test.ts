import Movie from '../domain/Movie';

test('new card should be empty', () => {
  const movie = {
    id: 1010,
    name: 'Avengers',
    price: 1000,
    productionYear: 2018,
    country: 'USA',
    genre: 'fantastic',
    tagline: 'An entire universe. Once and for all',
  }

  expect(new Movie(1010, 'Avengers', 1000, 2018, 'USA', 'fantastic', 'An entire universe. Once and for all')).toEqual(movie);
});