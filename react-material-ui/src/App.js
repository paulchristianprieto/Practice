import React, { Component } from "react";
import "./App.css";
import IconButtonSample from "./components/IconButtonSample";
import SemanticFontSample from "./components/SemanticFontSample";
import ButtonSample from "./components/ButtonSample";

class App extends Component {
  render() {
    return (
      <div>
        <h1>
          sample. Im going to create an app that have news feed and implement
          material UI
        </h1>
        <p>
          <IconButtonSample />
          <SemanticFontSample />
          <ButtonSample />
        </p>
      </div>
    );
  }
}

export default App;
