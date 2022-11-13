import React from 'react';
import ReactDOM from 'react-dom/client';
// Import de react router pour...
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/style/normalize.css";
import "./index.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Apartment from "./pages/Apartment/Apartment";
import About from "./pages/About/About";
import NoMatch from "./pages/NoMatch/NoMatch";
import reportWebVitals from "./reportWebVitals";

// On vient greffer React à notre html avec la div ayant "root"
// On met ce snippet dans une constante
const root = ReactDOM.createRoot(document.getElementById("root"));
// Et grâce à la méthode "render" on peut generer les composants
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* En haut de chaque route, on met le header et en bas le footer */}
      <Header />
      {/* Importation de nos routes. Path c'est le chemin et element c'est le composant renvoyé */}
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="apartment/:productId" element={<Apartment />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

