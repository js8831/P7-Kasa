import React from "react";

import "./Collapse.scss";

export default function Collapse({ props }) {
  const dropDownData = [
    {
      title: "Description",
      content: props.description,
    },
    {
      title: "Equipements",
      content: props.equipments,
    },
  ];

  return {
    /* <div className="description">
      {dropDownData.map((object) => (
        <div></div>
      ))}
    </div> */
  };
}
