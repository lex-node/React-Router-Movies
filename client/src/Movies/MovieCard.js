import React from 'react';
import {Link} from "react-router-dom";

const MovieCard = movie => {
  const {title, director, metascore, stars} = movie;
  return (
      <div className="movie-card">
        <Link to={`/movies/${movie.id}`}>
          <h2>{title}</h2>
          <div className="movie-director">
            Director: <em>{director}</em>
          </div>
          <div className="movie-metascore">
            Metascore: <strong>{metascore}</strong>
          </div>
          <h3>Actors</h3>

          {stars.map(star => (
              <div key={star} className="movie-star">
                {star}
              </div>
          ))}
        </Link>
      </div>
  );
};

export default MovieCard;


/*### Refactor so that our code is DRY.

You may notice that we are using essentially the same exact JSX code in the `Movie` component and the `MovieDetails` component in
 `MovieList.js` create a new component in `MovieCard.js` that returns this JSX code. Then remove the old code from `Movie` and `MovieDetails` and
 instead return the new `MovieCard` component.*/






