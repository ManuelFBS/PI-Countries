import React, { useEffect, useState } from "react";
import styled from "./NavBar.module.css";
import { Link } from "react-router-dom";
import { BY_CONTINENTS, BY_ACTIVITY } from "../../utils/Constants";
import { useDispatch } from "react-redux";
import {
  getCountryByName,
  filterByContinents,
  orderAscDsc,
  orderByPop,
  filterByActivities,
} from "../../Redux/Actions/actions";

const NavBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();

  const handleFilter = (event) => {
    const continent = event.target.value;
    dispatch(filterByContinents(continent));
  };

  const handleSearch = (event) => {
    event.preventDefault();
    dispatch(getCountryByName(searchValue));
    setSearchValue("");
  };

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleOrderAscDsc = (event) => {
    const order = event.target.value;
    dispatch(orderAscDsc(order));
  };

  const handleOrderByPopulation = (event) => {
    const orderByP = event.target.value;
    dispatch(orderByPop(orderByP));
  };

  const handleSelectChange = (event) => {
    const selectedActivity = event.target.value;
    dispatch(filterByActivities(selectedActivity));
  };

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
            <select className={styled.sel} onChange={handleFilter}>
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
            <select className={styled.sel} onChange={handleOrderAscDsc}>
              <option disabled selected>
                Order by...
              </option>
              <option>A-Z</option>
              <option>Z-A</option>
            </select>

            {/* FILTRO POR POBLACION... */}
            <select className={styled.sel} onChange={handleOrderByPopulation}>
              <option disabled selected>
                Select by population...
              </option>
              <option value={"lowerToHigher"}>Lower to higher</option>
              <option value={"higherToLower"}>Higher to lower</option>
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
