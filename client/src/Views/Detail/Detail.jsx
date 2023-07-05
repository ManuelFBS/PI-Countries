import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { getCountryById } from "../../Redux/Actions/actions";
import styled from "./Detail.module.css";

const Detail = (country) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const countryFilteredById = useSelector((state) => state.countryFilteredById);

  useEffect(() => {
    dispatch(getCountryById(id));
  }, [dispatch, id]);

  return (
    <div className={styled.container}>
      <div className={styled.divflagAndInfo}>
        <div className={styled.divFlagImage}>
          <img src={countryFilteredById.flagImage} className={styled.flag} />
        </div>
        <div className={styled.divInfoCountry}>
          <h2 className={styled.tit1}>{countryFilteredById.name}</h2>
          <h3>ID: {countryFilteredById.id}</h3>
          <h3>Capital: {countryFilteredById.capital}</h3>
          <h3>Continent: {countryFilteredById.continent}</h3>
          <h3>Subregion: {countryFilteredById.subregion}</h3>
          <h3>
            Area:{" "}
            {new Intl.NumberFormat("es-Es").format(countryFilteredById.area)}{" "}
            km²
          </h3>
          <h3>
            Population:{" "}
            {new Intl.NumberFormat("es-ES").format(
              countryFilteredById.population
            )}{" "}
            hab.
          </h3>
        </div>
      </div>

      <div className={styled.divInfoActivities}>
        <h2>Activities:</h2>
        {countryFilteredById.Activities &&
          countryFilteredById.Activities.map((activity) => (
            <div>
              <h3>Name: {activity.name}</h3>
              <h3>Difficulty: {activity.difficulty}</h3>
              <h3>Duration: {activity.duration}</h3>
              <h3>Season: {activity.season}</h3>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Detail;
