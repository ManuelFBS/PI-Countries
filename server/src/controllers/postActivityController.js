const { Country, Activity } = require("../db");

const createActivityDB = async (
  id,
  name,
  difficulty,
  duration,
  season,
  country
) => {
  const postActivity = await Activity.create({
    id,
    name,
    difficulty,
    duration,
    season,
  });

  const activityAdd = await Country.findAll({
    where: { name: country },
  });
  await postActivity.addCountry(activityAdd);

  return postActivity;
};
// const createActivityDB = async (name, difficulty, duration, season, id) => {
//   const postActivity = await Activity.create({
//     name,
//     difficulty,
//     duration,
//     season,
//   });
//   await postActivity.setCountries(id);

//   const countryAndActivity = await Activity.findOne({
//     where: { name: name },
//     attributes: {
//       exclude: ["updateAt", "createAt"],
//     },
//     include: {
//       model: Country,
//       through: {
//         attributes: [],
//       },
//     },
//   });

//   return countryAndActivity;
// };

module.exports = createActivityDB;
