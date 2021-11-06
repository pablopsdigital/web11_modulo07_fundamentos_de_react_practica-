import Layout from '../../containers/Layout/Layout';
import PropTypes from 'prop-types';
import './NotFoundPage.css';

// //Protypes
// NotFoundPage.propTypes = {
//   match: PropTypes.object.isRequired,
//   match: PropTypes.title.isRequired
// };
function NotFoundPage({ ...props }) {
  return (
    <Layout {...props}>
      <section className="container">
        <h2>Pagina no encontrada</h2>
      </section>
    </Layout>
  );
}

export default NotFoundPage;
