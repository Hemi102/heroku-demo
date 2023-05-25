import React from 'react';
import './check.scss';

function Check({label, handleChange, value, name, checked}) {
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
        type="checkbox"
        checked={checked || value}
      />
      <label className="form-check-label heading-sm" htmlFor={name}>
        {label}
      </label>
    </div>
  );
}

export default Check;
