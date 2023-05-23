import React from "react";
import NavBar from "./componentes/nav/nav";
import Header from "./componentes/header/header";
import ContenidoPrincipal from "./componentes/main/main";
import Testimonials from "./componentes/article/article";
import Fotos from "./componentes/section/section";
import Footer from "./componentes/footer/footer";
import "../src/App.css"


function App() {
  return (
    <div className="general">
      <NavBar />
      <Header />
      <ContenidoPrincipal />
      <Testimonials />
      <Fotos />
      <Footer />
    </div>
  );
}

export default App;
