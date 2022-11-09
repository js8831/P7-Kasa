import "./Home.scss";
import Banner from "../../components/Banner/Banner";
import ApartmentCard from "../../components/ApartmentCard/ApartmentCard";
import data from "../../assets/data/data.json";
import bannerImg from "../../assets/img/bannerImg.jpeg";
import { Link } from "react-router-dom";

function Home() {
  const bannerTitle = "Chez vous, partout et ailleurs";
  return (
    <div>
      <Banner title={bannerTitle} picture={bannerImg} />
      <main className="main">
        {data.map((apartment) => {
          /* le spread operator pour récup toutes les données des appart. */
          /* keys car ... */
          /* return car ... */
          return (
            <Link
              to={`/apartment/${apartment.id}`}
              key={apartment.id}
              title={apartment.title}
            >
              <ApartmentCard {...apartment} />
            </Link>
          );
        })}
      </main>
    </div>
  );
}

export default Home;
