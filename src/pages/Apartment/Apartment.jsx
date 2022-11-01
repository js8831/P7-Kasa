import "./Apartment.scss";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import data from "../../assets/data/data.json";

// Composants enfants
import Slider from "../../components/Slider/Slider";
/* import ApartmentTag from "../../components/ApartmentTag/ApartmentTag";
import Collapse from "../../components/Collapse/Collapse";
import Rate from "./../../components/Rate/Rate"; */

export default function Apartment() {
  // Pourquoi entre accolades ?
  const { productId } = useParams();
  const [apt, setApt] = useState([]);

  useEffect(() => {
    getApartment();
    console.log(apt);
  }, []);

  function getApartment() {
    const apartment = data.find((apartment) => apartment.id === productId);
    setApt(apartment);
  }

  return (
    <div className="wrapper-apartment">
      <Slider slides={apt} />
      <h1>{apt.title}</h1>
      <p>{apt.description}</p>
      {/*   <ApartmentTag />
      <Collapse />
      <Rate /> */}
    </div>
  );
}
