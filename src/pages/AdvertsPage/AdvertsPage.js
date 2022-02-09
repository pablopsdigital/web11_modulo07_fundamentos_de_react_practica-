import AdvertisementCard from '../../components/AdvertisementCard/AdvertisementCard';
import Layout from '../../containers/Layout/Layout';
import './AdvertsPage.scss';
import { useState, useEffect } from 'react';
import { getAdvertisements } from './AdvertsService';
import NoResultsFound from '../../components/NoResultsFound/NoResultsFound';
import PropTypes from 'prop-types';
import SpinnerLoading from '../../components/SpinnerLoading/SpinnerLoading';
import Alert from '../../components/Alert/Alert';
import FiltersForm from '../../components/FiltersForm/FiltersForm';
import { filterAdverts, filtersInitialState } from './FilterAdvertisements';

//Protypes
AdvertsPage.propTypes = {
  history: PropTypes.object.isRequired
};

function AdvertsPage({ ...props }) {
  //Data
  //=======================================================================
  const [advertisements, setAdvertisements] = useState([]);
  const [filtersInfo, setFiltersInfo] = useState(filtersInitialState);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const resetError = () => {
    setError(null);
  };

  useEffect(() => {
    resetError();
    getAdvertisements().then((advertisements) => setAdvertisements(advertisements));
    setIsLoading(false);
  }, []);

  //Filters
  //======================================================================
  const finalData = filterAdverts(advertisements, filtersInfo);

  //Return
  //=======================================================================
  return (
    <Layout {...props}>
      {/* <p>Filters Info: {JSON.stringify(filtersInfo)}</p> */}
      <FiltersForm advertisements={advertisements} setFiltersInfo={setFiltersInfo} />
      <section id="adverts-page">
        <div className="container">
          {isLoading || advertisements.length ? (
            <>
              <div className="header">
                <h2>The latest publications</h2>
                <p>Total results: {finalData.length}</p>
              </div>
              <ul className="body">
                {finalData.map((advertisement) => (
                  <AdvertisementCard key={advertisement.id} advertisement={advertisement} />
                ))}
              </ul>
            </>
          ) : (
            !isLoading && <NoResultsFound />
          )}
          {isLoading && <SpinnerLoading />}
          {error && (
            <Alert onClick={resetError} className="loginPage-error">
              {error.message}
            </Alert>
          )}
        </div>
      </section>
    </Layout>
  );
}
export default AdvertsPage;
