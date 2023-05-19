import React from "react";
import "../article/article.css";
import emily from "../article/img/image-emily.jpg";
import jennie from "../article/img/image-jennie.jpg";
import thomas from "../article/img/image-thomas.jpg";

const Testimonials = () => {
  return (
    <article className="articulos">
      <h2> Client testimonials</h2>
      <div className="articulos-content">
        <div className="articulo">
          <img className="img1" src={emily} alt="emili" />
          <p>
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </p>
          <h4>Emily R.</h4>
          <h5>Marketing Director</h5>
        </div>
        <div className="articulo">
          <img className="img2" src={jennie} alt="img" />
          <p>
            Sunnysides enthusiasm coupled with their keen interest in our brands
            success made it a satisfying and enjoyable experience.
          </p>
          <h4>Thomas S.</h4>
          <h5>Chief Operating Officer</h5>
        </div>
        <div className="articulo">
          <img className="img3" src={thomas} alt="img" />
          <p>
            Incredible end result! Our sales increased over 400% when we worked
            with Sunnyside. Highly recommended!
          </p>
          <h4>Jennie F.</h4>
          <h5>Business Owner</h5>
        </div>
      </div>
    </article>
  );
};

export default Testimonials;
