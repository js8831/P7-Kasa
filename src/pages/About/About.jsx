import Banner from "../../components/Banner/Banner";
import Collapse from "../../components/Collapse/Collapse";
import imgBanner from "../../assets/img/aboutbannerDesktop.png";
import aboutData from "../../assets/data/aboutData.json";

import "./About.scss";

function About() {
  return (
    <div className="about">
      <Banner picture={imgBanner} />
      <div className="about__dropdowns">
        <Collapse
          title="Fiabilité"
          content={aboutData.map((data) => {
            return data.fiability;
          })}
        />
        <Collapse
          title="Respect"
          content={aboutData.map((data) => {
            return data.respect;
          })}
        />
        <Collapse
          title="Service"
          content={aboutData.map((data) => {
            return data.service;
          })}
        />
        <Collapse
          title="Sécurité"
          content={aboutData.map((data) => {
            return data.security;
          })}
        />
      </div>
    </div>
  );
}

export default About;
