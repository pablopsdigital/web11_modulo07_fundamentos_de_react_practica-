import { useState, useEffect, useRef } from 'react';
import Button from '../Button/Button';
import './FiltersForm.scss';
import { Range } from 'rc-slider';
import { getAllTags } from './FiltersService';
import 'rc-slider/assets/index.css';
import CustomLocalStorageManager from '../../utils/CustomLocalStorageManager';

export default function Filters() {
  //Filters config
  const [filters, setFilters] = useState({
    name: '',
    sale: 'all',
    price: [0, 100],
    tags: []
  });

  useEffect(() => {
    if (CustomLocalStorageManager.getItem('filters')) {
      const readFilters = CustomLocalStorageManager.getItem('filters');
      setFilterName(readFilters.name);
      setFilterSale(readFilters.sale);
      setFilterPriceRange(readFilters.price);
    }
  }, []);

  //Name filter
  const [filterName, setFilterName] = useState(filters.name);
  const handleInputName = (event) => {
    setFilterName(event.target.value);
  };

  //Sale filter
  const [filterSale, setFilterSale] = useState(filters.sale);
  const handleInputSale = (event) => {
    setFilterSale(event.target.value);
  };

  //Price filter
  const marksSlider = {
    0: '0',
    100: '100'
  };

  const [filterPriceRange, setFilterPriceRange] = useState(filters.price);
  const handleFilterPriceRange = (value) => {
    setFilterPriceRange(value);
  };

  /*Tags*/
  const [selectTags, setSelectTags] = useState(filters.tags);
  const [tags, setTags] = useState([]);
  useEffect(() => {
    // resetError();
    getAllTags().then((tags) => setTags(tags));
    // setIsLoading(false);
  }, []);

  const handleCheckTag = (event) => {
    var listTags = [...selectTags];
    if (event.target.checked) {
      listTags = [...selectTags, event.target.value];
    } else {
      listTags.splice(selectTags.indexOf(event.target.value), 1);
    }
    setSelectTags(listTags);
    console.log(listTags);
  };

  /*Send form*/

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const selectFiltersInfo = {
      name: filterName,
      sale: filterSale,
      price: filterPriceRange,
      tags: selectTags
    };
    setFilters(selectFiltersInfo);
    CustomLocalStorageManager.setItem('filters', selectFiltersInfo);
  };

  const resetFilters = (event) => {
    event.preventDefault();
    setFilters({
      name: '',
      sale: 'all',
      price: [0, 100],
      tags: []
    });

    setFilterName('');
    setFilterSale('all');
    setFilterPriceRange([0, 100]);
    setSelectTags([]);

    CustomLocalStorageManager.removeItem('filters');
  };

  return (
    <div id="filters">
      <h3>Filters</h3>
      <p>FilterName: {filters.name}</p>
      <p>filterSale: {filters.sale}</p>
      <p>FilterPriceRange: {filters.price}</p>
      <p>{JSON.stringify(filters.tags)}</p>

      <div className="container">
        <div className="filters-line">
          <form onSubmit={handleFormSubmit}>
            <div className="inputs-container">
              <div>
                <label>
                  Name:
                  <input
                    type="text"
                    className=""
                    placeholder="name"
                    value={filterName}
                    onChange={handleInputName}
                  />
                </label>
              </div>

              <div>
                <label>
                  Sale
                  <input
                    name="sale"
                    type="radio"
                    value="sale"
                    checked={filterSale === 'sale'}
                    onChange={handleInputSale}
                  />
                </label>
                <label>
                  Buy
                  <input
                    name="buy"
                    type="radio"
                    value="buy"
                    checked={filterSale === 'buy'}
                    onChange={handleInputSale}
                  />
                </label>
                <label>
                  All
                  <input
                    name="all"
                    type="radio"
                    value="all"
                    checked={filterSale === 'all'}
                    onChange={handleInputSale}
                  />
                </label>
              </div>

              <div>
                <label>Range: {`${filterPriceRange[0]} - ${filterPriceRange[1]}`}</label>
                <div className="slider-range">
                  <Range
                    marks={marksSlider}
                    allowCross={false}
                    value={filterPriceRange}
                    onChange={handleFilterPriceRange}
                  />
                </div>
              </div>

              <div>
                <label>
                  Tags:
                  <ul>
                    {tags.map((tag, index) => (
                      <li key={tag}>
                        <input
                          name={tag}
                          value={tag}
                          type="checkbox"
                          checked={selectTags.includes(tag) ? true : false}
                          onChange={(e) => handleCheckTag(e)}
                        />
                        {tag}
                      </li>
                    ))}
                  </ul>
                </label>
              </div>
              <div className="filters-buttons">
                <Button type="submit" value="filter">
                  Filter
                </Button>
                <Button onClick={resetFilters} value="clearfilter">
                  Clear
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
