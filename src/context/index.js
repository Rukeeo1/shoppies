import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import Api from 'config/api';

//get createContext function from react
const MoviesContext = React.createContext();

//a normal react component
export const MoviesContextProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [nominatedMoviesList, setNominatedMoviesList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalResults, setTotalResults] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const history = useHistory();
  const [searchParams, setSearchParams] = useState('star')

  // React.useEffect(() => {}, [currentPage])

  const getMovies = async (searchValue) => {
    setLoading(true);
    try {
      const {
        data: { Search, totalResults, Error },
      } = await Api.get(
        `?s=${searchParams}&apikey=72c72c26&page=${currentPage}`
      );
      if (Search) {
        setMovies(Search);
        setTotalResults(totalResults);
      } else if (Error) {
        swal({ title: Error, icon: 'warning' });
      }
    } catch ({ message, status }) {
      alert(message);
    }
    setLoading(false);
  };

  const getNominatedMovies = () => {
    const movies = localStorage.getItem('nominatedMovies');
    setNominatedMoviesList(movies ? JSON.parse(movies) : []);
  };

  const nominateMovie = (movie) => {
    //check if movie exists in localstorage...
    const nominatedMovies = localStorage.getItem('nominatedMovies');
    if (nominatedMovies && JSON.parse(nominatedMovies).length >= 5) {
      swal({ title: 'you cant nominate more than 5 movies', icon: 'warning' });
      return;
    }

    if (!nominatedMovies) {
      localStorage.setItem('nominatedMovies', JSON.stringify([movie]));
      setNominatedMoviesList([movie]);
    } else {
      //check if the movie is not in the nominatedMovies list...
      const ifMovieExists = JSON.parse(nominatedMovies).find(
        (nominatedMovie) => nominatedMovie.imdbID === movie.imdbID
      );
      if (ifMovieExists) {
        swal({ title: `You've already nominated this movie`, icon: 'warning' });
      } else {
        const newNominatedMovies = [...JSON.parse(nominatedMovies), movie];
        localStorage.setItem(
          'nominatedMovies',
          JSON.stringify(newNominatedMovies)
        );
        setNominatedMoviesList(newNominatedMovies);
        history.push('/nominations');
      }
    }
  };

  const removeMovieFromNominations = (movieToRemove) => {
    const nominatedMovies = JSON.parse(localStorage.getItem('nominatedMovies'));
    const updatedMovieList = nominatedMovies.filter(
      (movie) => movieToRemove.imdbID !== movie.imdbID
    );
    console.log(updatedMovieList,'updated movies')
    localStorage.setItem('nominatedMovies', JSON.stringify(updatedMovieList));
    setNominatedMoviesList(updatedMovieList);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
  };

  const handleSearch = (searchParams) => {
    setSearchParams(searchParams)
    setCurrentPage(1)
  }
  

  return (
    <MoviesContext.Provider
      value={{
        movies,
        nominatedMoviesList,
        loading,
        currentPage,
        totalResults,
        searchParams,
        handlePageChange,
        handleSearch,
        getMovies,
        nominateMovie,
        removeMovieFromNominations,
        getNominatedMovies,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesContext;
