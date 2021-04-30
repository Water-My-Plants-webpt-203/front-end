import React, { useState } from "react";
import { connect } from "react-redux";
import { searchAPI } from "../state/actions";
import logo from "../images/logo.png";

const PlantForm = (props) => {
  const [form, setForm] = useState("");

  const handleChange = (e) => {
    setForm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.searchAPI(form);
  };

  return (
    <div className="form-container">
      <div className="header">
        <h1>New plant</h1>
        <img src={logo} />
      </div>

      <form onSubmit={handleSubmit} className="plantForm">
        <label>
          <input
            className="text"
            type="text"
            name="nickname"
            placeholder="NICKNAME"
            onChange={handleChange}
            value={form}
          />
        </label>
        <label>
          <input
            className="text"
            type="text"
            name="species"
            placeholder="SPECIES"
          />
        </label>
        <label>
          <h2>H2O Frequency</h2>
          <input type="range" name="frequency" />
        </label>
        <label>
          <h3>Add Image</h3>
          <input type="file" name="image" />
        </label>
        <div className="button-container">
          <button type="submit">Add new plant</button>
        </div>
      </form>
    </div>
  );
};

export default connect(null, { searchAPI })(PlantForm);
