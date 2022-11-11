import "./ApartmentCard.scss";

function ApartmentCard(props) {
  return (
    <article className="article">
      <img className="article__image" src={props.cover} alt="" />
      <div className="article__title">{props.title}</div>
    </article>
  );
}

export default ApartmentCard;
