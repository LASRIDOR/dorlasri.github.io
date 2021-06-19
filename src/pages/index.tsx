import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import Container from "../components/Container";
import Link from "../components/Link";
import Greeting from "../components/Greeting";
import {
  container,
  portraitContainer,
  portrait,
  bio,
  brandButtons,
} from "../assets/scss/pages/About.module.scss";
import { graphql } from "gatsby";
import Img, { FluidObject } from "gatsby-image";
import SEO from "../components/SEO";

interface AppPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
        author: string;
      }
    }
    dor: {
      childImageSharp: {
        fluid: FluidObject
      }
    }
  }
}

const App: React.FC<AppPageProps> = ({ data }) => {  
  return (
    <Container>
      <SEO title="About" />
      <div className={container}>
        <div className={portraitContainer}>
          <Img
            fluid={data.dor.childImageSharp.fluid}
            className={portrait}
            alt="Portrait of Dor"
          />
        </div>
        <Greeting />
        I study computer science at the Academic College of Tel Aviv , am the organizer of MTA Hack , working at WSC - Sports , and volunteer at LATET .
        <div className={bio}>
          I study computer science at the{" "}
          <Link href="https://www.mta.ac.il/he-il/">Academic College of Tel Aviv</Link>
          , am the organizer of{" "}
          <Link href="https://mtahack.com/">MTA Hack</Link>, working at{" "}
          <Link href="https://wsc-sports.com/">WSC - Sports</Link>, and
          volunteer at{" "}
          <Link href="https://www.latet.org.il/">LATET</Link>.
        </div>

        <div className={brandButtons}>
          <Link href="https://www.linkedin.com/in/dor-lasri-ab6703160/">
            <FontAwesomeIcon
              icon={faLinkedinIn}
              color="black"
              className="icon"
              size="2x"
            />
          </Link>
          <Link href="#">
            <FontAwesomeIcon
              icon={faTwitter}
              color="black"
              className="icon"
              size="2x"
            />
          </Link>
          <Link href="https://github.com/LASRIDOR">
            <FontAwesomeIcon
              icon={faGithub}
              color="black"
              className="icon"
              size="2x"
            />
          </Link>
        </div>
      </div>
    </Container>
  );
}

export default App;

export const AppPageQuery = graphql`
  query AppPageQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
    dor: file(name: { eq: "Dor"}) {
      childImageSharp {
        fluid(maxWidth: 540) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
