import React, { PureComponent } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

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
    Marque: 'Salomon', NB_Ventes: 1890,
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
    Marque: 'Bexley', NB_Ventes: 4000,
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

var categorie = "Sneakers";


const getIntroOfPage = (label) => {
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
       datatest :null
   };
 }
//   switchdata(id) {
//     switch (id) {
//       case (id ==0):
//         //this.setState({datatest:dataSneakers})
//         return dataSneakers
//         break;
//         case (id==1):
//           this.setState({datatest:dataSport})
//         break;
//         case (id==2):
//           this.setState({datatest:dataPlage})
//         break;
//         case (id==3):
//           this.setState({datatest:dataVille})
//         break;
//         case (id==4):
//           this.setState({datatest:dataBottes})
//         break;
    
//       default:
//         break;
        
//     }
    
//     // choix = 0;
//     // this.setState({choix:0});
//  }
 
//   switchdata1() {
//     data = 0;
//     this.setState({data:dataSneakers});
//  }
//  switchdata2() {
//   data = 1;
//   this.setState({data:dataSport});
// }
// switchdata3() {
//   data = 2;
//   this.setState({data:dataPlage});
// }
// switchdata4() {
//   data = 3;
//   this.setState({data:dataVille});
// }
// switchdata5() {
//   data = 4;
//   this.setState({data:dataBottes});
// }
 

  render() {
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
    // switch (this.props.id) {
    //   case (this.props.id ==0):
    //     {datatest = dataSneakers}
    //     break;
    //     case (this.props.id==1):
    //       this.setState({datatest:dataSport})
    //     break;
    //     case (this.props.id==2):
    //       this.setState({datatest:dataPlage})
    //     break;
    //     case (this.props.id==3):
    //       this.setState({datatest:dataVille})
    //     break;
    //     case (this.props.id==4):
    //       this.setState({datatest:dataBottes})
    //     break;
    
    //   default:
    //     break;
    // }
  
    return (
      <div>
        
        {/* <h1>{this.props.id}</h1> */}
        {/* <h1>{this.state.id}</h1> */}
        <BarChart
          width={400}
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