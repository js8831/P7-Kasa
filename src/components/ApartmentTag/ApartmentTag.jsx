import "../ApartmentTag/ApartmentTag.scss";

export default function ApartmentTag({ getTag }) {
  return (
    <div className="tag">
      <p className="tag__text">{getTag}</p>
    </div>
  );
}
