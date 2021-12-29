import React, { component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './COMPONENTS/Greet'

class App extends component {
  render() {
    return(
    <div className="App">
      
        <Greet />
    </div>
    );
}
}

export default App;
