import React, { Component } from "react";
import AthleteList from "./AthleteList";
import ReaderHeader from "./ReaderHeader";

class App extends Component {
  render() {
    return (
      <table>
        <ReaderHeader />
        <AthleteList />
      </table>
    );
  }
}

export default App;
