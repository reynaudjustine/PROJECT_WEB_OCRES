import React, { Component } from 'react';
//import "./App.css";
import "./Dashboard.css"
import PieChart from './Widgets/PieChart'
import 'bootstrap/dist/css/bootstrap.min.css';
import BarChart from './Widgets/BarChart';
import AreaChart from './Widgets/AreaChart'
import TestWidget from './Widgets/TestWidget'
import RadarChart from './Widgets/RadarChart'
import Chiffres from './Widgets/Chiffres'
import Carousel from 'react-bootstrap/Carousel'

const dataSneakers = [
    {
      Marque: 'Nike', NB_Ventes: 4000,
    },
    {
      Marque: 'Adidas', NB_Ventes: 3000, 
    },
    {
      Marque: 'Vans', NB_Ventes: 2000,
    },
    {
      Marque: 'Puma', NB_Ventes: 2780,
    },
    {
      Marque: 'Converse', NB_Ventes: 1890,
    },
  ];


class Dashboard extends Component {

    render() {
        return (
            <div className="Container" id="container" >
             
                <div className="row" id="Gcontainer1">
                    <div class=" col-sm-6 col-lg-4  " id="petit_container1"> 
                        <div id="w1"><TestWidget/></div>
                    </div>
                    <div class=" col-sm-6 col-lg-4 " id="petit_container2">
                        {/* <BarChart/> */}
                        <div id="w2">
                        <Carousel indicators={false} >
                            <Carousel.Item>
                                <BarChart id="0"/>
                                
                            </Carousel.Item>

                            <Carousel.Item>
                                <BarChart id="1"/>
                               
                            </Carousel.Item>

                            <Carousel.Item>
                                <BarChart id="2"/>
                                
                            </Carousel.Item>

                            <Carousel.Item>
                                <BarChart id="3"/>
                                
                            </Carousel.Item>

                            <Carousel.Item>
                                <BarChart id="4"/>
                                
                            </Carousel.Item>

                            
                        </Carousel>
                        <p><strong>Nombre de ventes par catégorie/marques</strong></p>
                        </div>
                        
        
                    
                    </div>
                    <div class=" col-sm-6 col-lg-4 " id="petit_container3">
                        <div id="w3"><Chiffres chiffre/></div>
                    </div>


                    <div class=" col-sm-6 col-lg-4 " id="petit_container1"> 
                        <div id="w1"><AreaChart/></div>
                    </div>
                    <div class=" col-sm-6 col-lg-4" id="petit_container2">
                        <div id="w2"><RadarChart/></div>
                    </div>
                    <div class=" col-sm-6 col-lg-4" id="petit_container3">
                        <div id="w3"><PieChart/></div>
                    </div>


                </div>

                

            </div>
        )
    }
}



export default Dashboard;


