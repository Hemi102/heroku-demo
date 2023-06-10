import React from 'react';
import './input.scss';

function Input({className, handleChange, type, name, value, placeholder, Icon, label, ...rest}) {
  return (
    <div className={`${className ? className : ''} input-otr`}>
      <label htmlFor="email" className="input-label">
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          onChange={handleChange}
          name={name}
          className="theme-input input w-100"
          value={value}
          placeholder={placeholder}
          {...rest}
        />
      ) : (
        <>
          <input
            onChange={handleChange}
            name={name}
            className="theme-input input w-100"
            value={value}
            type={type}
            placeholder={placeholder}
            {...rest}
          />
          {Icon && <Icon className="search-icon ms-1 opacity-50" size={24} />}
        </>
      )}
    </div>
  );
}

export default Input;
