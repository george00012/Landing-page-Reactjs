import React from 'react';
import NavBar from './componentes/nav/nav';
import Header from './componentes/header/header';
import ContenidoPrincipal from './componentes/main/main';

function App() {
  return (
    <div>
      <NavBar/>
      <Header/>
      <ContenidoPrincipal/>
    </div>
  );
}

export default App;
