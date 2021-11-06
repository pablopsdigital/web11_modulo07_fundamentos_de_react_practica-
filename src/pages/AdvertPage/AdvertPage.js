import Layout from '../../containers/Layout/Layout';
import './AdvertPage.css';
// import PropTypes from 'prop-types';

// //Protypes
// AdvertPage.propTypes = {
//   match: PropTypes.object.isRequired,
//   match: PropTypes.title.isRequired
// };

function AdvertPage({ match, title, ...props }) {
  const dataSample = {
    advertisement: {
      id: 'b6af331e-69a8-4502-bdbe-5e2d3d547ab8',
      createdAt: '2021-11-03T13:57:12.000Z',
      name: 'test',
      sale: true,
      price: 20,
      tags: ['mobile', 'lifestyle'],
      photo: null
    }
  };

  return (
    <Layout {...props}>
      <section className="container">
        <h2 className="card-list-title">{title}</h2>
        <h1>AdvertInfopage {match.params.advertId}</h1>
      </section>
    </Layout>
  );
}

export default AdvertPage;
