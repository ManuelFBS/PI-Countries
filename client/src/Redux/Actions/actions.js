import {
  GET_COUNTRIES,
  GET_COUNTRY_BY_ID,
  GET_BY_NAME,
  POST_ACTIVITY,
  GET_ALL_ACTIVITIES,
  FILTER_BY_CONTINENTS,
  FILTER_BY_ACTIVITIES,
  ORDER_ASC_DSC,
  ORDER_BY_POP,
} from "./actions-types";
import axios from "axios";
import { connect } from "../../Connections/urlConn";

export function getAllCountries() {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${connect.urlAllCountries}/countries/`);
      return dispatch({
        type: GET_COUNTRIES,
        payload: response.data,
      });
    } catch (error) {
      alert(error.message);
    }
  };
}

export function getCountryById(id) {
  return async function (dispatch) {
    try {
      const response = await axios.get(`${connect.urlIdOrName}/${id}`);
      dispatch({
        type: GET_COUNTRY_BY_ID,
        payload: response.data,
      });
    } catch (error) {
      alert(error.message);
    }
  };
}

export function getCountryByName(name) {
  return async function (dispatch) {
    try {
      const response = await axios.get(`${connect.urlIdOrName}/?name=${name}`);
      return dispatch({
        type: GET_BY_NAME,
        payload: response.data,
      });
    } catch (error) {
      alert("Country not found...");
    }
  };
}

export function getAllActivities() {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${connect.urlActivities}`);
      return dispatch({
        type: GET_ALL_ACTIVITIES,
        payload: response.data,
      });
    } catch (error) {
      alert(error.message);
    }
  };
}

export function postActivity(info) {
  return async function (dispatch) {
    try {
      const response = await axios.post(`${connect.urlActivities}/`, info);
      alert("The activity has been created successfully...!");
      return dispatch({ type: POST_ACTIVITY, payload: "" });
    } catch (error) {
      alert(error.message);
    }
  };
}

export const filterByContinents = (continent) => {
  return {
    type: FILTER_BY_CONTINENTS,
    payload: continent,
  };
};

export const orderAscDsc = (orderBy) => {
  return {
    type: ORDER_ASC_DSC,
    payload: orderBy,
  };
};

export const orderByPop = (orderBy) => {
  return {
    type: ORDER_BY_POP,
    payload: orderBy,
  };
};

export const filterByActivities = () => {
  return {
    type: FILTER_BY_ACTIVITIES,
    payload: selectedActivity,
  };
};
