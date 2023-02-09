/** @format */

import Card from "./Card.jsx";

export default function MovieList(propsMovie) {
  return (
    <div className="movie">
      {propsMovie.movies.map((movie) => (
        <Card key={movie.imdbID} {...movie} />
      ))}
    </div>
  );
}
