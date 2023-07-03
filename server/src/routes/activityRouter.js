const { Router } = require("express");
const postActivityHandler = require("../handlers/postActivityHandler");
const getAllActivities = require("../handlers/getActivitiesHandler");

const activityRouter = Router();

activityRouter.post("/", postActivityHandler).get("/", getAllActivities);

module.exports = activityRouter;
