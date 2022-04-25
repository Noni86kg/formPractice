import React from "react";
import Page from "./Page";

export default {
  title: "Components/Page",
  component: Page,
  argTypes: { handleClick: { action: "handleClick" }, handleChange : { action: "handleChange" } ,handleOnSubmit: {action: "handleOnSubmit"} },
};

const Template = ({ ...args }) => <Page {...args} />;

export const Horizontal = Template.bind({});
Horizontal.args = {
  direction: "row",
  spacing: 12,
  alignItemsForm: "baseline",
  wrap: false,
  spacingLabel: 2,
  directionLabel: "row",
  alignItemsLabel: "baseline",
  fontSizeLabel: 16,
  colorLabel: "black",
  backgroundColorInput: "white",
  colorInput: "black",
  borderInput: 1,
  borderInputColor: "black",
  sizeInput: "medium",
  fontSizeInput: 12,
  backgroundColorBtn: "red",
  colorBtn: "white",
  labelBtn: "Login",
  sizeBtn: "medium",
};

export const Vertical = Template.bind({});
Vertical.args = {
  direction: "column",
  spacing: 8,
  alignItemsForm: "baseline",
  wrap: false,
  spacingLabel: 0,
  directionLabel: "column",
  alignItemsLabel: "baseline",
  fontSizeLabel: 16,
  colorLabel: "black",
  backgroundColorInput: "white",
  colorInput: "black",
  borderInput: 1,
  borderInputColor: "black",
  sizeInput: "medium",
  fontSizeInput: 12,
  backgroundColorBtn: "red",
  colorBtn: "white",
  labelBtn: "Login",
  sizeBtn: "medium",
};
