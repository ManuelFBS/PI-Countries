import React, { useState, useEffect } from "react";
import styled from "./Home.module.css";
import CardsCountries from "../../Components/CardsCountries/CardsCountries";
import { getAllCountries } from "../../Redux/Actions/actions";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();

  // const countries = useSelector((state) => state.countries);
  const countries = useSelector(
    (state) => state.filteredCountries || state.countries
  );

  const countryFilteredByName = useSelector(
    (state) => state.countryFilteredByName
  );

  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = 10;

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  useEffect(() => {
    setCurrentPage(1);
  }, [countryFilteredByName]);

  // CALCULA EL INDICE DEL ULTIMO PAIS A MOSTRAR Y DEL PRIMER PAIS EN CADA PAGINA...
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;

  const countriesToShow = countryFilteredByName.length
    ? countryFilteredByName.slice(indexOfFirstCountry, indexOfLastCountry)
    : countries.slice(indexOfFirstCountry, indexOfLastCountry);

  const handleGoToPage = (currentP) => {
    setCurrentPage(currentP);
  };

  const totalPages = Math.ceil(
    countryFilteredByName.length
      ? countryFilteredByName.length / countriesPerPage
      : countries.length / countriesPerPage
  );
  //

  // MUESTRA EL NUMERO DE PAGINAS Y LA PAGINA
  const currentPageNumber = currentPage > totalPages ? totalPages : currentPage;

  return (
    <div className={styled.container}>
      <div>
        {/* ACTUALIZA LA RENDERIZACION DE CardsCountries PARA MOSTRAR 
        SOLO LOS PAISES 'countriesToShow' EN LUGAR DE TODOS LOS PAISES: */}
        <CardsCountries countries={countriesToShow} />
      </div>
      {/* ---------------------------------------------------------------------------------------------- */}
      {/* // BOTONES DE NAVEGACION Y RETROCEDER ENTRE LAS PAGINAS... */}
      <div className={styled.divAllButons}>
        <button
          className={styled.firstButton}
          disabled={currentPage === 1}
          onClick={() => handleGoToPage(1)}
        >
          &#60;&#60;
        </button>

        <button
          className={styled.previousButton}
          disabled={currentPage === 1}
          onClick={() => handleGoToPage(currentPage - 1)}
        >
          &#60;
        </button>

        <span className={styled.spanNumb}>
          Page {currentPageNumber} of {totalPages}
        </span>

        <button
          className={styled.nextButton}
          disabled={currentPage === totalPages}
          onClick={() => handleGoToPage(currentPage + 1)}
        >
          &#62;
        </button>

        <button
          className={styled.lastButton}
          disabled={currentPage === totalPages}
          onClick={() => handleGoToPage(totalPages)}
        >
          &#62;&#62;
        </button>
      </div>
    </div>
  );
};

export default Home;
