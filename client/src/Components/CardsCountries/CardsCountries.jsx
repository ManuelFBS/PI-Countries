import React from "react";
import CardCountry from "../CardCountry/CardCountry";
import styled from "./CardsCountries.module.css";

const CardsCountries = ({ countries }) => {
  return (
    <div className={styled.cardsList}>
      {countries.map((country) => (
        <CardCountry
          key={country.id}
          id={country.id}
          name={country.name}
          flagImage={country.flagImage}
          continent={country.continent}
          capital={country.capital}
          subregion={country.subregion}
          area={country.area}
          population={country.population}
        />
      ))}
    </div>
  );
};

export default CardsCountries;
