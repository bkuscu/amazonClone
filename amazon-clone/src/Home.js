import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            title="Harry Potter and the Philosopher's Stone"
            price={19.99}
            image="http://static3.businessinsider.com/image/511cffe5eab8ea1355000012-948-1445/new%20harry%20potter%20cover.jpg"
            rating={5}
          />
          <Product
            title="All-new Echo (4th generation) | With premium sound, smart home hub and Alexa | Charcoal"
            price={59.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71UGFF-EzFL._AC_SL1000_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            title="Echo Wall Clock—see timers at a glance; requires compatible Echo device"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/512euKLE99L._AC_SL1000_.jpg"
            rating={3}
          />
          <Product
            title="Nintendo Switch Console"
            price={329.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71N0qlJwsWL._SL1500_.jpg"
            rating={4}
          />
          <Product
            title="Sony PlayStation 5"
            price={599.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61qbqFcvoNL._SL1500_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            title="Samsung C49HG90DMU 124.20 cm (49 inch) curved gaming monitor (3840 x 1080 pixels, Ultra Wide 32: 9 format, 144hz, 1ms) matt black"
            price={899.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71MlcO29QOL._AC_SL1500_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
