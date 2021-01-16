import React from 'react';
import Spinner from 'assets/svgs/loader.svg'
import './index.scss';

export default function Button({
  textContent,
  buttonStyle,
  handleClick,
  disabled = false,
  iconLeft,
  iconRight,
  loading = false,
  type,
}) {
  return (
    <button
      onClick={(e) => handleClick(e)}
      className={`btn ${buttonStyle}`}
      disabled={disabled}
      type={type}
    >
      {loading ? (
        <span>{<img src={Spinner} alt="spinner" width="20px" />}</span>
      ) : (
        <div className="d-flex align-items-center justify-content-center">
          {iconLeft && (
            <span className="pr-2 btn__icon">
              <img src={iconLeft} alt="icon" />
            </span>
          )}
          <span>{textContent}</span>
          {iconRight && (
            <span className="ml-2">
              <img src={iconRight} alt="icon" />
            </span>
          )}
        </div>
      )}
    </button>
  );
}
