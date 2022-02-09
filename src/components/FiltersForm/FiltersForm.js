import React, { useState, useEffect, createRef } from 'react';
import Button from '../Button/Button';
import './FiltersForm.scss';
import { Range } from 'rc-slider';
import { getAllTags } from './FiltersService';
import 'rc-slider/assets/index.css';
import CustomLocalStorageManager from '../../utils/CustomLocalStorageManager';

export default function Filters({ advertisements, setFiltersInfo }) {
  //Calculate minPrice maxPrice price
  const minPrice = advertisements.reduce((a, b) => (a.price < b.price ? a : b), {}).price;
  const maxPrice = advertisements.reduce((a, b) => (a.price > b.price ? a : b), {}).price;

  //Filters config
  const filtersInitialState = {
    name: '',
    sale: 'all',
    price: [minPrice, maxPrice],
    tags: []
  };

  //Filters
  const [filters, setFilters] = useState(filtersInitialState);

  //Name filter
  const [filterName, setFilterName] = useState(filtersInitialState.name);
  const handleInputName = (event) => {
    setFilterName(event.target.value);
  };

  //Sale filter
  const [filterSale, setFilterSale] = useState(filtersInitialState.sale);
  const handleInputSale = (event) => {
    setFilterSale(event.target.value);
  };

  const [filterPriceRange, setFilterPriceRange] = useState(filtersInitialState.price);
  const handleFilterPriceRange = (value) => {
    console.log('value', value);
    setFilterPriceRange(value);
  };

  //Tags filter
  const [selectTags, setSelectTags] = useState(filtersInitialState.tags);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    // resetError();
    getAllTags().then((tags) => setTags(tags));
    saveFilters();
    // setIsLoading(false);
  }, []);

  const handleCheckTag = (event) => {
    var listSelectTags = [...selectTags];
    if (event.target.checked) {
      listSelectTags = [...selectTags, event.target.value];
    } else {
      listSelectTags.splice(selectTags.indexOf(event.target.value), 1);
    }
    setSelectTags(listSelectTags);
  };

  //Data filters select by user
  const saveFilters = () => {
    const selectFiltersInfo = {
      name: filterName,
      sale: filterSale,
      price: filterPriceRange,
      tags: selectTags
    };

    CustomLocalStorageManager.setItem('filters', selectFiltersInfo);
    setFiltersInfo(selectFiltersInfo);
    setFilters(selectFiltersInfo);
  };

  //Set data filters in state and localStorage
  const handleFormSubmit = (event) => {
    event.preventDefault();
    saveFilters();
  };

  //Reset filters state and localStorage
  const resetFilters = (event) => {
    event.preventDefault();

    setFilters(filtersInitialState);

    setFilterName(filtersInitialState.name);
    setFilterSale(filtersInitialState.sale);
    setFilterPriceRange(filtersInitialState.price);
    setSelectTags(filtersInitialState.tags);

    CustomLocalStorageManager.setItem('filters', filtersInitialState);
    setFiltersInfo(filtersInitialState);
    CustomLocalStorageManager.removeItem('filters');
  };

  useEffect(() => {
    if (CustomLocalStorageManager.getItem('filters')) {
      const readFilters = CustomLocalStorageManager.getItem('filters');

      setFilters(readFilters);

      setFilterName(readFilters.name);
      setFilterSale(readFilters.sale);
      setFilterPriceRange(readFilters.price);
      setSelectTags(readFilters.tags);

      setFiltersInfo(readFilters);
    }
  }, [setFiltersInfo]);

  return (
    <div id="filters">
      <h3>Filters</h3>
      <p>{JSON.stringify(filters)}</p>
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
                <label>Range: {filterPriceRange}</label>
                <div className="slider-range">
                  <Range
                    marks={{
                      [minPrice]: minPrice,
                      [maxPrice]: maxPrice
                    }}
                    min={minPrice}
                    max={maxPrice}
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