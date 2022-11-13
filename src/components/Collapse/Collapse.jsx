// Import du hook d'état "useState"
import { useState } from "react";

import "./Collapse.scss";

import arrowdown from "../../assets/img/dropdown-arrow-desktop.png";

function Collapse({ content, title }) {
  // On initialise isOpen (la variable d'état) sur false. Et setIsOpen est la fonction callback qui permet d'actualiser l'état (true ou false dans ce cas présent)
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="collapse">
      {/* className car class c'est pour JS */}
      <div
        className={`collapse__content ${
          !isOpen ? "collapse__content--margin" : ""
        }`}
        // Au clique, on met l'inverse de l'état actuel d'isOpen grâce à la fct setIsOpen
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="collapse__title">{title}</div>
        <img
          className={`collapse__arrow ${
            isOpen ? "collapse__arrow--rotate" : ""
          }`}
          src={arrowdown}
          alt=""
        />
      </div>
      {/* Ternaire (if, else) : si isOpen est "true" on applique la className "__text" sinon "__hide" */}
      <div className={isOpen ? "collapse__text" : "collapse__hide"}>
        {content}
      </div>
    </div>
  );
}

export default Collapse;
