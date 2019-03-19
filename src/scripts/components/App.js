import React, { Component } from 'react';
import RaceTable from './table/RaceTable';
import Footer from './footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="container">
        <RaceTable />
        <Footer />
      </div>
    );
  }
}

export default App;
