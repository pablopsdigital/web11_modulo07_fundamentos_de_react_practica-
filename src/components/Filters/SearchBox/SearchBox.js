import { useState } from 'react';
import './SearchBox.css';

function SearchBox({ placeholder, value, onChange, ...props }) {
  return (
    <input
      type="search"
      value={value}
      className="search"
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

export default SearchBox;
