const createActivityDB = require("../controllers/postActivityController");

const postActivityHandler = async (req, res) => {
  const { id, name, difficulty, duration, season, country } = req.body;

  try {
    const response = await createActivityDB(
      id,
      name,
      difficulty,
      duration,
      season,
      country
    );
    res.status(201).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
// const postActivityHandler = async (req, res) => {
//   const { name, difficulty, duration, season, id } = req.body;

//   try {
//     const response = await createActivityDB(
//       name,
//       difficulty,
//       duration,
//       season,
//       id
//     );
//     res.status(201).json(response);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

module.exports = postActivityHandler;
