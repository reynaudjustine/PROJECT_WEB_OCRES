import React, { Component } from 'react';
import fleche from './fleche.png';

import "./Formulaire.css"
import 'bootstrap/dist/css/bootstrap.min.css';


class Formulaire extends Component {

    render() {
        return (
        <div className="container_center2" id="section">
            <h1>Nouvelle Vente</h1>
            <label><strong>Saisir les détails de la nouvelle vente</strong></label>
            <br></br>
            <div id="Fleche">
                <img src={fleche} height="100" id="arrow"/>
            </div>
 
            <form id="test_form">
                <table id="table_test">
                    <tr>
                        <td>Modèle :</td>
                        <td><input type="text" name="nom"></input></td>
                    </tr>
                    <tr>
                        <td>Prix :</td>
                        <td><input type="text" name="email"></input></td>
                    </tr>
                    <tr>
                        <td>Genre :</td>
                        <td id="radio_left">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked></input>
                            <label class="form-check-label" for="exampleRadios1">
                                Homme
                            </label>
                            </div>
                            <div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"></input>
                            <label class="form-check-label" for="exampleRadios2">
                                Femme
                            </label>
                            </div>
                            <div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3"></input>
                            <label class="form-check-label" for="exampleRadios3">
                                Mixte
                            </label>
                            </div>
                        </td>
                    </tr>
                    <tr>         
                        <td>Catégorie :</td>
                        <td>
                            <div class="form-group">
                                <select class="form-control" id="exampleFormControlSelect1">
                                    <option>Sneakers</option>
                                    <option>Sport</option>
                                    <option>Ville</option>
                                    <option>Bottines</option>
                                    <option>Plage</option>
                                </select>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Marque :</td>
                        <td><textarea id="message" name="marque"></textarea></td>
                    </tr>
                    <tr>
                        <td>Pays de vente :</td>
                        <td>
                            <div class="form-group">
                                <select class="form-control" id="exampleFormControlSelect2">
                                    <option>France</option>
                                    <option>Italie</option>
                                    <option>Allemagne</option>
                                </select>
                            </div>
                        </td>
                    </tr>
                <br></br>
                    <tr>
                        <td colspan="2" id="btn"><input type="submit" name="Valider"></input></td>
                    </tr>
                </table>
            </form>
                        
        </div>
        

        )
    }
}

export default Formulaire;