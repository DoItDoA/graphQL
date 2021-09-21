import {
  nicolas,
  people,
  getPeopleById,
  getMovies,
  getMovieById,
  addMovie,
  deleteMovie,
} from "./db";

const resolvers = {
  Query: {
    name: () => "nico",
    person: () => nicolas,
    people: () => people,
    human: (_, { id }) => getPeopleById(id), // 첫번째 인자는 root를 가리키고 두번째가 입력 인자이다
    movies: () => getMovies(),
    movie: (_, { id }) => getMovieById(id),
  },
  Mutation: {
    addMovie: (_, { name, score }) => addMovie(name, score),
    deleteMovie: (_, { id }) => deleteMovie(id),
  },
};

export default resolvers;
