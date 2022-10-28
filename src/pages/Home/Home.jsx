import "./Home.scss";
import Banner from "../../components/Banner/Banner";
import ApartmentCard from "../../components/ApartmentCard/ApartmentCard";
import data from "../../assets/data/data.json";
import bannerImg from "../../assets/img/bannerImg.jpeg";

export default function Home() {
  const bannerTitle = "Chez vous, partout et ailleurs";
  return (
    <div>
      <Banner title={bannerTitle} picture={bannerImg} />
      <main className="main">
        {data.map((apartment) => {
          /* le spread operator pour récup toutes les données des appart. */
          /* keys car ... */
          /* return car ... */
          return <ApartmentCard {...apartment} key={apartment.id} />;
        })}
      </main>
    </div>
  );
}
