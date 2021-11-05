import AdvertisementCard from "../../components/AdvertisementCard/AdvertisementCard";
import Layout from "../../containers/Layout/Layout";
import "./AdvertsPage.css";
import { useState, useEffect } from "react";
import { getAdvertisements } from "./AdvertsPageService";
import axios from "axios";

function AdvertsPage({ title, ...props }) {
  //States
  const [advertisements, setAdvertisements] = useState([]);

  useEffect(() => {
    getAdvertisements().then((advertisements) =>
      setAdvertisements(advertisements)
    );
  }, []);

  // useEffect(() => {
  //   const getList = async () => {
  //     try {
  //       const respose = await axios.get(
  //         "http://localhost:3001/api/v1/adverts",
  //         {
  //           headers: {
  //             email: "pablopsdigital@gmail.com",
  //             password: "1111",
  //           },
  //         }
  //       );
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getList();
  // }, []);

  //Return
  //=======================================================================
  return (
    <Layout {...props}>
      <section className="container">
        <h2 className="card-list-title">{title}</h2>

        {/* <div className="card-list-wrapper">
        <div>Loadin</div>
        <div>Alert</div>
      </div> */}

        <ul className="card-list-auto-grid">
          {advertisements.map((advertisement) => (
            <AdvertisementCard
              key={advertisement.id}
              advertisement={advertisement}
            />
          ))}
        </ul>
      </section>
    </Layout>
  );
}
export default AdvertsPage;
