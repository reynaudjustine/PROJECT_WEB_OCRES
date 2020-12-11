import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Routes from './Routes';
import "./Dashboard.css"
import axios from 'axios'

/*import logo from './logo.svg';
import './App.css';*/
/*import {BrowseRouter as Router, Route, Link, Switch} from "react-router-dom";
import Dashboard from './Dashboard'
import Formulaire from './Formulaire'*/

/*function App() {
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
}*/

console.log("AUTRE TEST");
class App extends Component {
  render(){
    console.log("TEST RENDER");
    return(
      <div>
        <header>
        <nav class="navbar navbar-expand-lg navbar-light">
                    <div id="nav">
                        <div id="title"><h1>Dashboard</h1></div>
                        
                        <div id="bande"> 
                            <button class="btn btn-outline-secondary btn-sm" id="boutons">
                              <Link to="/">Dashboard</Link>
                            </button>

                            <button class="btn btn-outline-secondary btn-sm" id="boutons">
                              <Link to="/formulaire">Formulaire</Link>
                            </button>
                        </div>
                    </div>
                </nav>
          {/*<nav>
            <ol>
              <li><Link to="/">Dashboard</Link></li>
              <li><Link to="/formulaire">Formulaire</Link></li>
            </ol>
          </nav>*/}
        </header>
        <Routes/>
        {/*<footer id="footer">
          <p>Designed and developed by Justine and Oscar</p>
        </footer>*/}
        <footer class="page-footer" id="footer">
          <div class="container">
              
              <div class="footer-copyright text-center">&copy; 2020 Copyright | Droits d'auteur: Oscar Marze et Justine Reynaud</div>
          </div>
	      </footer>
     </div>
    );
  }
}

export default App;

