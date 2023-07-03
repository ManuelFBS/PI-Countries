import { Link } from "react-router-dom";
import styled from "./CardCountry.module.css";

const CardCountry = (country) => {
  const { id, name, flagImage, continent } = country;
  return (
    <Link to={`/detail/${id}`} className={styled.cardLink}>
      <div className={styled.cardContainer}>
        <div className={styled.divImgFlag}>
          <img src={flagImage} alt="flag" className={styled.imgF} />
        </div>
        <div className={styled.divTits}>
          <h3 className={styled.tits1}>Name: {name}</h3>
          <h3 className={styled.tits2}>Continent: {continent}</h3>
        </div>
      </div>
    </Link>
  );
};

export default CardCountry;
