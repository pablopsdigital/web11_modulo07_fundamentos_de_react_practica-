import AdvertisementCard from '../../components/AdvertisementCard/AdvertisementCard';
import Layout from '../../containers/Layout/Layout';
import './AdvertsPage.css';
import { useState, useEffect } from 'react';
import { getAdvertisements } from './AdvertsPageService';
import NoResultsFound from '../../components/NoResultsFound/NoResultsFound';

function AdvertsPage({ title, ...props }) {
  //States
  //=======================================================================
  const [advertisements, setAdvertisements] = useState([]);

  useEffect(() => {
    getAdvertisements().then((advertisements) => setAdvertisements(advertisements));
  }, []);

  //Return
  //=======================================================================
  return (
    <Layout {...props}>
      <section className="container">
        <h2 className="card-list-title">{title}</h2>
        {advertisements.length ? (
          /* <div className="card-list-wrapper">
                <div>Loadin</div>
                <div>Alert</div>
              </div> */
          <ul className="card-list-auto-grid">
            {advertisements.map((advertisement) => (
              <AdvertisementCard key={advertisement.id} advertisement={advertisement} />
            ))}
          </ul>
        ) : (
          <NoResultsFound />
        )}
      </section>
    </Layout>
  );
}
export default AdvertsPage;
