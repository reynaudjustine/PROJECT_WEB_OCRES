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


class Dashboard extends Component {

    render() {
        return (
            <div className="Container" id="container" >
             
                <div className="row">
                    <div class=" col-sm-6 col-lg-4  " id="petit_container1"> 
                        <TestWidget/>
                    </div>
                    <div class=" col-sm-6 col-lg-4 " id="petit_container2">
                        <BarChart/>
                    </div>
                    <div class=" col-sm-6 col-lg-4 " id="petit_container3">
                        <Chiffres chiffre/> 
                    </div>


                    <div class=" col-sm-6 col-lg-4 " id="petit_container1"> 
                        <AreaChart/>
                    </div>
                    <div class=" col-sm-6 col-lg-4" id="petit_container2">
                        <RadarChart/>
                    </div>
                    <div class=" col-sm-6 col-lg-4" id="petit_container3">
                        <PieChart/>
                    </div>


                </div>

                

            </div>
        )
    }
}



export default Dashboard;


