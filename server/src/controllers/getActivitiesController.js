const { Activity } = require("../db");

const getAllCountryActivities = async () => {
  const allActivities = await Activity.findAll({ order: [["name", "ASC"]] });

  if (!allActivities.length) {
    throw Error("There are no activities created");
  }
  return allActivities;
};

module.exports = getAllCountryActivities;
