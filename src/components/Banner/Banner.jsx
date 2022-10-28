import "./Banner.scss";

export default function Banner({ title, picture }) {
  return (
    <div className="wrapper-banner">
      <img className="wrapper-banner__img" src={picture} alt="" />
      <div className="wrapper-banner__title">{title}</div>
    </div>
  );
}
