import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppBarComp from './components/AppBar';
import StudentComp from './components/Student';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBarComp/>
        <StudentComp/>
      </div>
    );
  }
}

export default App;
