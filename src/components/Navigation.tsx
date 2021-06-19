import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import {
  navigation,
  active,
} from "../assets/scss/components/Navigation.module.scss";

const Navigation: React.FC = () => {
  const cv = useStaticQuery<{file: { publicURL: string; } }>(graphql`
    query CVQuery {
      file(name: {eq: "Dor_Lasri_Resume"}) {
        publicURL
      }
    }
  `)

  return (
    <div className={navigation}>
      <Link to="/" activeClassName={active}>
        About
      </Link>
      {/* <Link to="/projects" activeClassName={active}>
        Projects
      </Link>
      <Link to="/activities" activeClassName={active}>
        Activities
      </Link> */}
      <a href={cv.file.publicURL} target="_blank" rel="noreferrer noopener">
        CV
      </a>
    </div>
  );
};

export default Navigation;
