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
import Aaron from "../assets/images/Aaron.jpg";
import {
  container,
  portrait,
  bio,
  brandButtons,
} from "../assets/scss/pages/About.module.scss";

class App extends Component {
  render() {
    return (
      <Container>
        <div className={container}>
          <img src={Aaron} className={portrait} />
          <Greeting />
          <div className={bio}>
            I study computer science at the{" "}
            <Link href="https://cs.nott.ac.uk">University of Nottingham</Link>,
            am the president of{" "}
            <Link href="https://hacksocnotts.co.uk">HackSoc</Link>, a Coach at{" "}
            <Link href="https://mlh.io/eu">Major League Hacking</Link>, and
            co-founder of{" "}
            <Link href="https://hackathons.org.uk">Hackathons UK</Link>.
          </div>

          <div className={brandButtons}>
            <Link href="https://linkedin.com/in/aaronosher">
              <FontAwesomeIcon
                icon={faLinkedinIn}
                color="black"
                className="icon"
                size="2x"
              />
            </Link>
            <Link href="https://twitter.com/aaronosher">
              <FontAwesomeIcon
                icon={faTwitter}
                color="black"
                className="icon"
                size="2x"
              />
            </Link>
            <Link href="https://github.com/aaronosher">
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
}

export default App;
