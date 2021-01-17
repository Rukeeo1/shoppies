import React, { useEffect, useContext } from 'react';
import Card from 'components/Card';
import MovieContext from 'context/';
import Pagination from 'react-js-pagination';
import Loader from 'components/Loader';
import './index.scss';

export default function Home() {
  const {
    getMovies,
    movies,
    nominateMovie,
    loading,
    currentPage,
    totalResults,
    handlePageChange,
    searchParams,
  } = useContext(MovieContext);

  useEffect(() => {
    getMovies();
  }, [searchParams, currentPage]);

  return (
    <div className="home">
      <p className="intro">
        This is my submission for the Shopify Take Home Assignment for
        Frontend Interns. Hover over any of the movies to Nominate your favorite
        Movie. Click on Nominations on the navigation, to see the lists of
        nominated movies. You can only nominate 5 movies and you can't nominate
        the same movie twice. Use the Search bar to search for a movie of your
        choice.
      </p>

      <div className="home__main">
        {loading ? (
          <Loader />
        ) : (
          movies?.map((movie) => (
            <Card
              key={movie.imdbID}
              movie={movie}
              handleClick={() => nominateMovie(movie)}
            />
          ))
        )}
      </div>
      <div className="pagination">
        <Pagination
          activePage={currentPage}
          itemsCountPerPage={10}
          prevPageText={<i className="fa fa-caret-left"></i>}
          nextPageText={<i className="fa fa-caret-right"></i>}
          lastPageText={' '}
          firstPageText={' '}
          totalItemsCount={totalResults}
          pageRangeDisplayed={5}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
}
