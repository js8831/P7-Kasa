// Import du style associé
import "./Home.scss";

// Import des composants essentiels
import Banner from "../../components/Banner/Banner";
import ApartmentCard from "../../components/ApartmentCard/ApartmentCard";

// Import des données
import data from "../../assets/data/data.json";
import bannerImg from "../../assets/img/bannerImg.jpeg";

// Import de link via...
import { Link } from "react-router-dom";

// Composant fonction "Home" de la page Home. Parent des composants genérés dans le return
function Home() {
  const bannerTitle = "Chez vous, partout et ailleurs";
  return (
    <div>
      {/* Utilisation des props title et picture */}
      <Banner title={bannerTitle} picture={bannerImg} />
      <main className="main">
        {data.map((apartment) => {
          /* return generera les liens de redirection des cartes */
          return (
            <Link
              className="main__link"
              // Redirection vers le chemin ci-dessous avec la variable en paramètre (cme défini dans le routeur)
              to={`/apartment/${apartment.id}`}
              // Pour identifier les elements d'une liste de manière unique
              key={apartment.id}
              title={apartment.title}
            >
              {/* le spread operator pour récup toutes les données de chaque appartement mappé.
              Dans le le composant ci-dessous on récupère seulement le "cover" et le "title" mais ça fait plus court */}
              <ApartmentCard {...apartment} />
            </Link>
          );
        })}
      </main>
    </div>
  );
}

// Export pour réutilisation dans le routeur
export default Home;
