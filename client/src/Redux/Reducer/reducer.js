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
} from "../Actions/actions-types";

let initialState = {
  countries: [],
  countryFilteredByName: [],
  countryFilteredById: [],
  activityPost: [],
  activities: [],
  filteredCountries: null,
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
    case GET_BY_NAME:
      return {
        ...state,
        countryFilteredByName: action.payload,
        error: "",
      };
    case FILTER_BY_CONTINENTS:
      const allCountriesFiltered =
        action.payload === "All Continents"
          ? null
          : state.countries.filter(
              (country) => country.continent === action.payload
            );
      //
      return {
        ...state,
        filteredCountries: allCountriesFiltered,
      };
    case ORDER_ASC_DSC:
      const orderBy = action.payload;

      if (state.filteredCountries && state.filteredCountries.length > 0) {
        if (orderBy === "A-Z") {
          const countriesNameAsc = [...state.filteredCountries].sort(function (
            a,
            b
          ) {
            if (a.name.toLowerCase() < b.name.toLowerCase()) {
              return -1;
            }
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
              return 1;
            }
            return 0;
          });
          return {
            ...state,
            filteredCountries: countriesNameAsc,
          };
        }

        if (orderBy === "Z-A") {
          const countriesNameDesc = [...state.filteredCountries].sort(function (
            a,
            b
          ) {
            if (a.name.toLowerCase() < b.name.toLowerCase()) {
              return 1;
            }
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
              return -1;
            }
            return 0;
          });
          return {
            ...state,
            filteredCountries: countriesNameDesc,
          };
        }
      } else {
        if (orderBy === "A-Z") {
          const countriesNameAsc = [...state.countries].sort(function (a, b) {
            if (a.name.toLowerCase() < b.name.toLowerCase()) {
              return -1;
            }
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
              return 1;
            }
            return 0;
          });
          return {
            ...state,
            filteredCountries: countriesNameAsc,
          };
        }

        if (orderBy === "Z-A") {
          const countriesNameDesc = [...state.countries].sort(function (a, b) {
            if (a.name.toLowerCase() < b.name.toLowerCase()) {
              return 1;
            }
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
              return -1;
            }
            return 0;
          });
          return {
            ...state,
            filteredCountries: countriesNameDesc,
          };
        }
      }
    case ORDER_BY_POP:
      const orderByPopulation = action.payload;
      if (state.filteredCountries && state.filteredCountries.length > 0) {
        if (orderByPopulation === "lowerToHigher") {
          const lowerToHigher = [...state.filteredCountries].sort(function (
            a,
            b
          ) {
            return a.population - b.population;
          });

          return {
            ...state,
            filteredCountries: lowerToHigher,
          };
        }

        if (orderByPopulation === "higherToLower") {
          const higherToLower = [...state.filteredCountries].sort(function (
            a,
            b
          ) {
            return b.population - a.population;
          });

          return {
            ...state,
            filteredCountries: higherToLower,
          };
        }
      } else {
        if (orderByPopulation === "lowerToHigher") {
          const lowerToHigher = [...state.countries].sort(function (a, b) {
            return a.population - b.population;
          });

          return {
            ...state,
            filteredCountries: lowerToHigher,
          };
        }

        if (orderByPopulation === "higherToLower") {
          const higherToLower = [...state.countries].sort(function (a, b) {
            return b.population - a.population;
          });

          return {
            ...state,
            filteredCountries: higherToLower,
          };
        }
      }
    case FILTER_BY_ACTIVITIES:
      const selectedActivity = action.payload;
      if (selectedActivity === "All") {
        return {
          ...state,
          countries: [...state.countries],
          filteredCountries: [...state.countries],
        };
      } else {
        const allCountriesFilteredByActivity = state.countries.filter(
          (country) => {
            for (let i = 0; i < country.activities.length; i++) {
              if (country.activities[i].name === payload) return true;
            }
            return false;
          }
        );
        return {
          ...state,
          filteredCountries: allCountriesFilteredByActivity,
        };
      }

    default:
      return state;
  }
}

export default rootReducer;
