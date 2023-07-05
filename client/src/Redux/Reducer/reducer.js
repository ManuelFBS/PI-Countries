import {
  GET_COUNTRIES,
  GET_COUNTRY_BY_ID,
  GET_BY_NAME,
  POST_ACTIVITY,
  GET_ALL_ACTIVITIES,
} from "../Actions/actions-types";

let initialState = {
  countries: [],
  countryFilteredByName: [],
  countryFilteredById: [],
  activityPost: [],
  activities: [],
  error: "",
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
      };
    case GET_COUNTRY_BY_ID:
      return {
        ...state,
        countryFilteredById: action.payload,
      };
    case GET_ALL_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
      };
      break;
    case GET_BY_NAME:
      return {
        ...state,
        countryFilteredByName: action.payload,
        error: "",
      };
      break;
    default:
      return state;
      break;
  }
}

export default rootReducer;
