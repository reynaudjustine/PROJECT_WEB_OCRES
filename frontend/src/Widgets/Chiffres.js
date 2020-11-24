import React, { Component } from 'react';
import "./Chiffres.css";

class Chiffres extends Component {
    render() {
        return (
            <div>
                <table className="table">
                    <ul id="ul1"><strong>Recette des ventes</strong></ul>
                    <ul id="ul2"><strong>Montant achat en ligne</strong></ul>
                    <ul id="ul3"><strong>Nombre de vente chaussures femme</strong></ul>
                    <ul id="ul4"><strong>Nombre de vente chaussures homme</strong></ul>
                </table>
            </div>
          
        );
      }
}

export default Chiffres;