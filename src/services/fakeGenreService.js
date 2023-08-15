export const genres = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
  { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
  { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
];

export function getGenres() {
  return genres.filter((g) => g);
}

export function getGenere(name) {
  const result = genres.find((g) => g.name === name);
  return result;
}

export function saveGenre(name) {
  const newId = Math.random() * 1000000;
  const newGenre = { _id: newId, name: [name] };
  genres.push(newGenre);
  return newGenre;
}
