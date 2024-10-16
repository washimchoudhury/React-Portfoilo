import React from "react";
import skills from "./data/skills.json";
const Skills = () => {
  return (
    <>
      <div className="container skills" id="skills">
        <h1>Skills</h1>
        <div className="items" data-aos="flip-left" data-aos-duration="1000">
          {skills.map((data) => {
            return (
              <>
                <div className="item" key={data.id}>
                  <img src={`/assets/${data.imageSrc}`} />
                  <h3>{data.title}</h3>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Skills;
