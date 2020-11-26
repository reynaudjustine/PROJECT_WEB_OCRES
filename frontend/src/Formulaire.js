import React, { Component } from 'react';
import "./App.css";
import "./Dashboard.css"


class Formulaire extends Component {

    render() {
        return (
            <div className="Container" id="container" >
                
                <nav class="navbar navbar-expand-lg navbar-light">
                    <div id="nav">
                        <div id="title"><h1>Dashboard</h1></div>
                        
                        <div id="bande"> 
                            <button class="btn btn-outline-secondary btn-sm" id="boutons">
                                <a href="Dashboard.js">Dashboard</a>
                            </button>

                            <button class="btn btn-outline-secondary btn-sm" id="boutons">
                                <a href="Formulaire.js">Formulaire</a>
                            </button>
                        </div>
                    </div>
                </nav>                

            </div>
        )
    }
}


export default Formulaire;