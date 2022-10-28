// C'est pourquoi ?
import React from "react";
import "./ApartmentCard.scss";
import { useState } from "react";

function ApartmentCard(props) {
  const [isActive, setActive] = useState(true);
  return (
    <article className="article">
      <img className="article__image" src={props.cover} alt="" />
      <div className="article__title" onClick={() => setActive(!isActive)}>
        {props.title}
      </div>
      {/* <div className={isActive ? "text" : "hide"}>text</div> */}
      {/*       <div className={`btn-group pull-right ${showBulkActions ? 'shown' : 'hidden'}`}></div>
       */}{" "}
    </article>
  );
}

export default ApartmentCard;
