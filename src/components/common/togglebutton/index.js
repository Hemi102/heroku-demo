import React from 'react';
import './toggle.scss';

function ToggleButton({label, handleChange, value, name, ...rest}) {
  return (
    <>
      <label className="form-check-label heading-xsb mb-2" htmlFor={name}>
        {label}
      </label>
      <div className="form-check form-switch toggle-main">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          name={name}
          id={name}
          onChange={e => handleChange(name, e.target.checked ? 1 : 0)}
          checked={value === 1 ? true : false}
          {...rest}
        />
      </div>
    </>
  );
}

export default ToggleButton;
