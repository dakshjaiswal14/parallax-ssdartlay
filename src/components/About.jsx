import React from "react";
import "../styles/about.css";
//import the image aboutUs.jpg
import { Slideshow } from "./Slideshow";
import img1 from "../assets/img/art/artworks/1.JPG";
import img2 from "../assets/img/art/artworks/2.jpg";
import img3 from "../assets/img/art/artworks/3.jpg";
import img4 from "../assets/img/art/artworks/4.jpg";
import img5 from "../assets/img/art/artworks/5.jpg";
import img6 from "../assets/img/art/artworks/6.jpg";
import img7 from "../assets/img/art/artworks/7.jpg";
import img8 from "../assets/img/art/artworks/8.jpg";
import img9 from "../assets/img/art/artworks/9.jpg";

function About() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
  return (
    <div className="about-page">
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <Slideshow images={images} />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              About SSD Arts
            </h1>
            <p className="lead">
              We are a team of creative enthusiast who believe to add
              unforgettable memories in peoples life. Since 2015 we have
              delivered our services to NGO's, companies and individual
              customers. We especially deal with pencil and charcoal sketches in
              different types and sizes. We can provide customised corporate
              gifts at lowest prices as compared to the prevailing market price.
              We organise exhibitions also. Our motive is to become top
              customized Art work service providers by providing hand crafted
              masterpieces for each client.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
