import React from "react";
import "../section/section.css";
import Milk from "../section/img/image-gallery-milkbottles.jpg";
import Orange from "../section/img/image-gallery-orange.jpg";
import Cono from "../section/img/image-gallery-cone.jpg";
import Sugar from "../section/img/image-gallery-sugar-cubes.jpg";

const Fotos = () => {
  return (
    <section className="imagenes">
      <div className="imagen">
        <img className="img-milk" src={Milk} alt="milk" />
      </div>
      <div className="imagen">
        <img className="img-orange" src={Orange} alt="orange" />
      </div>
      <div className="imagen">
        <img className="img-cono" src={Cono} alt="cono" />
      </div>
      <div className="imagen">
        <img className="img-sugar" src={Sugar} alt="sugar" />
      </div>
    </section>
  );
};

export default Fotos;
