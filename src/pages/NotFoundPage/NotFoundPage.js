import Layout from '../../containers/Layout/Layout';
import './NotFoundPage.css';

function NotFoundPage({ ...props }) {
  return (
    <Layout {...props}>
      <section className="container">
        <h1>401</h1>
        <h2>Pagina no encontrada</h2>
      </section>
    </Layout>
  );
}

export default NotFoundPage;
