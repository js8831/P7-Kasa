import "./Apartment.scss";

// Importation de ce hook pour récupérer l'id
import { useParams } from "react-router-dom";

// Importation des données concernant les appartments
import data from "../../assets/data/data.json";

// Importation des composants enfants
import Slider from "../../components/Slider/Slider";
import ApartmentTag from "../../components/ApartmentTag/ApartmentTag";
import Collapse from "../../components/Collapse/Collapse";
import Rate from "./../../components/Rate/Rate";
import HostName from "./../../components/HostName/HostName"

// Le composant fonction parent qui appelle les composants fonction enfants
export default function Apartment() {

  // On récupere l'id dans la constante "productId"
  const { productId } = useParams();

  // On mappe "data" pour récup l'appartement (et ses caractéristiques) qui a pour id celui renseigné dans les paramètres d'url
  const apartment = data.find((apartment) => apartment.id === productId);
  
  // ??????????????????  
  const {
    title,
    location,
    rating, host, equipments, description, pictures,
  } = apartment;
  
  console.log(title, apartment);

  return (
    <section className="apartment">
      <Slider props={pictures} />
      <div className="apartment__content">
        <div className="apartment__informations">
          <h1 className="apartment__title">{title}</h1>
          <p className="apartment__location">{location}</p>
          <div className="apartment__tags">
            {apartment.tags.map((tag, index) => (
              <ApartmentTag key={index} getTag={tag} /> 
            ))}
          </div>
        </div>
        <div className="apartment__rating-and-host">
          <Rate rating={rating} />
          <HostName host={host} />
        </div>
      </div>
     {/*  <div className="apartment__dropdowns">
             <Collapse title="description" content={description} />
        <Collapse title="équipement" content={equipments} />
      </div> */}
    </section>
  );
}
