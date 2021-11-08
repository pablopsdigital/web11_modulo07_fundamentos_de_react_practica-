import { useState, useContext } from 'react';
import Button from '../../components/Button/Button';
import './Filters.css';
import CheckBoxInput from '../InputsForm/CheckBoxInput';
import Slider, { SliderTooltip } from 'rc-slider';
import FiltersContext from '../../contexts/FiltersContext';

function Filters() {
  //States
  /*Name*/
  const [nameInputState, setName] = useState('');
  const handleInputName = (event) => {
    setName(event.target.value);
    //console.log(nameInputState);
  };

  /*Sale*/
  const [saleInputState, setSale] = useState(null);
  const handleInputSale = (event) => {
    setSale(event.target.value);
    //console.log(saleInputState);
  };

  /*Price*/
  const [priceInputState, setPrice] = useState();
  const handleInputPrice = (event) => {
    setPrice(event.target.value);
    //console.log(priceInputState);
  };

  /*Tags*/
  const inititalTags = [
    { id: 1, value: 'lifestyle', isChecked: false },
    { id: 2, value: 'mobile', isChecked: false },
    { id: 3, value: 'motor', isChecked: false },
    { id: 4, value: 'work', isChecked: false }
  ];

  const [tagsInputState, setTags] = useState({ tags: inititalTags });

  const handleCheckChieldElement = (event) => {
    let tagsList = tagsInputState.tags;
    tagsList.forEach((tag) => {
      if (tag.value === event.target.value) {
        tag.isChecked = event.target.checked;
      }
    });
    setTags((prevState) => ({
      ...prevState,
      tags: tagsList
    }));
  };

  let finalTags = { tags: [] };
  tagsInputState.tags.forEach((tag) => {
    if (tag.isChecked) {
      finalTags.tags.push(tag.value);
    }
  });
  //console.log(finalTags);

  //Filters
  const [inputFiltersValues, setInputsFiltersValue] = useState();

  /*Request filter*/
  const filters = {
    name: nameInputState,
    sale: saleInputState,
    price: priceInputState,
    tags: finalTags.tags
  };

  const { filtersState } = useContext(FiltersContext);
  const { setFilters } = useContext(FiltersContext);
  const { handleFilterResults } = useContext(FiltersContext);

  /*Send form*/
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setFilters(filters);
    //handleFilterResults();
  };

  const reset = () => {
    setName('');
    setSale(null);
    setPrice();
    setTags({ tags: inititalTags });
  };

  return (
    <div className="filters">
      <h3>Filters</h3>

      <div className="filters-container">
        <div className="filters-line">
          <form onSubmit={handleFormSubmit}>
            <div className="filters-inputs">
              <div>
                <label>
                  Name:
                  <input
                    type="text"
                    className=""
                    placeholder="name"
                    value={nameInputState}
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
                    checked={saleInputState === 'sale'}
                    onChange={handleInputSale}
                  />
                </label>
                <label>
                  Buy
                  <input
                    name="buy"
                    type="radio"
                    value="buy"
                    checked={saleInputState === 'buy'}
                    onChange={handleInputSale}
                  />
                </label>
                <label>
                  All
                  <input
                    name="all"
                    type="radio"
                    value="all"
                    checked={saleInputState === 'all'}
                    onChange={handleInputSale}
                  />
                </label>
              </div>

              <div>
                <label>Range:</label>
                <p>------------------------</p>
                {/* <Slider min={0} max={20} defaultValue={3} handle={handleInputPrice} /> */}
              </div>

              <div>
                <label>
                  Tags:
                  <ul>
                    {tagsInputState.tags.map((tag) => {
                      return (
                        <CheckBoxInput key={tag.id} onChange={handleCheckChieldElement} {...tag} />
                      );
                    })}
                  </ul>
                </label>
              </div>
            </div>
            <div className="buttons-footer-filters">
              <Button type="submit" value="filter">
                Filter
              </Button>
              <Button onClick={reset} value="clearfilter">
                Clear
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Filters;
