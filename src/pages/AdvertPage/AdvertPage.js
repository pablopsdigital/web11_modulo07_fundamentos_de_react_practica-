import Layout from '../../containers/Layout/Layout';
import './AdvertPage.css';
import { getAdvertisementId } from './AdvertService';
import { useState, useLayoutEffect, Fragment } from 'react';
import { ReactComponent as ArrowIcon } from '../../images/svg/arrow.svg';
import Button from '../../components/Button/Button';
import Image from '../../components/Image/Image';
import { Link } from 'react-router-dom';
import SpinnerLoading from '../../components/SpinnerLoading/SpinnerLoading';
import PropTypes from 'prop-types';
import Alert from '../../components/Alert/Alert';
import NoResultsFound from '../../components/NoResultsFound/NoResultsFound';
const { formatDistanceToNow } = require('date-fns');

// //Protypes
AdvertPage.propTypes = {
  match: PropTypes.object.isRequired
};

function AdvertPage({ match, ...props }) {
  const [advertisement, setAdvertisement] = useState();
  const advertisementId = match.params.advertId;

  //State loading
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const resetError = () => {
    setError(null);
  };

  useLayoutEffect(() => {
    resetError();
    getAdvertisementId(advertisementId).then((advertisement) => setAdvertisement(advertisement));
    console.log(advertisement);
    setIsLoading(false);
  }, []);

  return (
    <Layout {...props}>
      <section className="container advertisement-detail-container flex">
        {advertisement ? (
          <Fragment>
            <div className="left-column">
              <Image photo={advertisement.photo} />
            </div>

            <div className="right-column">
              <div className="buttons-header">
                <Link to={''}>
                  <Button className="back-button">
                    <ArrowIcon className="arrow-icon-svg" />
                    Go back
                  </Button>
                </Link>
              </div>

              <div className="description">
                <p className="type">{advertisement.sale}</p>
                <h1>{advertisement.name}</h1>
                <p className="date-published">
                  Published:
                  <time dateTime={advertisement.createdAt}>
                    {formatDistanceToNow(new Date(advertisement.createdAt))}
                  </time>
                </p>
              </div>

              <div className="tags-container">
                {advertisement.tags.map((tag, index) => (
                  <span key={index} href="url" className="tag">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="price">
                <p>{advertisement.price} €</p>
                <Link to={'#'} className="cart-btn">
                  Add to cart
                </Link>
              </div>
            </div>
          </Fragment>
        ) : (
          <NoResultsFound />
        )}
        {isLoading && <SpinnerLoading />}
        {error && (
          <Alert onClick={resetError} className="loginPage-error">
            {error.message}
          </Alert>
        )}
      </section>
    </Layout>
  );
}

export default AdvertPage;
