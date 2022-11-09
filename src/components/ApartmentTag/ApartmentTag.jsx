import "../ApartmentTag/ApartmentTag.scss";

function ApartmentTag({ getTag }) {
  return (
    <div className="tag">
      <p className="tag__text">{getTag}</p>
    </div>
  );
}

export default ApartmentTag;
