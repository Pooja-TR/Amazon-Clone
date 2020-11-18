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
            id="334344"
            title="Wallpaper with HD print"
            price={10.99}
            image="https://www.w3schools.com/css/paris.jpg"
            rating={1}
          />
          <Product
            id="593492"
            title="Brand Shampoo"
            price={510.9}
            image="https://t3.ftcdn.net/jpg/03/71/16/68/240_F_371166858_5PzbuxejKdn25i96V1VQOzgz3249Y22T.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="251964"
            title="Night Light"
            price={44.5}
            image="https://t3.ftcdn.net/jpg/03/72/15/14/240_F_372151416_ught1QkFF4U6i7UI5PEFHvGsUQEuwwMh.jpg"
            rating={5}
          />
          <Product
            id="828281"
            title="Eco Friendly bags"
            price={30.0}
            image="https://t4.ftcdn.net/jpg/03/65/22/89/240_F_365228946_HnZfYCsnJ9jJShr8XmGUlo67LjxF1oF9.jpg"
            rating={3}
          />
          <Product
            id="893454"
            title="Foundation by Natural'ś"
            price={20.79}
            image="https://t3.ftcdn.net/jpg/03/72/21/28/240_F_372212804_3TuLfiJCv2aWN05C52uUQgqWufSfzPnt.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="221434"
            title="YOHO assistant"
            price={110.09}
            image="https://t3.ftcdn.net/jpg/02/73/71/52/240_F_273715251_rSZYTArq4SSGZ4t5N9rBcoxo79X7L0Y3.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
