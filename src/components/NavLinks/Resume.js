import React from "react";
import { timelineEducationData, timelineExperienceData } from "../../data/data";

const Resume = () => {
  const educationData = timelineEducationData.map((education) => {
    return (
      <>
        <li key={education.id} className="timeline-item">
          <h4 className="h4 timeline-item-title">{education.name}</h4>

          <span>{education.year}</span>

          <p className="timeline-text">{education.description}</p>
        </li>
      </>
    );
  });

  const experienceData = timelineExperienceData.map((experience) => {
    return (
      <>
        <li key={experience.id} className="timeline-item">
          <h4 className="h4 timeline-item-title">{experience.title}</h4>

          <span> {experience.duration} </span>

          <p className="timeline-text">{experience.description}</p>
        </li>
      </>
    );
  });

  return (
    <article className="resume active" data-page="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>

          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">{educationData}</ol>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>

          <h3 className="h3">Experience</h3>
        </div>

        <ol className="timeline-list">{experienceData}</ol>
      </section>

      <section className="skill">
        <h3 className="h3 skills-title">My skills</h3>

        <ul className="skills-list content-card">
          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Web design</h5>
              <data value="80">80%</data>
            </div>

            <div className="skill-progress-bg">
              <div
                className="skill-progress-fill"
                style={{ width: "80%" }}
              ></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Graphic design</h5>
              <data value="70">70%</data>
            </div>

            <div className="skill-progress-bg">
              <div
                className="skill-progress-fill"
                style={{ width: "70%" }}
              ></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Branding</h5>
              <data value="90">90%</data>
            </div>

            <div className="skill-progress-bg">
              <div
                className="skill-progress-fill"
                style={{ width: "90%" }}
              ></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">WordPress</h5>
              <data value="50">50%</data>
            </div>

            <div className="skill-progress-bg">
              <div
                className="skill-progress-fill"
                style={{ width: "50%" }}
              ></div>
            </div>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default Resume;
