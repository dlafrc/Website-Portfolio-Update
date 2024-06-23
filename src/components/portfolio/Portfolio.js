import React from "react";
import "./portfolio.css";
import {FaFile} from "react-icons/fa";

//Images 

import Portfolio1 from '../../assets/portfolio1.png';
import Portfolio2 from '../../assets/portfolio2.png';
import Portfolio3 from '../../assets/portfolio3.png';
import Portfolio4 from '../../assets/portfolio4.png';
import Portfolio5 from '../../assets/portfolio5.png';
import Portfolio6 from '../../assets/portfolio6.png';
import Portfolio7 from '../../assets/portfolio7.png';
import Portfolio8 from '../../assets/portfolio8.png';
import Portfolio9 from '../../assets/portfolio9.png';
import Portfolio10 from '../../assets/portfolio10.png';
import Portfolio11 from '../../assets/portfolio11.png';
import Portfolio12 from '../../assets/portfolio12.png';

//sebuah array yang diberi nama projects yg berisi objek-objek untuk portfolio
const projects = [
  
  {
    id: 1,
    image: Portfolio1,
    title: "First Design Content",
    source: "https://www.instagram.com/p/CrNvCn4P_PW/",
  },
  {
    id: 2,
    image: Portfolio2,
    title: "Gita's Birthday Project Carrd",
    source: "https://sacgit-day.carrd.co/",
  },
  {
    id: 3,
    image: Portfolio3,
    title: "Froggy Animated Design Content",
    source: "https://www.instagram.com/p/CuRjoaASXz4/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==",
  },
  {
    id: 4,
    image: Portfolio4,
    title: "Fan Account Biodata Carrd Project",
    source: "https://zeuscif.carrd.co/",
  },
  {
    id: 5,
    image: Portfolio5,
    title: "Niswa Alfiyya's Birthday Carrd Project",
    source: "https://fyas-bday.carrd.co/",
  },
  {
    id: 6,
    image: Portfolio6,
    title: "Anxiety Disorder 2D Animation Project",
    source: "https://drive.google.com/file/d/1CDLVww52EjFTiHx38izGLpNRTFLpqNmJ/view?usp=sharing",
  },
  {
    id: 7,
    image: Portfolio7,
    title: "Fun in The Wild 3D Animation",
    source: "https://drive.google.com/file/d/11ta1pi0htXnPIQnlwoUXOHPhq3hJ12dN/view?usp=sharing",
  },
  {
    id: 8,
    image: Portfolio8,
    title: "Website Portfolio (Old)",
    source: "https://portfolio-website-dellar.vercel.app/",
  },
  {
    id: 9,
    image: Portfolio9,
    title: "Website Posyandu 'ANAK'",
    source: "https://github.com/dlafrc/Web-Posyandu.git",
  },
  {
    id: 10,
    image: Portfolio10,
    title: "Design Pengukuhan Guru Besar",
    source: "https://drive.google.com/drive/folders/1ywRbjUS2YZzTpc3LfhvzXsP36igzeFkE?usp=sharing",
  },
  {
    id: 11,
    image: Portfolio11,
    title: "Poster Makrab Party",
    source: "https://drive.google.com/drive/folders/1zXQxfP3XE5ksdWpJMcbE_tJgkIHX_xFE?usp=sharing",
  },
  {
    id: 12,
    image: Portfolio12,
    title: "Syifa's Birthday Carrd Project",
    source: "https://bangsatie.carrd.co/",
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Latest Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {projects.map((project) => {
          return (
            <article className="portfolio__item" key={project.id}>
              <div className="portfolio__item-image">
                <img src={project.image} alt={`Project #${project.id}`} />
              </div>

              <h3>{project.title}</h3>

              <div className="portfolio__item-cta">
                <a href={project.source} 
                   className="btn" 
                   target='_blank'
                   rel="noreferrer">
                  <FaFile></FaFile> Source
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
