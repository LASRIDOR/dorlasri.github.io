import React, { Component, Fragment } from "react";
import runes from "runes";
import { typewriter } from "../assets/scss/components/Greeting.module.scss";

export interface GreetingProps {
  children: string;
}

export interface GrettingState {
  greetingText: string;
  visible: boolean;
  cursor: boolean;
  cursorInterval: NodeJS.Timeout;
  finished: boolean;
}

export default class Greeting extends Component<GreetingProps, GrettingState> {
  static defaultProps = {
    children: "Hi, I'm Dor. 👋",
  };

  constructor(props: GreetingProps) {
    super(props);
    this.typewrite = this.typewrite.bind(this);
    this.cursor = this.cursor.bind(this);

    this.state = {
      greetingText: props.children,
      visible: false,
      cursor: false,
      cursorInterval: setInterval(this.cursor, 700),
      finished: false,
    };

    setTimeout(this.typewrite, 1000);
  }

  cursor() {
    const { cursor: cursorState, visible } = this.state;
    if (visible) {
      this.setState({
        cursor: !cursorState,
      });
    }
  }

  typewrite() {
    const { children: message } = this.props;
    const { cursorInterval } = this.state;
    let i = 1;

    const intervalId = setInterval(() => {
      if (i == message.length) {
        clearInterval(intervalId);
        clearInterval(cursorInterval);
        this.setState({
          cursor: false,
          finished: true,
        });
        return;
      }

      this.setState({
        greetingText: runes.substr(message, 0, i),
        visible: true,
      });
      console.log("type");
      i++;
    }, 2500 / message.length);
  }

  render() {
    const { greetingText, visible, cursor, finished } = this.state;
    return (
      <Fragment>
        <div
          className={typewriter}
          style={{ visibility: visible ? "visible" : "hidden" }}
        >
          <h1>
            {greetingText}
            {!finished && (
              <span style={{ visibility: cursor ? "visible" : "hidden" }}>
                _
              </span>
            )}
          </h1>
        </div>
      </Fragment>
    );
  }
}
