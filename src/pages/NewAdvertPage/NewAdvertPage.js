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
  const handleInputPhoto = (event) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setPhoto({ imagePhoto: reader.result });
      }
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  const createdAdvert = async (newAdvertFormData) => {
    try {
      const response = await createAdvertisement(newAdvertFormData);
      console.log(response);
    } catch (error) {
      console.log('Error desde: ', error);
    }
  };

  /*Send form*/
  const handleFormSubmit = async (event) => {
    event.preventDefault();

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

    // let data = photoInputState.imagePhoto;
    // let buff = new Buffer(data);
    // let base64data = buff.toString('base64');
    // newAdvertFormData.set('photo', base64data);

    newAdvertFormData.set('photo', new Blob([photoInputState]));
    createdAdvert(newAdvertFormData);
  };
  // //Redirect;
  // if (createdAdvertId) {
  //   return <Redirect to={`/adverts/${createdAdvertId}`} />;
  // }

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
              />
              Buy
            </label>
          </div>
        </div>
        <div>
          <ul>
            {tagsInputState.tags.map((tag) => {
              return <CheckBoxInput key={tag.id} onChange={handleCheckChieldElement} {...tag} />;
            })}
          </ul>
        </div>
        <div>
          <DragAndDropInputFile
            onChange={handleInputPhoto}
            imagePhoto={photoInputState}
            accept={'image/*'}
            name={'image-upload'}
            {...props}
          />
        </div>
        <div>
          <Button type="submit" value="Add Image">
            Create Advert
          </Button>
        </div>
      </form>
    </Layout>
  );
}

export default NewAdvertPage;
