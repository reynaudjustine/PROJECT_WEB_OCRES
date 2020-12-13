import React, { Component } from 'react';
import "../Formulaire.css";
import axios from 'axios';

let modeleR="";
let prixR=0;
let genreR="";
let categorieR="";
let marqueR="";
let pdvR="";
let mdvR="";

class FormWidget extends Component {
    constructor(props) {
        super(props);}


componentDidUpdate(){
    axios.get(`http://localhost:3000/shoes/${this.props.id}`)
    .then(res=>
        {
            modeleR = res.data.modele;
            prixR=res.data.prix;
            genreR=res.data.genre;
            categorieR=res.data.categorie;
            marqueR=res.data.marque;
            pdvR=res.data.pdv;
            mdvR=res.data.mdv;

        })
    }


render() {

    return (

        <div id="w22">
                    <h3>Affichage de la vente recherchée</h3>
                    <form id="test_form">
                        <table className="table">
                            <ul id="ul11">
                                <td><strong>Modèle : </strong></td>
                                <td>{modeleR}</td>
                            </ul>
                            <ul id="ul22">
                                <td><strong>Prix : </strong></td>
                                <td>{prixR}</td>
                            </ul>
                            <ul id="ul33">
                                <td><strong>Genre : </strong></td>
                                <td>{genreR}</td>
                            </ul>
                            <ul id="ul44">
                                <td><strong>Catégorie : </strong></td>
                                <td>{categorieR}</td>
                            </ul>
                            <ul id="ul55">
                                <td><strong>Marque : </strong></td>
                                <td>{marqueR}</td>
                            </ul>
                            <ul id="ul66">
                                <td><strong>Pays de vente : </strong></td>
                                <td>{pdvR}</td>
                            </ul>
                            <ul id="ul77">
                                <td><strong>Date : </strong></td>
                                <td>{mdvR}</td>
                            </ul>
                        </table>
                    </form>
                </div>
    );
}
}

export default FormWidget;

