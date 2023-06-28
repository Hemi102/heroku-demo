import React from 'react';
import Select from 'react-select';

import './select.scss';
import {isArray} from 'lodash';
import Check from 'components/common/check';

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#F3F3F3' : 'white',
    color: state.isSelected ? '#00598B' : '#636363',
    padding: '6px 28px',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '28px',
  }),
  control: () => ({
    display: 'flex',
    // none of react-select's styles are passed to <Control />
    width: '100%',
    background: 'rgba(15, 15, 15, 0.05)',
    // border: '1px solid #00598B',
    borderRadius: '8px',
  }),
  valueContainer: provided => ({
    ...provided,
    padding: '7px 28px',

    // none of react-select's styles are passed to <Control />
  }),
  indicatorSeparator: provided => ({
    ...provided,
    display: 'none',
  }),
  indicatorsContainer: (provided, state, isFocused) => ({
    ...provided,
    padding: '0px 28px',
    transform: isFocused ? '90deg' : '180deg',
    svg: {
      width: '24px',
      height: '24px',
    },
  }),
  menu: (provided, state) => ({
    ...provided,
    padding: '8px 0',
    background: '#FFFFFF',
    boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)',
    borderRadius: '16px',
    zIndex: 100,
  }),
  menuPortal: base => ({...base, zIndex: 9999}),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return {...provided, opacity, transition};
  },
  multiValue: provided => {
    return {...provided, backgroundColor: '#00598B', color: '#ffffff', borderRadius: '5px', padding: '3px 6px'};
  },
  multiValueLabel: provided => {
    return {...provided, color: '#ffffff'};
  },
  multiValueRemove: provided => {
    return {...provided, background: 'transparent'};
  },
};

const CustomOptionComponent = ({innerProps, innerRef, children}) => (
  <div ref={innerRef} {...innerProps}>
    {children}
  </div>
);

function SelectComponent({options, selectedValue, handleChange, placeholder, ...rest}) {
  let value;
  if (isArray(selectedValue)) {
    value = selectedValue;
  } else {
    value = options.find(item => item.value === selectedValue) || '';
  }
  return (
    <div className="select">
      <Select
        value={value}
        options={options}
        width="200px"
        styles={customStyles}
        onChange={handleChange}
        placeholder={placeholder}
        closeMenuOnSelect={!rest.isMulti}
        hideSelectedOptions={!rest.isMulti}
        components={
          rest.isMulti
            ? {
                Option: ({children, ...rest}) => (
                  <CustomOptionComponent {...rest}>
                    <div className="px-4 py-2 d-flex align-items-center">
                      <Check checked={rest.isSelected} name="check" />
                      {children}
                    </div>
                  </CustomOptionComponent>
                ),
              }
            : {}
        }
        {...rest}
      />
    </div>
  );
}

export default SelectComponent;
