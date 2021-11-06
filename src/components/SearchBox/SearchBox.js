import { useState } from 'react';
import './SearchBox.css';

function SearchBox({ placeholder, ...props }) {
  const [inputValueState, setInputsValue] = useState('search advert');

  const handleChange = (event) => {
    setInputsValue((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value
    }));
  };

  return (
    <input type="search" className="search" placeholder={placeholder} onChange={handleChange} />
  );
}

export default SearchBox;
