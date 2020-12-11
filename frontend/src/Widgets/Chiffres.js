import React, { Component } from 'react';
import "./Chiffres.css";
import axios from 'axios';

let Recette=0;
let Taille=0;
let TailleF=0;
let TailleH=0;
let TailleM=0;

class Chiffres extends Component {
    componentDidMount()
    {
        //Requetes
        axios.get('http://localhost:3000/shoes')
        .then(res => {
            Taille=res.data.length;
            for(let i=0;i<Taille;i++)
            {
                Recette=Recette+res.data[i].prix;
            }
            this.setState({Recette})
        })


        axios.get('http://localhost:3000/shoes')
        .then(res => {
            Taille=res.data.length;
            this.setState({Taille})
        })

        axios.get('http://localhost:3000/shoes/genre/femme')
        .then(res => {
            TailleF=res.data.length;
            this.setState({TailleF})
        })

        axios.get('http://localhost:3000/shoes/genre/homme')
        .then(res => {
            TailleH=res.data.length;
            this.setState({TailleH})
        })

        axios.get('http://localhost:3000/shoes/genre/mixte')
        .then(res => {
            TailleM=res.data.length;
            this.setState({TailleM})
        })
    }
    render() {

        return (
            <div id="container_tab">
                <div id="container_tab2">
                    <table className="table">
                        <ul id="ul1">
                            <td><strong>Recette des ventes :</strong></td>
                            <td>{Recette} €</td>
                        </ul>
                        <ul id="ul2">
                            <td><strong>Nombre Total de Ventes : </strong></td>
                            <td>{Taille}</td>
                        </ul>
                        <ul id="ul3">
                            <td><strong>Nombre de vente chaussures femme : </strong></td>
                            <td>{TailleF}</td>
                        </ul>
                        <ul id="ul4">
                            <td><strong>Nombre de vente chaussures homme : </strong></td>
                            <td>{TailleH}</td>
                        </ul>
                        <ul id="ul5">
                            <td><strong>Nombre de vente chaussures mixte : </strong></td>
                            <td>{TailleM}</td>
                        </ul>
                    </table>
                    
                </div>
                <p><strong>Gestion Budgétaire</strong></p>
            </div>
          
        );
      }
}

export default Chiffres;