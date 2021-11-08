import Layout from '../../containers/Layout/Layout';
import { useState, useLayoutEffect } from 'react';
import Button from '../../components/Button/Button';
import './NewAdvertPage.css';
import CheckBoxInput from '../../components/InputsForm/CheckBoxInput';
import DragAndDropInputFile from '../../components/InputsForm/DragAndDropInputFile/DragAndDropInputFile';
import imagePhoto from '../../images/no-image.png';
import { createAdvertisement } from './NewAdvertService';
import { Redirect } from 'react-router-dom';
import SpinnerLoading from '../../components/SpinnerLoading/SpinnerLoading';
import Alert from '../../components/Alert/Alert';

function NewAdvertPage({ ...props }) {
  //State loading
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const resetError = () => {
    setError(null);
  };

  useLayoutEffect(() => {
    resetError();
    setIsLoading(false);
  }, []);

  /*Name*/
  const [nameInputState, setName] = useState('');
  const handleInputName = (event) => {
    setName(event.target.value);
  };

  /*Sale*/
  const [saleInputState, setSale] = useState(null);
  const handleInputSale = (event) => {
    setSale(event.target.value);
    console.log(saleInputState);
  };

  /*Price*/
  const [priceInputState, setPrice] = useState(0);
  const handleInputPrice = (event) => {
    setPrice(event.target.value);
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

  /*Photo*/
  const [photoInputState, setPhoto] = useState({ imagePhoto });
  const [photoRenderState, setRenderPhoto] = useState({ imagePhoto });
  const handleInputPhoto = (event) => {
    setPhoto(event.target.files[0]);
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setRenderPhoto({ imagePhoto: reader.result });
      }
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  const [createIdAdvertResponse, setIdAdverResponse] = useState('');

  const createdAdvert = async (newAdvertFormData) => {
    try {
      const createdAdvertResponse = await createAdvertisement(newAdvertFormData);
      setIdAdverResponse(createdAdvertResponse.id);
    } catch (error) {
      setError(error);
    }
  };

  /*Send form*/
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    resetError();
    setIsLoading(true);

    let finalTags = { tags: [] };
    tagsInputState.tags.forEach((tag) => {
      if (tag.isChecked) {
        finalTags.tags.push(tag.value);
      }
    });

    const newAdvertFormData = new FormData();
    newAdvertFormData.set('name', nameInputState);
    newAdvertFormData.set('sale', saleInputState);
    newAdvertFormData.set('price', priceInputState);
    newAdvertFormData.set('tags', finalTags.tags);

    newAdvertFormData.set('photo', photoInputState);
    createdAdvert(newAdvertFormData);

    setIsLoading(false);
  };

  //Redirect;
  if (createIdAdvertResponse) {
    return <Redirect to={`/adverts/${createIdAdvertResponse}`} />;
  }

  return (
    <Layout {...props}>
      <section className="container">
        <h2>NewAdvertPage</h2>
      </section>

      <form onSubmit={handleFormSubmit}>
        <div>
          <input
            type="text"
            className=""
            placeholder="name"
            value={nameInputState}
            onChange={handleInputName}
            required
          />
        </div>
        <div>
          <label>
            <input
              type="number"
              className=""
              placeholder="price"
              value={priceInputState}
              onChange={handleInputPrice}
              required
            />
            €
          </label>

          <div>
            <label>
              <input
                name="sale"
                type="radio"
                value="true"
                checked={saleInputState === 'true'}
                onChange={handleInputSale}
                required
              />
              Sale
            </label>
            <label>
              <input
                name="sale"
                type="radio"
                value="false"
                checked={saleInputState === 'false'}
                onChange={handleInputSale}
                required
              />
              Buy
            </label>
          </div>
        </div>
        <div>
          <ul>
            {tagsInputState.tags.map((tag) => {
              return (
                <CheckBoxInput key={tag.id} onChange={handleCheckChieldElement} {...tag} required />
              );
            })}
          </ul>
        </div>
        <div>
          <DragAndDropInputFile
            onChange={handleInputPhoto}
            imagePhoto={photoRenderState}
            accept={'image/*'}
            name={'image-upload'}
            {...props}
            required
          />
        </div>
        <div>
          <Button type="submit" value="Add Image">
            Create Advert
          </Button>
        </div>
      </form>
      {isLoading && <SpinnerLoading />}
      {error && (
        <Alert onClick={resetError} className="loginPage-error">
          {error.message}
        </Alert>
      )}
    </Layout>
  );
}

export default NewAdvertPage;
