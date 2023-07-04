import {
  GET_COUNTRIES,
  GET_COUNTRY_BY_ID,
  FILTER_BY_NAME,
  POST_ACTIVITY,
  GET_ALL_ACTIVITIES,
  FAILURE,
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
      const response = await axios.get(`${connect.urlIdOrName}?name=${name}`);
      return dispatch({
        type: FILTER_BY_NAME,
        payload: response.data,
      });
    } catch (error) {
      return dispatch({
        type: FAILURE,
        payload: error.response.data.msg,
      });
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
      dispatch({ type: POST_ACTIVITY, payload: "" });
    } catch (error) {
      alert(error.message);
    }
  };
}

// export function filters(name) {
//   return async function (dispatch) {
//     const response = await axios.get(`${connect.urlBack}/countries/`, name);
//     dispatch({
//       // type: FILTER_BY_NAME,
//       // payload: name,
//     });
//   };
// }

export function ordering(order) {}
