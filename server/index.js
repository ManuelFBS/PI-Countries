// const axios = require("axios");
const server = require("./src/server");
const { conn, Country } = require("./src/db.js");
const loadDataDB = require("./loadApiDataInDB");
const PORT = 3001;

conn
  .sync({ force: false })
  .then(async () => {
    server.listen(PORT, async () => {
      console.log(`Server listening on port ${PORT}`);
      const allCountries = await Country.findAll();
      if (!allCountries.length) {
        loadDataDB();
        //
      } else {
        console.log("Database loaded");
      }
    });
  })
  .catch((error) => console.error(error));
