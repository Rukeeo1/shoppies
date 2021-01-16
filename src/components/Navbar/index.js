import React, { useContext } from 'react';
import { DebounceInput } from 'react-debounce-input';
import Input from 'components/Input';
import MovieContext from 'context/';
import { NavLink } from 'react-router-dom';
import './index.scss';

export default function Navbar() {
  const { handleSearch} = useContext(MovieContext);
  const renderSearchInput = (props) => (
    <Input placeholder="Search" className="input" {...props} />
  );
  return (
    <nav className="nav-bar">
      <NavLink
        to="/"
        activeClassName="nav-bar__active"
        className="nav-bar__nav-link"
        exact={true}
      >
        <h1 className="nav-bar__logo">Shoppies</h1>
      </NavLink>
      <DebounceInput
        debounceTimeout={300}
        element={renderSearchInput}
        //onChange={(e) => getMovies(e.target.value || 'star')} //if the input is clear, then use the default starrt search...
        onChange={(e) => handleSearch(e.target.value || 'star')}
      />
      <NavLink
        to="/"
        activeClassName="nav-bar__active"
        className="nav-bar__nav-link"
        exact={true}
      >
        Home
      </NavLink>
      <NavLink
        to="/nominations"
        activeClassName="nav-bar__active"
        className="nav-bar__nav-link"
      >
        View Nominations
      </NavLink>
    </nav>
  );
}
