import React, { Component } from "react";
import { Slide, Image } from "spectacle";
import Title from "../components/Title";
import Text from "../components/Text";

export default class extends Component {
  state = {
    show: false
  };
  componentDidMount() {
    const listener = e => this.keyDown(e);
    document.addEventListener("keydown", listener);
    this.removeListener = () =>
      document.removeEventListener("keydown", listener);
  }
  componentWillUnmount() {
    this.removeListener && this.removeListener();
  }
  keyDown(e) {
    console.log(e.keyCode);
    if (e.keyCode == 38) {
      this.setState({
        show: false
      });
    } else if (e.keyCode == 40) {
      this.setState({
        show: true
      });
    }
  }
  render() {
    return (
      <Slide>
        <Title desc="Runs across workers">Efficiency - Faster</Title>
        <Image height={500} src={require("../images/paralle_console.png")} />
        {this.state.show ? (
          <Text className="webpack-message" textColor="secondary">
            {" "}
            webpack switched (from Mocha) to Jest reduced from 20 minutes to 90
            seconds!!! (on my PC)
          </Text>
        ) : null}
      </Slide>
    );
  }
}
