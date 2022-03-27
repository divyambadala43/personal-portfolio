import React from "react";
import { projectsData } from "../../data/data";

const Portfolio = () => {
  const projects = projectsData.map((project) => {
    return (
      <>
        <li
          className="project-item  active"
          data-filter-item
          data-category={project.projectCategory}
        >
          <a href="/">
            <figure className="project-img">
              <div className="project-item-icon-box">
                <ion-icon name="eye-outline"></ion-icon>
              </div>

              <img src={project.thumbnail} alt="finance" loading="lazy" />
            </figure>

            <h3 className="project-title"> {project.projectTitle} </h3>

            <p className="project-category">{project.projectCategory}</p>
          </a>
        </li>
      </>
    );
  });
  return (
    <article className="portfolio active" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        <ul className="filter-list">
          <li className="filter-item">
            <button className="active" data-filter-btn>
              All
            </button>
          </li>

          <li className="filter-item">
            <button data-filter-btn>Web design</button>
          </li>

          <li className="filter-item">
            <button data-filter-btn>Applications</button>
          </li>

          <li className="filter-item">
            <button data-filter-btn>Web development</button>
          </li>
        </ul>

        <div className="filter-select-box">
          <button className="filter-select" data-select>
            <div className="select-value" data-selecct-value>
              Select category
            </div>

            <div className="select-icon">
              <ion-icon name="chevron-down"></ion-icon>
            </div>
          </button>

          <ul className="select-list">
            <li className="select-item">
              <button data-select-item>All</button>
            </li>

            <li className="select-item">
              <button data-select-item>Web design</button>
            </li>

            <li className="select-item">
              <button data-select-item>Applications</button>
            </li>

            <li className="select-item">
              <button data-select-item>Web development</button>
            </li>
          </ul>
        </div>

        <ul className="project-list">{projects}</ul>
      </section>
    </article>
  );
};

export default Portfolio;
