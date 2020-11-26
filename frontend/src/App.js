import React from 'react';
import logo from './logo.svg';
import './App.css';
/*import {BrowseRouter as Router, Route, Link, Switch} from "react-router-dom";
import Dashboard from './Dashboard'
import Formulaire from './Formulaire'*/

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

/*class App extends Component {
  render(){
    return(
      <Router>
        <switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/Formulaire" component={Formulaire} />
        </switch>
      </Router>
    );
  }
}*/

export default App;
