import React from "react";
import PropTypes from "prop-types";
import "./Page.css"


function Page({
  spacing,
  direction,
  wrap,
  spacingLabel,
  directionLabel,
  alignItemsLabel,
  fontSizeLabel,
  colorLabel,
  labelBtn ,
  backgroundColorInput,
  colorInput,
  borderInput,
  borderInputColor,
  sizeInput,
  fontSizeInput,
  handleChange,
  backgroundColorBtn ,
  sizeBtn ,
  colorBtn,
  handleClick,
  alignItemsForm,
  handleOnSubmit
}) {

  const styleForm = {
    display: "flex",
    gap: `${spacing}px`,
    flexWrap: wrap ? "wrap" : "nowrap",
    flexDirection: direction,
    alignItems: alignItemsForm,
  };
  const styleLabel = {
    display: "flex",
    gap: `${spacingLabel}px`,
    flexDirection: directionLabel,
    alignItems: alignItemsLabel,
    fontSize: `${fontSizeLabel}px`,
    color: colorLabel,
  };
  let scaleInput = 8;
  if (sizeInput === "small") scaleInput = 4;
  if (sizeInput === "large") scaleInput = 12;
  const styleInput = {
    backgroundColor: backgroundColorInput,
    padding: `${scaleInput * 0.5}px ${scaleInput * 1}px`,
    border: `${borderInput}px solid ${borderInputColor}`,
    color: colorInput,
    fontSize: `${fontSizeInput}px`,
  };
  let scale = 16;
  if (sizeBtn === "small") scale = 12;
  if (sizeBtn === "large") scale = 24;
  const styleBtn = {
    backgroundColor: backgroundColorBtn,
    padding: `${scale * 0.5}px ${scale * 1}px`,
    border: "none",
    color: colorBtn,
  };
  return (
    <form style={styleForm} onSubmit={handleOnSubmit}>
      <label style={styleLabel}>
        Name:
        <input type="text"  style={styleInput} onChange={handleChange} />
      </label>
      <label style={styleLabel}>
        Password:
        <input type="password" style={styleInput} onChange={handleChange} />
      </label>
      <button type="button" style={styleBtn} onClick={handleClick}>
        {labelBtn}
      </button>
    </form>
  );
}

Page.propTypes = {
  spacing: PropTypes.number,
  alignItemsForm: PropTypes.oneOf(["baseline", "start", "center", "end"]),
  wrap: PropTypes.bool,
  direction: PropTypes.oneOf(["row", "column"]),
  spacingLabel: PropTypes.number,
  directionLabel: PropTypes.oneOf(["row", "column"]),
  alignItemsLabel: PropTypes.oneOf(["baseline", "start", "center", "end"]),
  fontSizeLabel: PropTypes.number,
  colorLabel: PropTypes.string,
  backgroundColorInput: PropTypes.string,
  colorInput: PropTypes.string,
  borderInput: PropTypes.number,
  borderInputColor: PropTypes.string,
  sizeInput: PropTypes.oneOf(["small", "medium", "large"]),
  fontSizeInput: PropTypes.number,
  handleChange: PropTypes.func,
  backgroundColorBtn: PropTypes.string,
  colorBtn: PropTypes.string,
  sizeBtn: PropTypes.oneOf(["small", "medium", "large"]),
  labelBtn: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  handleOnSubmit: PropTypes.func,
};

export default Page;
