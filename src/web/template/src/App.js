import React, { Component } from "react";
import config from "project-templates/project.config";

const ProjectRoot = config.entryComponent;

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ProjectRoot />
      </div>
    );
  }
}

export default App;
