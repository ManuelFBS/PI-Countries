const getAllCountryActivities = require("../controllers/getActivitiesController");

const getAllActivities = async (req, res) => {
  try {
    const response = await getAllCountryActivities();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getAllActivities;
