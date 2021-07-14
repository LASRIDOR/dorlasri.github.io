
import React, { Component } from "react";
import Container from "../components/Container";
import Project from "../components/Project";
import Link from "../components/Link";
import { container } from "../assets/scss/pages/Projects.module.scss";
import projects from "../_projects";

class Projects extends Component {
  render() {
    return (
      <Container size="medium">
        <div className={container}>
          <h1>Projects</h1>
          {projects.map((project, index) => (
            <Project project={project} key={index} />
          ))}
          <p>
            The full list of my hackathon projects can be found on my{" "}
            <Link href="https://devpost.com/aaronosher">Devpost</Link>.
          </p>
        </div>
      </Container>
    );
  }
}

export default Projects;
