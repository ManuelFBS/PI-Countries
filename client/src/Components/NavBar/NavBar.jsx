import React, { useEffect, useState } from "react";
import styled from "./NavBar.module.css";
import { Link } from "react-router-dom";
import { BY_CONTINENTS, BY_ACTIVITY } from "../../utils/Constants";

//
import { useDispatch } from "react-redux";
import { getCountryByName } from "../../Redux/Actions/actions";
//

const NavBar = () => {
  //
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    event.preventDefault();
    dispatch(getCountryByName(searchValue));
    setSearchValue("");
  };

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };
  //
  //
  return (
    <div className={styled.navB}>
      <form onSubmit={handleSearch}>
        <div className={styled.divForm}>
          <div>
            <Link to="/home" className={styled.linkBut}>
              <button type="submit" className={styled.allButtons}>
                Home
              </button>
            </Link>
            <Link to="/form" className={styled.linkBut}>
              <button type="submit" className={styled.allButtons}>
                Create
              </button>
            </Link>
          </div>

          <div className={styled.divSelect}>
            {/* FILTRO POR CONTINENTES... */}
            <select className={styled.sel}>
              <option disabled selected>
                Find by Continent...
              </option>
              {BY_CONTINENTS.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>

            {/* ORDENAMIENTO POR... */}
            <select className={styled.sel}>
              <option disabled selected>
                Order by...
              </option>
              <option>A-Z</option>
              <option>Z-A</option>
            </select>

            {/* FILTRO POR POBLACION... */}
            <select className={styled.sel}>
              <option disabled selected>
                Select by population...
              </option>
              <option>Higher population</option>
              <option>Lower population</option>
            </select>

            {/* FILTRO POR ACTIVIDAD... */}
            <select className={styled.sel}>
              <option disabled selected>
                Find by activity...
              </option>
              {BY_ACTIVITY.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div>
            <input
              type="search"
              placeholder="Search Country..."
              className={styled.searchInput}
              value={searchValue}
              onChange={handleInputChange}
            />
            <button type="submit" className={styled.allButtons}>
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NavBar;
