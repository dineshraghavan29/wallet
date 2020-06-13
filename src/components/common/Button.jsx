import React from "react";

function Button({ label, color, onClick }) {
  const classes = `btn btn-${color}`;
  return (
    <button type="button" className={classes} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
