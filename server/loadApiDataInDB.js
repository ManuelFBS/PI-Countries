const axios = require("axios");
const { Country } = require("./src/db");

const loadDataDB = async () => {
  const allCountries = await Country.findAll();
  if (!allCountries.length) {
    const apiResponse = await axios.get("http://localhost:5000/countries");
    let apiCountries = apiResponse.data.map((elem) => {
      return {
        id: elem.cca3,
        name: elem.name.common,
        flagImage: elem.flags.png,
        continent: elem.continents[0],
        capital: elem.capital ? elem.capital[0] : "Not found",
        subregion: elem.subregion ? elem.subregion : "No tiene subregión",
        area: elem.area,
        population: elem.population,
        maps: elem.maps.openStreetMaps,
      };
    });
    await Country.bulkCreate(apiCountries);
    console.log("Database has been loaded");
  }
};

module.exports = loadDataDB;
