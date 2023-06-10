import React from 'react';
import {MagnifyingGlass} from 'phosphor-react';
import Input from 'components/common/input';

const SearchInput = ({handleChange, value, placeholder}) => {
  return (
    <div className="search-input-otr">
      <div className="search-otr-wrapper">
        <Input
          Icon={MagnifyingGlass}
          type="search"
          name="search"
          value={value}
          onChange={e => {
            e.preventDefault();
            const value = e.target.value || '';
            handleChange(value);
          }}
          placeholder={placeholder}
        ></Input>
      </div>
    </div>
  );
};

export default SearchInput;
