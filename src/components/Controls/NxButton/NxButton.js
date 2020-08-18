import React from "react";
import Button from "@material-ui/core/Button";

export const NxButton = ({
  type,
  text,
  color,
  size,
  handleClick,
  variant,
  disabled,
}) => {
  return (
    <Button
      type={type}
      color={color ? color : "primary"}
      fullWidth
      size={size ? size : "medium"}
      variant={variant ? variant : "contained"}
      onClick={handleClick}
      disabled={disabled ? disabled : false}
    >
      {text}
    </Button>
  );
};
