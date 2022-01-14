import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://fdn.gsmarena.com/imgroot/news/21/09/iphone-13-pro-announced/-1220x526/gsmarena_000.jpg"
            alt="First slide"
            width="1220px"
            height="526px"
          />

          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://www.fredzone.org/wp-content/uploads/2021/01/galaxy-s21-ultra.jpg"
            alt="Second slide"
            width="1220px"
            height="526px"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn-files.kimovil.com/default/0006/66/thumb_565372_default_big.jpg "
            alt="Third slide"
            width="1220px"
            height="526px"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <section className="logo">
        <div>
          {" "}
          <img
            className="imgBox"
            src="https://images.samsung.com/is/image/samsung/assets/africa_fr/about-us/brand/logo/mo/256_144_4.png?$512_N_PNG$ "
            alt="Third slide"
            width="220px"
            height="120px"
          />
        </div>
        <div>
          {" "}
          <img
            className="imgBox"
            src="https://cdn.icon-icons.com/icons2/2699/PNG/512/apple_logo_icon_168588.png "
            alt="Third slide"
            width="220px"
            height="120px"
          />
        </div>
        <div>
          {" "}
          <img
            className="imgBox"
            src="https://imgsrv2.voi.id/Vi6EkmdoO5tjBWOBZeLS5fA4K2_V1g5h7q-Sq6uQ3Ac/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy80MTgxNS8yMDIxMDMzMTE1MjctbWFpbi5qcGc.jpg "
            alt="Third slide"
            width="220px"
            height="120px"
          />
        </div>
      </section>
      <h1 className="h">WELCOME TO PHONE STORE</h1>
      <h6 className="h">
        Your PhoneStore store is proud to present its site to you! and wish you
        happy browsing!
      </h6>

      <section className="section">
        <img
          className="imgBox"
          src="https://img2023.weyesimg.com/uploads/ouyeedisplays.allweyes.com/images/15336208422761.JPG?imageView2/2/w/1920/q/75 "
          alt="Third slide"
          width="100%"
          height="526px"
        />
      </section>
    </div>
  );
};

export default Home;
