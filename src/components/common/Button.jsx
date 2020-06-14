import React from "react";

function Button({ label, color, type, onClick }) {
  const classes = `btn btn-${color}`;
  return (
    <button type={type} className={classes} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
