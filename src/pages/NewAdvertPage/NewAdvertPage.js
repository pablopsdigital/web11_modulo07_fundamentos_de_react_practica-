import Layout from '../../containers/Layout/Layout';
import { useRef, useState, useEffect } from 'react';
import Button from '../../components/Button/Button';
import PropTypes from 'prop-types';
import './NewAdvertPage.css';

// //Protypes
// NewAdvertPage.propTypes = {
//   match: PropTypes.object.isRequired,
//   match: PropTypes.title.isRequired
// };

function NewAdvertPage({ title, ...props }) {
  // const [image, setImage] = useState < File > ();
  // const fileInputRef = useRef<HTMLInputElement>();

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // fileInputRef.current.click();
  };

  const [inputsValuesState, setInputsValue] = useState({
    email: '',
    password: '',
    rememberme: false
  });

  const hangleChange = (event) => {
    //Evaluate input type
    const input = event.target;
    const value = input.type === 'checkbox' ? input.checked : input.value;
    const name = input.name;

    //From the previous state, only the affected values are overwritten.
    //Generate a dynamic key for the name of the value to be changed.
    setInputsValue((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <Layout {...props}>
      <section className="container">
        <h2>NewAdvertPage</h2>
      </section>

      <form onSubmit={handleFormSubmit}>
        <div>
          <div>
            <input
              type="text"
              className=""
              placeholder="name"
              value={inputsValuesState.name}
              onChange={hangleChange}
            />
          </div>
          <div>
            <label>
              <input name="sale" type="radio" value="True" onChange={hangleChange} />
              Sale
            </label>
            <label>
              <input name="sale" type="radio" value="False" onChange={hangleChange} />
              Buy
            </label>
          </div>

          <div>
            <label>
              <input
                type="number"
                className=""
                placeholder="price"
                value={inputsValuesState.price}
                onChange={hangleChange}
                required
              />
              €
            </label>
          </div>

          <div>
            <label>
              <input
                name="tags"
                type="checkbox"
                value="lifestyle"
                onChange={hangleChange}
                required
              />
              Lifestyle
            </label>
            <label>
              <input name="tags" type="checkbox" value="mobile" onChange={hangleChange} required />
              Mobile
            </label>
            <label>
              <input name="tags" type="checkbox" value="motor" onChange={hangleChange} required />
              Motor
            </label>
            <label>
              <input name="tags" type="checkbox" value="work" onChange={hangleChange} required />
              Work
            </label>
          </div>

          <div>
            {/* <input type="file" name="file" style={{ display: 'none' }} ref={fileInputRef} /> */}
            <label>
              upload Image
              <input type="file" name="phpto" style={{ display: 'none' }} />
            </label>
          </div>

          <div>
            <Button type="submit" value="Add Image">
              Create Advert
            </Button>
          </div>
        </div>
      </form>
    </Layout>
  );
}

export default NewAdvertPage;
