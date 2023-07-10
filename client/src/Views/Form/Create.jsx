import React, { useState } from "react";
import { DIFFICULT, DURATION, SEASON, COUNTRIES } from "../../utils/Constants";
import styled from "./Create.module.css";
import { postActivity } from "../../Redux/Actions/actions";
import { useDispatch } from "react-redux";

const Create = () => {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    name: "",
    difficulty: "No difficulty",
    duration: "No fixed duration",
    season: "No season",
    country: "Select a Country...",
  });

  const [errors, setErrors] = useState({
    name: " (*)",
    difficulty: " (*)",
    duration: " (*)",
    season: " (*)",
    country: " (*)",
  });

  const disable = () => {
    let disabled = true;
    for (let error in errors) {
      if (errors[error] === "") disabled = false;
      else {
        disabled = true;
        break;
      }
    }
    return disabled;
  };

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
    validate(
      {
        ...state,
        [event.target.name]: event.target.value,
      },
      event.target.name
    );
  };

  const validate = (state, name) => {
    if (name === "name") {
      if (state.name !== "") setErrors({ ...errors, name: "" });
      else setErrors({ ...errors, name: " (*)" });
      return;
    }

    if (name === "difficulty") {
      if (state.difficulty !== "From 1 to 5...")
        setErrors({ ...errors, difficulty: "" });
      else setErrors({ ...errors, difficulty: " (*)" });
      return;
    }

    if (name === "duration") {
      if (state.duration !== "From 1 to 24...")
        setErrors({ ...errors, duration: "" });
      else setErrors({ ...errors, duration: " (*)" });
      return;
    }

    if (name === "season") {
      if (state.season !== "Select a season...")
        setErrors({ ...errors, season: "" });
      else setErrors({ ...errors, season: " (*)" });
      return;
    }

    if (name === "country") {
      if (state.country !== "Select a Country")
        setErrors({ ...errors, country: "" });
      else setErrors({ ...errors, country: " (*)" });
      return;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(postActivity(state));
    setState({
      name: "",
      difficulty: "No difficulty",
      duration: "No fixed duration",
      season: "No season",
      country: "Select a Country...",
    });
  };

  return (
    <div className={styled.container}>
      <div className={styled.divForm}>
        <form className={styled.formCreate} onSubmit={handleSubmit}>
          <h2 className={styled.h2Tit}>Creating an Activity</h2>

          {/* Input: Name of Activity */}
          <div className={styled.divFirstRow}>
            <div className={styled.divLabelInput1}>
              <div>
                <label className={styled.divLabels}>Name:</label>
              </div>
              <div>
                <input
                  name="name"
                  className={styled.input}
                  onChange={handleChange}
                  type="text"
                />
                <span className={styled.span}>{errors.name}</span>
              </div>
            </div>

            {/*  */}

            {/* Difficulty */}
            <div className={styled.divLabelSelDiff1}>
              <div>
                <label className={styled.divLabels}>Difficulty:</label>
              </div>
              <div>
                <select
                  name="difficulty"
                  className={styled.sel}
                  onChange={handleChange}
                >
                  <option disabled selected>
                    From 1 to 5...
                  </option>
                  {DIFFICULT.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <span className={styled.span}>{errors.difficulty}</span>
              </div>
            </div>

            {/*  */}

            {/* Duration */}
            <div className={styled.divLabelSelDiff1}>
              <div>
                <label className={styled.divLabels}>Duration:</label>
              </div>
              <div>
                <select
                  name="duration"
                  className={styled.sel}
                  onChange={handleChange}
                >
                  <option disabled selected>
                    From 1 to 24...
                  </option>
                  {DURATION.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <span className={styled.span}>{errors.duration}</span>
              </div>
            </div>
          </div>

          <div className={styled.divSecondRow}>
            {/* Season */}
            <div className={styled.divLabelSelSeaCty}>
              <div>
                <label className={styled.divLabels}>Season:</label>
              </div>
              <div>
                <select
                  name="season"
                  className={styled.selCty}
                  onChange={handleChange}
                >
                  <option disabled selected>
                    Select a season...
                  </option>
                  {SEASON.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <span className={styled.span}>{errors.season}</span>
              </div>
            </div>

            {/* Countries */}
            <div className={styled.divLabelSelSeaCty2}>
              <div>
                <label className={styled.divLabels}>Country:</label>
              </div>
              <div>
                <select
                  name="country"
                  className={styled.selCty}
                  onChange={handleChange}
                >
                  <option disabled selected>
                    Select a Country...
                  </option>
                  {COUNTRIES.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <span className={styled.span}>{errors.country}</span>
              </div>
            </div>

            <div className={styled.divInputSub}>
              <input
                type="submit"
                className={styled.inputSubmit}
                disabled={disable()}
                value={"Send"}
              />
            </div>
          </div>

          <div>
            <p className={styled.pWarning}>
              <label className={styled.span}>(*) Obligatory field</label>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
