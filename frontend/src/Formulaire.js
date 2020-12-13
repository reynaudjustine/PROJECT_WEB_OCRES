import React, { Component } from 'react';
import fleche from './fleche.png';

import "./Formulaire.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import FormWidget from './Widgets/FormWidget'

import axios from 'axios';

let modeleR="";
let prixR=0;
let genreR="";
let categorieR="";
let marqueR="";
let pdvR="";
let mdvR="";



class Formulaire extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modele: '',
            prix: '',
            genre:'',
            categorie:'',
            marque:'',
            pdv:'',
            mdv:'',
            id:"",
            
        };
    
        //this.handleChange = this.handleChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubmitSuppr = this.handleSubmitSuppr.bind(this);
        this.handleSubmitSearch = this.handleSubmitSearch.bind(this);
        this.handleSubmitUpdate = this.handleSubmitUpdate.bind(this);
      }
    //   handleChange(event) {
    //     this.setState({value: event.target.value});
    //   }
    
    handleInputChange(event) {
        const target = event.target;
        //const value = target.type === 'checkbox' ? target.checked : target.value;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }
    
      handleSubmit(event) {
        alert('Le Form a été soumis voici les données: modele= ' + this.state.modele
        +'prix ='+ this.state.prix
        +'genre ='+ this.state.genre
        +'categorie ='+ this.state.categorie
        +'marque ='+ this.state.marque
        +'pdv ='+ this.state.pdv
        +'mdv ='+ this.state.mdv);
        axios.post(`http://localhost:3000/shoes/${this.state.modele}/${this.state.prix}/${this.state.genre}/${this.state.categorie}/${this.state.marque}/${this.state.pdv}/${this.state.mdv}`)
        .then(res =>{})
        event.preventDefault();
      }
      handleSubmitSuppr(event) {
        alert('ID='+this.state.id);
        axios.delete(`http://localhost:3000/shoes/${this.state.id}`)
        .then(res=>{})
        event.preventDefault();
      }

      handleSubmitSearch(event){
        
       
            // alert('ID='+this.state.id+"INFOS:"+modeleR+prixR+genreR+categorieR+marqueR+pdvR+mdvR);
            this.setState({id:""});
            event.preventDefault();

      }

      handleSubmitUpdate(event){
          alert(this.state.id+this.state.prix);
          axios.put(`http://localhost:3000/shoes/${this.state.id}/${this.state.prix}`)
          .then(res=>{})
          event.preventDefault();

    }

    render() {
        return (
        <div className="container_center2" id="section">
            <br></br>
            <h1>Page Administrateur</h1>
            <br></br>
            <h3>Saisir les détails de la nouvelle vente</h3>
            <div id="Fleche">
                <img src={fleche} height="100" id="arrow"/>
            </div>
            
            <div id="cadrant">
                <form id="test_form" onSubmit={this.handleSubmit}>
                    <table id="table_test">
                        <tr id="tr1">
                            <td>Modèle :</td>
                            <td><input type="text" name="modele"  onChange={this.handleInputChange} required></input></td>
                        </tr>
                        <tr  id="tr2">
                            <td>Prix :</td>
                            <td><input type="number" name="prix"  onChange={this.handleInputChange} required></input></td>
                        </tr>
                        <tr  id="tr3">
                            <td>Genre :</td>
                            <td id="radio_left">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="genre" id="exampleRadios1" value="homme" onChange={this.handleInputChange} required></input>
                                <label class="form-check-label" for="exampleRadios1">
                                    Homme
                                </label>
                                </div>
                                <div class="form-check">
                                <input class="form-check-input" type="radio" name="genre" id="exampleRadios2" value="femme"onChange={this.handleInputChange} required></input>
                                <label class="form-check-label" for="exampleRadios2">
                                    Femme
                                </label>
                                </div>
                                <div class="form-check">
                                <input class="form-check-input" type="radio" name="genre" id="exampleRadios3" value="mixte"onChange={this.handleInputChange} required></input>
                                <label class="form-check-label" for="exampleRadios3">
                                    Mixte
                                </label>
                                </div>
                            </td>
                        </tr>
                        <tr id="tr4">         
                            <td>Catégorie :</td>
                            <td>
                                <div class="form-group">
                                    <select class="form-control" id="exampleFormControlSelect1" name="categorie" onChange={this.handleInputChange} required>
                                        <option>Sneakers</option>
                                        <option>Sport</option>
                                        <option>Ville</option>
                                        <option>Bottines</option>
                                        <option>Plage</option>
                                    </select>
                                </div>
                            </td>
                        </tr>
                        <tr id="tr5">
                            <td>Marque :</td>
                            <td><input type="text" id="message" name="marque" onChange={this.handleInputChange} required></input></td>
                        </tr>
                        <tr id="tr6">
                            <td>Pays de vente :</td>
                            <td>
                                <div class="form-group">
                                    <select class="form-control" id="exampleFormControlSelect2" name="pdv" onChange={this.handleInputChange} required>
                                        <option>France</option>
                                        <option>Italie</option>
                                        <option>Allemagne</option>
                                    </select>
                                </div>
                            </td>
                        </tr>
                        <tr id="tr7">
                            <td>Date :</td>
                            <td>
                            <div class="form-group">
                                <select class="form-control" id="exampleFormControlSelect3" name="mdv" onChange={this.handleInputChange}required>
                                    <option>Janvier</option>
                                    <option>Fevrier</option>
                                    <option>Mars</option>
                                    <option>Avril</option>
                                    <option>Mai</option>
                                    <option>Juin</option>
                                    <option>Juillet</option>
                                    <option>Aout</option>
                                    <option>Septembre</option>
                                    <option>Octobre</option>
                                    <option>Novembre</option>
                                    <option>Decembre</option>
                                </select>
                                </div>
                            </td>
                        </tr>
                    <br></br>
                        <tr>
                            <td colspan="2" id="btn"><input type="submit" value="Valider"></input></td>
                        </tr>
                    </table>
                </form>
            </div>

            <br></br>
            <br></br>
            <br></br>

            <div className="row" id="containerRow">

            <div class="col-md-12 col-lg-6 " id="petit_container11">
                <div id="w11">
                    <h3>Rechercher une vente</h3>
                    <form id="test_form" onSubmit={this.handleSubmitSearch} >
                        <table id="table_test">
                        <tr id="tr1">
                            <td>ID :</td>
                            <td><input type="text" name="id" onChange={this.handleInputChange} required  ></input>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" id="btn2"><input type="submit" value="Rechercher" x></input>
                            <input type="reset" defaultValue="Reset" />  </td>
                        </tr>
                        </table>
                    </form>
                </div>
            </div>
                
            <div class="col-md-12 col-lg-6 " id="petit_container22">
                <FormWidget id ={this.state.id}></FormWidget>
            </div>
                
            <div class="col-md-12 col-lg-6 " id="petit_container11">
                <div id="w11">
                    <h3>Actualiser une vente : </h3>
                    <h3>Saisir l'ID puis le prix à modifier</h3>
                        <form id="test_form" onSubmit={this.handleSubmitUpdate}>
                            <table id="table_test">
                            <tr id="tr1">
                                <td>ID :</td>
                                <td><input type="text" name="id" onChange={this.handleInputChange} required  ></input></td>
                            </tr>
                            <tr id="tr2">
                                <td>Prix :</td>
                                <td><input type="text" name="prix" onChange={this.handleInputChange} required></input></td>
                            </tr>
                            <tr>
                                <td colspan="2" id="btn2"><input type="submit" value="Actualiser" x></input></td>
                            </tr>
                            </table>
                        </form>
                </div>
            </div>
            
            <div class="col-md-12 col-lg-6 " id="petit_container2">
                <div id="w22">
                    <h3>Supprimer une vente</h3>
                    <form id="test_form" onSubmit={this.handleSubmitSuppr} >
                        <table id="table_test">
                        <tr id="tr1">
                            <td>ID :</td>
                            <td><input type="text" name="id"  onChange={this.handleInputChange} required></input></td>
                        </tr>
                        <tr>
                            <td colspan="2" id="btn2"><input type="submit" value="Supprimer" x></input></td>
                        </tr>
                        </table>
                    </form>
                </div>
            </div> 
            
        </div>
    </div>

        )
    }
}

export default Formulaire;