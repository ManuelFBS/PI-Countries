const { Router } = require("express");
const getAllCountriesHandler = require("../handlers/getAllCountriesHandler");
const getCountryByIdHandler = require("../handlers/getCountryByIDHandler");

const countryRouter = Router();

countryRouter
  .get("/", getAllCountriesHandler)
  .get("/:id", getCountryByIdHandler);

module.exports = countryRouter;
