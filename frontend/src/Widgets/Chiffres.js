import React, { Component } from 'react';
import "./Chiffres.css";

class Chiffres extends Component {
    render() {
        return (
            <div id="container_tab">
                <div id="container_tab2">
                    <table className="table">
                        <ul id="ul1">
                            <td><strong>Recette des ventes (€) :</strong></td>
                            <td>1000</td>
                        </ul>
                        <ul id="ul2">
                            <td><strong>Montant achat en ligne (€) </strong></td>
                            <td>2000</td>
                        </ul>
                        <ul id="ul3">
                            <td><strong>Nombre de vente chaussures femme  </strong></td>
                            <td>3000</td>
                        </ul>
                        <ul id="ul4">
                            <td><strong>Nombre de vente chaussures homme</strong></td>
                            <td>2400</td>
                        </ul>
                    </table>
                    
                </div>
                <p><strong>Gestion Budgétaire</strong></p>
            </div>
          
        );
      }
}

export default Chiffres;