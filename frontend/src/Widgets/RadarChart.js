import React, { PureComponent } from 'react';
import {
  Radar, RadarChart, PolarGrid, Legend,
  PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';
import axios from 'axios';

//total vente par categorie de notre entreprise et de celle d Asos
let totVentesSnJO=0;
let totVentesSn=0;

let totVentesSpJO=0;
let totVentesSp=0;

let totVentesPJO=0;
let totVentesP=0;

let totVentesVJO=0;
let totVentesV=0;

let totVentesBJO=0;
let totVentesB=0;

let totVentesJO=0;
let totVentes=0;

let totVentesAsos=200;
let totVentesSnAsos=80;
let totVentesSpAsos=20;
let totVentesPAsos=5;
let totVentesVAsos=50;
let totVentesBAsos=45;

//pourcentage
let pourcSn=0;
let pourcSp=0;
let pourcP=0;
let pourcV=0;
let pourcB=0;

//pourcentage Asos
let pourcSnAsos=0;
let pourcSpAsos=0;
let pourcPAsos=0;
let pourcVAsos=0;
let pourcBAsos=0;

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/dpgb3xjq/';

  componentDidMount()
 {
    axios.get('http://localhost:3000/shoes/categorie/Sneakers')
    .then(res => {
      totVentesSnJO=res.data.length;
      this.setState({totVentesSnJO})
      
    })
    

    axios.get('http://localhost:3000/shoes/categorie/Sport')
    .then(res => {
      totVentesSpJO=res.data.length;


      this.setState({totVentesSpJO})
    })
    

    axios.get('http://localhost:3000/shoes/categorie/Plage')
    .then(res => {
      totVentesPJO=res.data.length;
      this.setState({totVentesPJO})
    })
    
    
    axios.get('http://localhost:3000/shoes/categorie/Ville')
    .then(res => {
      totVentesVJO=res.data.length;
      this.setState({totVentesVJO})
    })
    
    
    axios.get('http://localhost:3000/shoes/categorie/Bottines')
    .then(res => {
      totVentesBJO=res.data.length;
      this.setState({totVentesBJO})
    })
    
  }



  render() 
  {
    //Sneakers
    totVentesSn=totVentesSnJO+totVentesSnAsos;
    pourcSn=(totVentesSnJO/totVentesSn)*100;
    pourcSnAsos=(totVentesSnAsos/totVentesSn)*100;

    //Sport
    totVentesSp=totVentesSpJO+totVentesSpAsos;
    pourcSp=(totVentesSpJO/totVentesSp)*100;
    pourcSpAsos=(totVentesSpAsos/totVentesSp)*100;
    

    //Plage
    totVentesP=totVentesPJO+totVentesPAsos;
    pourcP=(totVentesPJO/totVentesP)*100;
    pourcPAsos=(totVentesPAsos/totVentesP)*100;

    //Ville
    totVentesV=totVentesVJO+totVentesVAsos;
    pourcV=(totVentesVJO/totVentesV)*100;
    pourcVAsos=(totVentesVAsos/totVentesV)*100;

    //Bottines
    totVentesB=totVentesBJO+totVentesBAsos;
    pourcB=(totVentesBJO/totVentesB)*100;
    pourcBAsos=(totVentesBAsos/totVentesB)*100;
    
    const data = [
      {
        subject: 'Sneakers', Juscar: pourcSn, Asos: pourcSnAsos, fullMark: 100,
      },
      {
        subject: 'Sport', Juscar: pourcSp, Asos: pourcSpAsos, fullMark: 100,
      },
      {
        subject: 'Ville', Juscar: pourcV, Asos: pourcVAsos, fullMark: 100,
      },
      {
        subject: 'Bottines', Juscar: pourcB, Asos: pourcBAsos, fullMark: 100,
      },
      {
        subject: 'Plage', Juscar: pourcP, Asos: pourcPAsos, fullMark: 100,
      },
    ];

    return (
      <div>
        <RadarChart cx={200} cy={170} outerRadius={150} width={400} height={350} data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 100]} />
          <Radar name="Juscar" dataKey="Juscar" stroke="#E90570" fill="#E90570" fillOpacity={0.6} />
          <Radar name="Asos" dataKey="Asos" stroke="#696969" fill="#696969" fillOpacity={0.6} />
          <Legend />
        </RadarChart>
        <p><strong>Part de marché</strong></p>
      </div>
    );
  }
}