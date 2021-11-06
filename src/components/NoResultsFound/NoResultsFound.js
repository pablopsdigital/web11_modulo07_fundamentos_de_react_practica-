import './NoResultsFound.css';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

function NoResultsFound({ ...props }) {
  return (
    <div className="noresultsfound__container">
      <div className="noresultsfound__container">
        <div className="emoji">😞</div>
        <h1>No announcement yet</h1>
        <p>Do you want to create the first one?</p>
      </div>
      <Link to="/adverts/new">
        <Button className="login-button">Create advert</Button>
      </Link>
    </div>
  );
}
export default NoResultsFound;
