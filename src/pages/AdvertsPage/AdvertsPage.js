import AdvertisementCard from '../../components/AdvertisementCard/AdvertisementCard';
import Layout from '../../containers/Layout/Layout';
import './AdvertsPage.css';
import { useState, useLayoutEffect } from 'react';
import { getAdvertisements } from './AdvertsService';
import NoResultsFound from '../../components/NoResultsFound/NoResultsFound';
import PropTypes from 'prop-types';
import SpinnerLoading from '../../components/SpinnerLoading/SpinnerLoading';
import Alert from '../../components/Alert/Alert';

//Protypes
AdvertsPage.propTypes = {
  history: PropTypes.object.isRequired
};

function AdvertsPage({ ...props }) {
  //States
  //=======================================================================
  const [advertisements, setAdvertisements] = useState([]);

  //State loading
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const resetError = () => {
    setError(null);
  };

  useLayoutEffect(() => {
    resetError();
    getAdvertisements().then((advertisements) => setAdvertisements(advertisements));
    setIsLoading(false);
  }, []);

  //Return
  //=======================================================================
  return (
    <Layout {...props}>
      <section className="container">
        <h2 className="card-list-title">The latest publications</h2>
        {isLoading || advertisements.length ? (
          <ul className="card-list-auto-grid">
            {advertisements.map((advertisement) => (
              <AdvertisementCard key={advertisement.id} advertisement={advertisement} />
            ))}
          </ul>
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
export default AdvertsPage;
