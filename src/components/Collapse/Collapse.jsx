import React from "react";
import { useState } from "react";
import "./Collapse.scss";
import arrowdown from "../../assets/img/dropdown-arrow-desktop.png";

function Collapse({ content, title }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="collapse">
      {/* au clique, on met l'inverse de l'état actuel d'isOpen grâce à la fct setIsOpen
       */}
      <div
        className={`collapse__content ${
          !isOpen ? "collapse__content--margin" : ""
        }`}
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
      <div className={isOpen ? "collapse__text" : "collapse__hide"}>
        {content}
      </div>
    </div>
  );
}

export default Collapse;




