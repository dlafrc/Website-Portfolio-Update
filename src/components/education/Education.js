import React from "react";
import "./education.css";

const Education = () => {
  return (
    <section id="education">
      <h5>Academic Experience Spotlight</h5>
      <h2>My Educational Journey</h2>

      <div className="container education__container">

        <div className="education">
          <h3>Education</h3>

          <div className="education__content">
            <article className="education__details">
    
              <div>
                <h4>Junior High School 5 Ciamis</h4>
                <small className="text-light" style={{ display: "block", textAlign: "center" }}>2017 - 2019</small>
              </div>
            </article>

            <article className="education__details">
              <div>
                <h4>Senior High School 1 Ciamis</h4>
                <small className="text-light" style={{ display: "block", textAlign: "center" }}>2019 - 2022</small>
              </div>
            </article>

            <article className="education__details">
              <div>
                <h4>Indonesia University of Education</h4>
                <small className="text-light" style={{ display: "block", textAlign: "center" }}>2022 - Present</small>
              </div>
            </article>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;
