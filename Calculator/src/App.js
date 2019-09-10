import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import KeyPad from "./components/KeyPad";
import Output from "./components/Output";

class App extends Component {
  /*----initial state of the calculator--*/
  state = {
    result: ""
  };
  /*----when button is pressed--*/

  buttonPressed = buttonName => {
    if (buttonName === "=") {
      this.calculate();
    } else if (buttonName === "C") {
      this.reset();
    } else if (buttonName === "CE") {
      this.backspace();
    } else
      this.setState({
        result: this.state.result + buttonName
      });
  };
  /*----function for backspace--*/

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    });
  };
  /*----reset state--*/

  reset = () => {
    this.setState({
      result: ""
    });
  };
  /*----display results state--*/

  calculate = () => {
    try {
      this.setState({
        result: (eval(this.state.result) || "") + ""
      });
    } catch (e) {
      this.setState({
        result: "error"
      });
    }
  };
  render() {
    return (
      <div className="App">
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
          integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
          crossorigin="anonymous"
        />
        <Header />
        <div className="calc-body">
          <Output result={this.state.result} />
          <KeyPad buttonPressed={this.buttonPressed} />
        </div>
      </div>
    );
  }
}

export default App;
