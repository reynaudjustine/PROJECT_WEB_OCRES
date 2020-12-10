import React, { PureComponent } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import axios from 'axios';


axios.get('http://localhost:3000/shoes')
.then(res => {
  console.log("reponse"+res.data);
  let M1 = res.data[0].modele;
  let M2 = res.data[1].modele;
  let M3 = res.data[2].modele;
  console.log(" Valeur1 " +M1);
  console.log(" Valeur2 " +M2);
  console.log(" Valeur3 " +M3);
});



axios.get('http://localhost:3000/shoes/marque/Nike')
.then(res => {
  console.log(res.data.length);
})



//Sneakers 
let SnNike=0;
let SnAd=0;
let SnVans=0;
let SnPumas=0;
let SnConv=0;



var categorie = "Sneakers";


const getIntroOfPage = (label) => {
  console.log("testencore");
  // if (label === 'Nike') {
  //   return "";
  // } if (label === 'Adidas') {
  //   return "";
  // } if (label === 'Vans') {
  //   return "";
  // } if (label === 'Puma') {
  //   return '';
  // } if (label === 'Converse') {
  //   return '';
  // }  
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label} : ${payload[0].value}`}</p>
        <p className="intro">{getIntroOfPage(label)}</p>
        
      </div>
    );
  }

  return null;
};


export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/vxq4ep63/';
  
   constructor(props) {
     super(props);

   this.state = {
       datatest :[],
       SnNike: 0,
       SnAd: 0,
       SnVans: 0,
       SnPumas: 0,
       SnConv: 0,
   };

 
 }

 componentDidMount()
 {
   axios.get('http://localhost:3000/shoes/categorie/Sneakers/Nike')
   .then(res => {
     SnNike=res.data.length;
     this.setState({SnNike})
   })


   axios.get('http://localhost:3000/shoes/categorie/Sneakers/Adidas')
   .then(res => {
     SnAd=res.data.length;
     this.setState({SnAd})
   })

   axios.get('http://localhost:3000/shoes/categorie/Sneakers/Vans')
   .then(res => {
     SnVans=res.data.length;
     this.setState({SnVans})
   })

   axios.get('http://localhost:3000/shoes/categorie/Sneakers/Converse')
   .then(res => {
     SnConv=res.data.length;
     this.setState({SnConv})
   })
 }
 



  render() {
    const dataSneakers = [
      {
        Marque: 'Nike', NB_Ventes: SnNike,
      },
      {
        Marque: 'Adidas', NB_Ventes: SnAd, 
      },
      {
        Marque: 'Vans', NB_Ventes: SnVans,
      },
      {
        Marque: 'Puma', NB_Ventes: SnPumas,
      },
      {
        Marque: 'Conver.', NB_Ventes: SnConv,
      },
    ];


    const dataSport = [
      {
        Marque: 'Nike', NB_Ventes: 4000,
      },
      {
        Marque: 'Adidas', NB_Ventes: 3000, 
      },
      {
        Marque: 'Asics', NB_Ventes: 2000,
      },
      {
        Marque: 'Puma', NB_Ventes: 2780,
      },
      {
        Marque: 'Salom.', NB_Ventes: 1890,
      },
    ];
    const dataPlage = [
      {
        Marque: 'Nike', NB_Ventes: 4000,
      },
      {
        Marque: 'Fila', NB_Ventes: 3000, 
      },
      {
        Marque: 'Havai.', NB_Ventes: 2000,
      },
      {
        Marque: 'Ipa.', NB_Ventes: 2780,
      },
      {
        Marque: 'Kappa', NB_Ventes: 1890,
      },
    ];
    const dataVille = [
      {
        Marque: 'Bexl.', NB_Ventes: 4000,
      },
      {
        Marque: 'Grenson', NB_Ventes: 3000, 
      },
      {
        Marque: 'Celio', NB_Ventes: 2000,
      },
      {
        Marque: 'Azzaro', NB_Ventes: 2780,
      },
      {
        Marque: 'Berluti', NB_Ventes: 1890,
      },
    ];
    const dataBottes = [
      {
        Marque: 'Doc Mr.', NB_Ventes: 4000,
      },
      {
        Marque: 'Ugg', NB_Ventes: 3000, 
      },
      {
        Marque: 'Moon.', NB_Ventes: 2000,
      },
      {
        Marque: 'Timb.', NB_Ventes: 2780,
      },
      {
        Marque: 'Minneli', NB_Ventes: 1890,
      },
    ];
    var datatest = [
      {
        Marque: '', NB_Ventes: 0,
      },
      {
        Marque: '', NB_Ventes: 0, 
      },
      {
        Marque: ' ', NB_Ventes: 0,
      },
      {
        Marque: '', NB_Ventes: 0,
      },
      {
        Marque: '', NB_Ventes: 0,
      },
    ];


    if (this.props.id == 0) {
      datatest = dataSneakers;
      categorie = "Sneakers"
    }
    if (this.props.id == 1) {
      datatest = dataSport;
      categorie = "Sport"
    }
    if (this.props.id == 2) {
      datatest = dataPlage;
      categorie = "Plage"
    }
    if (this.props.id == 3) {
      datatest = dataVille;
      categorie = "Ville"
    }
    if (this.props.id == 4) {
      datatest = dataBottes;
      categorie = "Bottines"
    }
    return (
      <div>
        
        {console.log("Barchart test")}
        {/* <h1>{this.state.id}</h1> */}
        <BarChart
          width={380}
          height={300}
         
          data={datatest}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Marque" />
          <YAxis />
          {/* <Tooltip content={<CustomTooltip />} /> */}
          {/* <Legend /> */}
          <Bar name="Nombre de ventes" dataKey="NB_Ventes" barSize={20} fill="#E90570" />
        </BarChart>
        <p>Catégorie : {categorie} </p>
        {/* <p><strong>Nombre de ventes par catégorie/marques</strong></p> */}
      </div>
    );
  }
}