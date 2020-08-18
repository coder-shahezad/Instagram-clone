import React from "react";
import { TextField } from "@material-ui/core";

export const NxInputField = (props) => {
  const {
    input,
    label,
    value,
    type,
    meta,
    helperText,
    isMultiline,
    variant,
    inputProps,
    isRequired,
  } = props;

  return (
    <TextField
      className="my-3"
      {...input}
      type={type ? type : "text"}
      label={isRequired ? label + "*" : label}
      inputProps={inputProps}
      variant={variant ? variant : "outlined"}
      fullWidth
      value={value}
      error={meta.error && meta.touched}
      helperText={meta.error && helperText}
      multiline={isMultiline}
      rows={isMultiline ? 3 : 1}
    />
  );
};
