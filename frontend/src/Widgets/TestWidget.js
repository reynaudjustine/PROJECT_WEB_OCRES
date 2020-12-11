import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import axios from 'axios';

//init prix total par mois
let PrixTotJanv=0;
let PrixTotFev=0;
let PrixTotMars=0;
let PrixTotAv=0;
let PrixTotMai=0;
let PrixTotJuin=0;
let PrixTotJuill=0;
let PrixTotAout=0;
let PrixTotSept=0;
let PrixTotOct=0;
let PrixTotNov=0;
let PrixTotDec=0;

//taille mois
let TailleMois;


export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';


  componentDidMount()
 {
   //Janvier
    axios.get('http://localhost:3000/shoes/mois/Janvier')
    .then(res => {
      TailleMois=res.data.length;
      for(let i=0;i<TailleMois;i++)
      {
        PrixTotJanv=PrixTotJanv+res.data[i].prix;
      }
      this.setState({PrixTotJanv})
      })

    //Fevrier
    axios.get('http://localhost:3000/shoes/mois/Fevrier')
    .then(res => {
      TailleMois=res.data.length;
      for(let i=0;i<TailleMois;i++)
      {
        PrixTotFev=PrixTotFev+res.data[i].prix;
      }
      this.setState({PrixTotFev})
      })

    //Mars
    axios.get('http://localhost:3000/shoes/mois/Mars')
    .then(res => {
      TailleMois=res.data.length;
      for(let i=0;i<TailleMois;i++)
      {
        PrixTotMars=PrixTotMars+res.data[i].prix;
      }
      this.setState({PrixTotMars})
      })
    
    //Avril
    axios.get('http://localhost:3000/shoes/mois/Avril')
    .then(res => {
      TailleMois=res.data.length;
      for(let i=0;i<TailleMois;i++)
      {
        PrixTotAv=PrixTotAv+res.data[i].prix;
      }
      this.setState({PrixTotAv})
      })
    
    //Mai
    axios.get('http://localhost:3000/shoes/mois/Mai')
    .then(res => {
      TailleMois=res.data.length;
      for(let i=0;i<TailleMois;i++)
      {
        PrixTotMai=PrixTotMai+res.data[i].prix;
      }
      this.setState({PrixTotMai})
      })

    //Juin
    axios.get('http://localhost:3000/shoes/mois/Juin')
    .then(res => {
      TailleMois=res.data.length;
      for(let i=0;i<TailleMois;i++)
      {
        PrixTotJuin=PrixTotJuin+res.data[i].prix;
      }
      this.setState({PrixTotJuin})
    })

    //Juillet
    axios.get('http://localhost:3000/shoes/mois/Juillet')
    .then(res => {
      TailleMois=res.data.length;
      for(let i=0;i<TailleMois;i++)
      {
        PrixTotJuill=PrixTotJuill+res.data[i].prix;
      }
      this.setState({PrixTotJuill})
      })
    
    //Aout
    axios.get('http://localhost:3000/shoes/mois/Aout')
    .then(res => {
      TailleMois=res.data.length;
      for(let i=0;i<TailleMois;i++)
      {
        PrixTotAout=PrixTotAout+res.data[i].prix;
      }
      this.setState({PrixTotAout})
      })
    
    //Septembre
    axios.get('http://localhost:3000/shoes/mois/Septembre')
    .then(res => {
      TailleMois=res.data.length;
      for(let i=0;i<TailleMois;i++)
      {
        PrixTotSept=PrixTotSept+res.data[i].prix;
      }
      this.setState({PrixTotSept})
      })
    
    //Octobre
    axios.get('http://localhost:3000/shoes/mois/Octobre')
    .then(res => {
      TailleMois=res.data.length;
      for(let i=0;i<TailleMois;i++)
      {
        PrixTotOct=PrixTotOct+res.data[i].prix;
      }
      this.setState({PrixTotOct})
      })

    //Novembre
    axios.get('http://localhost:3000/shoes/mois/Novembre')
    .then(res => {
      TailleMois=res.data.length;
      for(let i=0;i<TailleMois;i++)
      {
        PrixTotNov=PrixTotNov+res.data[i].prix;
      }
      this.setState({PrixTotNov})
      })

    //Decembre
    axios.get('http://localhost:3000/shoes/mois/Decembre')
    .then(res => {
      TailleMois=res.data.length;
      for(let i=0;i<TailleMois;i++)
      {
        PrixTotDec=PrixTotDec+res.data[i].prix;
      }
      this.setState({PrixTotDec})
      })
  }

  render() {
    const data = [
      {
        name: 'J', benefice: PrixTotJanv,
      },
      {
        name: 'F', benefice: PrixTotFev,
      },
      {
        name: 'M', benefice: PrixTotMars,
      },
      {
        name: 'A', benefice: PrixTotAv,
      },
      {
        name: 'M', benefice: PrixTotMai,
      },
      {
        name: 'J', benefice: PrixTotJuin,
      },
      {
        name: 'J', benefice: PrixTotJuill, 
      },
      {
        name: 'A', benefice: PrixTotAout, 
      },
      {
        name: 'S', benefice: PrixTotSept,
      },
      {
        name: 'O', benefice: PrixTotOct,
      },
      {
        name: 'N', benefice: PrixTotNov,
      },
      {
        name: 'D', benefice: PrixTotDec,
      },
    ];
    return (
      <div>
        <LineChart
          title = "Graphe"
          width={400}
          height={300}
          data={data}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line name="Bénéfice"type="monotone" dataKey="benefice" stroke="#E90570" activeDot={{ r: 8 }} />
          
        </LineChart>
        <p><strong>Évolution des ventes</strong></p>
      </div>
    );
  }
}
