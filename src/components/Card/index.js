import React from 'react';
import './index.scss';
import Button from 'components/Button';

export default function Card({ movie, nominated, handleClick }) {
  const { Title, Poster , Year} = movie;
  const fallBackPoster =
    'https://img.yts.mx/assets/images/movies/synchronic_2019/medium-cover.jpg';
  return (
    <>
      <div className="card">
        <img src={Poster === 'N/A' ? fallBackPoster : Poster} alt="movie" />
        <div className="overlay">
          <i className="fa fa-star fa-lg"></i>
          <p>{(Math.floor(Math.random() * 10) + 1 )+ '/10'}</p>
          <h4>{Title}</h4>
          <p>{Year}</p>
          <Button
            textContent={nominated ? 'Remove' : 'Nominate'}
            buttonStyle="btn--default mt-3"
            handleClick={handleClick}
          />
        </div>
        <div className="card__footer"></div>
      </div>
    </>
  );
}
