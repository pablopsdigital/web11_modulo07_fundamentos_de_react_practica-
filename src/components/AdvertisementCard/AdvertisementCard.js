import { Link } from 'react-router-dom';
import './AdvertisementCard.css';

function AdvertisementCard(props) {
  const advertisement = props.advertisement;

  return (
    <li className="card">
      <Link to="adverts/5" className="card-link">
        <img src={advertisement.photo} alt={advertisement.photo} />

        <div className="card-content">
          <p className="card-price">
            {advertisement.price}
            <span> EUR</span>
          </p>
          <h2 className="card-title">{advertisement.name}</h2>

          <div className="info-details">
            {advertisement.sale === 'sell' ? (
              <p className="advertisement-type background-sale">Sale</p>
            ) : (
              <p className="advertisement-type background-purchase">Purchase</p>
            )}
            <p className="date">Publication date: {advertisement.updatedAt}</p>
          </div>
          <div className="tags-details">
            {advertisement.tags.map((tag, index) => (
              <span key={index} href="url" className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </li>
  );
}

export default AdvertisementCard;
