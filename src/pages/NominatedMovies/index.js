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
      {nominatedMoviesList.length > 0
        ? nominatedMoviesList.map((movie) => (
            <Card
              key={movie.imdbID}
              movie={movie}
              nominated
              handleClick={() => removeMovieFromNominations(movie)}
            />
          ))
        : <div className="d-flex align-items-center justify-content-center" style={{height:150, color:'white'}}>
          <p>You haven't nominated any movies yet</p>
          </div>}
    </div>
  );
}
