import React from "react";
import "../main/mainestilo.css"

const ContenidoPrincipal = () => {
  return (
    <main className="main-container ">
      <div className="parrafo parrafo-uno">
        <h3 className="titulo">Transform your brand</h3>
        <p className="texto">
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </p>
        <p className="leer">LEARN MORE</p>
      </div>
      <div className="parrafo parrafo-dos"></div>
      <div className="parrafo parrafo-tres"></div>
      <div className="parrafo parrafo-cuatro">
        <h3 className="titulo">Stand out to the right audience</h3>
        <p className="texto">
          Using a collaborative formula of designers, researchers,
          photographers, videographers, and copywriters, well build and extend
          your brand in digital places.
        </p>
        <p className="leer">LEARN MORE</p>
      </div>
      <div className="parrafo parrafo-cinco">
        <h3 className="titulo">Graphic design</h3>
        <p className="texto">
          Great design makes you memorable. We deliver artwork that underscores
          your brand message and captures potential clients attention.
        </p>
      </div>
      <div className="parrafo parrafo-seis">
        <h3 className="titulo"> Photography</h3>
        <p className="texto">
          Increase your credibility by getting the most stunning, high-quality
          photos that improve your business image.
        </p>
      </div>
    </main>
  );
};

export default ContenidoPrincipal;
