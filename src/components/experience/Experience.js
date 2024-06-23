import React from "react";
import "./experience.css";

import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoPython } from "react-icons/io";
import { FaCode, FaDatabase, FaBookOpen,  FaPalette, FaMicrosoft, FaCloud } from "react-icons/fa";
import { SiJavascript, SiCss3 } from "react-icons/si";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">

        {/*========= Programing Languages==========*/}
        <div className="experience__programmingLanguages">
          <h3>Programing Languages</h3>

          <div className="experience__content">
            <div>
              <article className="experience__details">
                <FaCode className="experience__details-icon"></FaCode>
                <div>
                <h4>C/C++</h4>
                <small className="text-light">Intermediate</small>
                </div>
              </article>
            </div>

            <article className="experience__details">
              <FaDatabase className="experience__details-icon"></FaDatabase>
              <div>
                <h4>SQL</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <IoLogoPython className="experience__details-icon"></IoLogoPython>
              <div>
                <h4>Phyton</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>

            <article className="experience__details">
              <AiFillHtml5 className="experience__details-icon"></AiFillHtml5>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <SiJavascript className="experience__details-icon"></SiJavascript>
              <div>
                <h4>Java Script</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <SiCss3 className="experience__details-icon"></SiCss3>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

          </div>
        </div>


         {/*========= Skills ==========*/}
         <div className="experience_Skills">
          <h3>Skills</h3>

          <div className="experience__content">
            <div>
              <article className="experience__details">
                <FaPalette className="experience__details-icon"></FaPalette>
                <div>
                <h4>Graphic Design</h4>
                <small className="text-light">Creative Design Enthusiast</small>
                </div>
              </article>
            </div>

            <article className="experience__details">
              <FaBookOpen className="experience__details-icon"></FaBookOpen>
              <div>
                <h4>Copy Writing</h4>
                <small className="text-light">Content Crafting Explorer</small>
              </div>
            </article>

            <article className="experience__details">
              <FaMicrosoft className="experience__details-icon"></FaMicrosoft>
              <div>
                <h4>Microsoft Tools</h4>
                <small className="text-light">Ms. Word, Ms. Excel, and PowerPoint</small>
              </div>
            </article>

            <article className="experience__details">
              <FaCloud className="experience__details-icon"></FaCloud>
              <div>
                <h4>Design Tools</h4>
                <small className="text-light"> PS, AI, AE, Figma, Affinity Design, Corel Draw, Canva </small>
              </div>
            </article>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Experience;
