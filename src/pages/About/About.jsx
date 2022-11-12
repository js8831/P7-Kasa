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
        {aboutData.map((data, index) => {
          return (
            <Collapse key={index} title={data.title} content={data.content} />
          );
        })}
      </div>
    </div>
  );
}

export default About;
