import React, { PureComponent } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import axios from 'axios';


/*axios.get('http://localhost:3000/shoes')
.then(res => {
  console.log("reponse"+res.data);
  let M1 = res.data[0].modele;
  let M2 = res.data[1].modele;
  let M3 = res.data[2].modele;
  console.log(" Valeur1 " +M1);
  console.log(" Valeur2 " +M2);
  console.log(" Valeur3 " +M3);
});*/



/*axios.get('http://localhost:3000/shoes/marque/Nike')
.then(res => {
  console.log(res.data.length);
})*/



//Sneakers 
let SnNike=0;
let SnAd=0;
let SnVans=0;
let SnPuma=0;
let SnConv=0;

//Sport 
let SpNike=0;
let SpAd=0;
let SpAsics=0;
let SpPuma=0;
let SpSal=0;

//Plage
let PNike=0;
let PFila=0;
let PHav=0;
let PIpa=0;
let PKappa=0;

//Ville
let VBex=0;
let VGren=0;
let VCel=0;
let VChloe=0;
let VBerl=0;

//Bottines
let BDoc=0;
let BUgg=0;
let BMoon=0;
let BTimb=0;
let BMin=0;


var categorie = "Sneakers";


const getIntroOfPage = (label) => {
  //console.log("testencore");
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
       /*SnNike: 0,
       SnAd: 0,
       SnVans: 0,
       SnPuma: 0,
       SnConv: 0,*/
   };

 
 }

 componentDidMount()
 {

  //Sneakers
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

   axios.get('http://localhost:3000/shoes/categorie/Sneakers/Puma')
   .then(res => {
     SnPuma=res.data.length;
     this.setState({SnPuma})
   })

   axios.get('http://localhost:3000/shoes/categorie/Sneakers/Converse')
   .then(res => {
     SnConv=res.data.length;
     this.setState({SnConv})
   })

    //************************************************** 
    //Sport 

    axios.get('http://localhost:3000/shoes/categorie/Sport/Nike')
    .then(res => {
      SpNike=res.data.length;
      this.setState({SpNike})
    })

    axios.get('http://localhost:3000/shoes/categorie/Sport/Adidas')
    .then(res => {
      SpAd=res.data.length;
      this.setState({SpAd})
    })

    axios.get('http://localhost:3000/shoes/categorie/Sport/Asics')
    .then(res => {
      SpAsics=res.data.length;
      this.setState({SpAsics})
    })

    axios.get('http://localhost:3000/shoes/categorie/Sport/Puma')
    .then(res => {
      SpPuma=res.data.length;
      this.setState({SpPuma})
    })

    axios.get('http://localhost:3000/shoes/categorie/Sport/Salomon')
    .then(res => {
      SpSal=res.data.length;
      this.setState({SpSal})
    })

    //************************************************** 
    //Plage

    axios.get('http://localhost:3000/shoes/categorie/Plage/Nike')
    .then(res => {
      PNike=res.data.length;
      this.setState({PNike})
    })

    axios.get('http://localhost:3000/shoes/categorie/Plage/Fila')
    .then(res => {
      PFila=res.data.length;
      this.setState({PFila})
    })

    axios.get('http://localhost:3000/shoes/categorie/Plage/Havaianas')
    .then(res => {
      PHav=res.data.length;
      this.setState({PHav})
    })

    axios.get('http://localhost:3000/shoes/categorie/Plage/Ipanema')
    .then(res => {
      PIpa=res.data.length;
      this.setState({PIpa})
    })

    axios.get('http://localhost:3000/shoes/categorie/Plage/Kappa')
    .then(res => {
      PKappa=res.data.length;
      this.setState({PKappa})
    })

    //**************************************************
    //Ville

    axios.get('http://localhost:3000/shoes/categorie/Ville/Bexley')
    .then(res => {
      VBex=res.data.length;
      this.setState({VBex})
    })

    axios.get('http://localhost:3000/shoes/categorie/Ville/Grenson')
    .then(res => {
      VGren=res.data.length;
      this.setState({VGren})
    })

    axios.get('http://localhost:3000/shoes/categorie/Ville/Celio')
    .then(res => {
      VCel=res.data.length;
      this.setState({VCel})
    })

    axios.get('http://localhost:3000/shoes/categorie/Ville/Chloe')
    .then(res => {
      VChloe=res.data.length;
      this.setState({VChloe})
    })

    axios.get('http://localhost:3000/shoes/categorie/Ville/Berluti')
    .then(res => {
      VBerl=res.data.length;
      this.setState({VBerl})
    })

    //**************************************************
    //Bottines

    axios.get('http://localhost:3000/shoes/categorie/Bottines/DrMartens')
    .then(res => {
      BDoc=res.data.length;
      this.setState({BDoc})
    })

    axios.get('http://localhost:3000/shoes/categorie/Bottines/Ugg')
    .then(res => {
      BUgg=res.data.length;
      this.setState({BUgg})
    })

    axios.get('http://localhost:3000/shoes/categorie/Bottines/MoonBoot')
    .then(res => {
      BMoon=res.data.length;
      this.setState({BMoon})
    })

    axios.get('http://localhost:3000/shoes/categorie/Bottines/Timberland')
    .then(res => {
      BTimb=res.data.length;
      this.setState({BTimb})
    })

    axios.get('http://localhost:3000/shoes/categorie/Bottines/Minnelli')
    .then(res => {
      BMin=res.data.length;
      this.setState({BMin})
    })

    //**************************************************

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
        Marque: 'Puma', NB_Ventes: SnPuma,
      },
      {
        Marque: 'Conver.', NB_Ventes: SnConv,
      },
    ];


    const dataSport = [
      {
        Marque: 'Nike', NB_Ventes: SpNike,
      },
      {
        Marque: 'Adidas', NB_Ventes: SpAd, 
      },
      {
        Marque: 'Asics', NB_Ventes: SpAsics,
      },
      {
        Marque: 'Puma', NB_Ventes: SpPuma,
      },
      {
        Marque: 'Salom.', NB_Ventes: SpSal,
      },
    ];
    const dataPlage = [
      {
        Marque: 'Nike', NB_Ventes: PNike,
      },
      {
        Marque: 'Fila', NB_Ventes: PFila, 
      },
      {
        Marque: 'Havai.', NB_Ventes: PHav,
      },
      {
        Marque: 'Ipa.', NB_Ventes: PIpa,
      },
      {
        Marque: 'Kappa', NB_Ventes: PKappa,
      },
    ];
    const dataVille = [
      {
        Marque: 'Bexl.', NB_Ventes: VBex,
      },
      {
        Marque: 'Grenson', NB_Ventes: VGren, 
      },
      {
        Marque: 'Celio', NB_Ventes: VCel,
      },
      {
        Marque: 'Chloe', NB_Ventes: VChloe,
      },
      {
        Marque: 'Berluti', NB_Ventes: VBerl,
      },
    ];
    const dataBottes = [
      {
        Marque: 'Doc Mr.', NB_Ventes: BDoc,
      },
      {
        Marque: 'Ugg', NB_Ventes: BUgg, 
      },
      {
        Marque: 'Moon.', NB_Ventes: BMoon,
      },
      {
        Marque: 'Timb.', NB_Ventes: BTimb,
      },
      {
        Marque: 'Minneli', NB_Ventes: BMin,
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
        {/* <h1>{this.state.id}</h1> */}
        <BarChart
          width={360}//380
          height={300}//300
         
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