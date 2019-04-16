import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RecipeContainerComponent from './RecipeContainerComponent'

class App extends Component {
  render() {
    return (
      <div className="App">
        <RecipeContainerComponent/>
      </div>
    );
  }
}

export default App;
