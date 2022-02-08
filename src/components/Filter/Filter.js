import React from "react";
import s from "../Filter/Filter.module.css";
import PropTypes from "prop-types";

const Filter = ({ value, changeFilter }) => (
  <>
    <label className={s.label}>Find contacts by name</label>
    <input
      className={s.input}
      type="text"
      value={value}
      onChange={changeFilter}
    ></input>
  </>
);

export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
  changeFilter: PropTypes.func,
};