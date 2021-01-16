import React, {useContext, useEffect} from 'react';
import MovieContext from 'context/';
import Card from 'components/Card';
import './index.scss';

export default function NominatedMovies() {
  const { removeMovieFromNominations, nominatedMoviesList, getNominatedMovies } = useContext(MovieContext);
  // const nominatedMovies = JSON.parse(localStorage.getItem('nominatedMovies'));
  useEffect(() => {
    getNominatedMovies();
  }, [])

  return (
    <div className="nominated__movies">
      {nominatedMoviesList.length > 1
        ? nominatedMoviesList.map((movie) => (
            <Card
              key={movie.imdbID}
              movie={movie}
              nominated
              handleClick={() => removeMovieFromNominations(movie)}
            />
          ))
        : null}
    </div>
  );
}
