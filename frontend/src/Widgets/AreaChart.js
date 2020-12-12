import React, { PureComponent } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import { curveCardinal } from 'd3-shape';
import axios from 'axios';

//Janvier par pays
let totFRJanv=0;
let totITJanv=0;
let totALLJanv=0;

//Fevrier par pays
let totFRFev=0;
let totITFev=0;
let totALLFev=0;

//Mars par pays
let totFRMars=0;
let totITMars=0;
let totALLMars=0;

//Avril par pays
let totFRAv=0;
let totITAv=0;
let totALLAv=0;

//Mai par pays
let totFRMai=0;
let totITMai=0;
let totALLMai=0;

//Juin par pays
let totFRJuin=0;
let totITJuin=0;
let totALLJuin=0;

//Juillet par pays
let totFRJuill=0;
let totITJuill=0;
let totALLJuill=0;

//Aout par pays
let totFRAout=0;
let totITAout=0;
let totALLAout=0;

//Septembre par pays
let totFRSept=0;
let totITSept=0;
let totALLSept=0;

//Octobre par pays
let totFROct=0;
let totITOct=0;
let totALLOct=0;

//Novembre par pays
let totFRNov=0;
let totITNov=0;
let totALLNov=0;

//Decembre par pays
let totFRDec=0;
let totITDec=0;
let totALLDec=0;

const cardinal = curveCardinal.tension(0.2);

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xujpnxxp/';

  componentDidMount()
 {
   //Janvier France Italie et Allemagne
    axios.get('http://localhost:3000/shoes/pays/France/Janvier')
    .then(res => {
      totFRJanv=res.data.length;
      this.setState({totFRJanv})
    })

    axios.get('http://localhost:3000/shoes/pays/Italie/Janvier')
    .then(res => {
      totITJanv=res.data.length;
      this.setState({totITJanv})
    })

    axios.get('http://localhost:3000/shoes/pays/Allemagne/Janvier')
    .then(res => {
      totALLJanv=res.data.length;
      this.setState({totALLJanv})
    })

    //Fevrier France Italie et Allemagne
    axios.get('http://localhost:3000/shoes/pays/France/Fevrier')
    .then(res => {
      totFRFev=res.data.length;
      this.setState({totFRFev})
    })

    axios.get('http://localhost:3000/shoes/pays/Italie/Fevrier')
    .then(res => {
      totITFev=res.data.length;
      this.setState({totITFev})
    })

    axios.get('http://localhost:3000/shoes/pays/Allemagne/Fevrier')
    .then(res => {
      totALLFev=res.data.length;
      this.setState({totALLFev})
    })

    //Mars France Italie et Allemagne
    axios.get('http://localhost:3000/shoes/pays/France/Mars')
    .then(res => {
      totFRMars=res.data.length;
      this.setState({totFRMars})
    })

    axios.get('http://localhost:3000/shoes/pays/Italie/Mars')
    .then(res => {
      totITMars=res.data.length;
      this.setState({totITMars})
    })

    axios.get('http://localhost:3000/shoes/pays/Allemagne/Mars')
    .then(res => {
      totALLMars=res.data.length;
      this.setState({totALLMars})
    })

    //Avril France Italie et Allemagne
    axios.get('http://localhost:3000/shoes/pays/France/Avril')
    .then(res => {
      totFRAv=res.data.length;
      this.setState({totFRAv})
    })

    axios.get('http://localhost:3000/shoes/pays/Italie/Avril')
    .then(res => {
      totITAv=res.data.length;
      this.setState({totITAv})
    })

    axios.get('http://localhost:3000/shoes/pays/Allemagne/Avril')
    .then(res => {
      totALLAv=res.data.length;
      this.setState({totALLAv})
    })

    //Mai France Italie et Allemagne
    axios.get('http://localhost:3000/shoes/pays/France/Mai')
    .then(res => {
      totFRMai=res.data.length;
      this.setState({totFRMai})
    })

    axios.get('http://localhost:3000/shoes/pays/Italie/Mai')
    .then(res => {
      totITMai=res.data.length;
      this.setState({totITMai})
    })

    axios.get('http://localhost:3000/shoes/pays/Allemagne/Mai')
    .then(res => {
      totALLMai=res.data.length;
      this.setState({totALLMai})
    })

    //Juin France Italie et Allemagne
    axios.get('http://localhost:3000/shoes/pays/France/Juin')
    .then(res => {
      totFRJuin=res.data.length;
      this.setState({totFRJuin})
    })

    axios.get('http://localhost:3000/shoes/pays/Italie/Juin')
    .then(res => {
      totITJuin=res.data.length;
      this.setState({totITJuin})
    })

    axios.get('http://localhost:3000/shoes/pays/Allemagne/Juin')
    .then(res => {
      totALLJuin=res.data.length;
      this.setState({totALLJuin})
    })

    //Juillet France Italie et Allemagne
    axios.get('http://localhost:3000/shoes/pays/France/Juillet')
    .then(res => {
      totFRJuill=res.data.length;
      this.setState({totFRJuill})
    })

    axios.get('http://localhost:3000/shoes/pays/Italie/Juillet')
    .then(res => {
      totITJuill=res.data.length;
      this.setState({totITJuill})
    })

    axios.get('http://localhost:3000/shoes/pays/Allemagne/Juillet')
    .then(res => {
      totALLJuill=res.data.length;
      this.setState({totALLJuill})
    })

    //Aout France Italie et Allemagne
    axios.get('http://localhost:3000/shoes/pays/France/Aout')
    .then(res => {
      totFRAout=res.data.length;
      this.setState({totFRAout})
    })

    axios.get('http://localhost:3000/shoes/pays/Italie/Aout')
    .then(res => {
      totITAout=res.data.length;
      this.setState({totITAout})
    })

    axios.get('http://localhost:3000/shoes/pays/Allemagne/Aout')
    .then(res => {
      totALLAout=res.data.length;
      this.setState({totALLAout})
    })

    //Septembre France Italie et Allemagne
    axios.get('http://localhost:3000/shoes/pays/France/Septembre')
    .then(res => {
      totFRSept=res.data.length;
      this.setState({totFRSept})
    })

    axios.get('http://localhost:3000/shoes/pays/Italie/Septembre')
    .then(res => {
      totITSept=res.data.length;
      this.setState({totITSept})
    })

    axios.get('http://localhost:3000/shoes/pays/Allemagne/Septembre')
    .then(res => {
      totALLSept=res.data.length;
      this.setState({totALLSept})
    })

    //Octobre France Italie et Allemagne
    axios.get('http://localhost:3000/shoes/pays/France/Octobre')
    .then(res => {
      totFROct=res.data.length;
      this.setState({totFROct})
    })

    axios.get('http://localhost:3000/shoes/pays/Italie/Octobre')
    .then(res => {
      totITOct=res.data.length;
      this.setState({totITOct})
    })

    axios.get('http://localhost:3000/shoes/pays/Allemagne/Octobre')
    .then(res => {
      totALLOct=res.data.length;
      this.setState({totALLOct})
    })

    //Novembre France Italie et Allemagne
    axios.get('http://localhost:3000/shoes/pays/France/Novembre')
    .then(res => {
      totFRNov=res.data.length;
      this.setState({totFRNov})
    })

    axios.get('http://localhost:3000/shoes/pays/Italie/Novembre')
    .then(res => {
      totITNov=res.data.length;
      this.setState({totITNov})
    })

    axios.get('http://localhost:3000/shoes/pays/Allemagne/Novembre')
    .then(res => {
      totALLNov=res.data.length;
      this.setState({totALLNov})
    })

    //Decembre France Italie et Allemagne
    axios.get('http://localhost:3000/shoes/pays/France/Decembre')
    .then(res => {
      totFRDec=res.data.length;
      this.setState({totFRDec})
    })

    axios.get('http://localhost:3000/shoes/pays/Italie/Decembre')
    .then(res => {
      totITDec=res.data.length;
      this.setState({totITDec})
    })

    axios.get('http://localhost:3000/shoes/pays/Allemagne/Decembre')
    .then(res => {
      totALLDec=res.data.length;
      this.setState({totALLDec})
    })
 }

  render() 
  {
    console.log("QFR JANVIER = "+totFRJanv);
    console.log("QIT JANVIER = "+totITJanv);
    console.log("QALL JANVIER = "+totALLJanv);
    const data = [
      {
        name: 'J', Qfr: totFRJanv, Qit: totITJanv, Qall: totALLJanv,
      },
      {
        name: 'F', Qfr: totFRFev, Qit: totITFev, Qall: totALLFev,
      },
      {
        name: 'M', Qfr: totFRMars, Qit: totITMars, Qall: totALLMars,
      },
      {
        name: 'A', Qfr: totFRAv, Qit: totITAv, Qall: totALLAv,
      },
      {
        name: 'M', Qfr: totFRMai, Qit: totITMai, Qall: totALLMai,
      },
      {
        name: 'J', Qfr: totFRJuin, Qit: totITJuin, Qall: totALLJuin,
      },
      {
        name: 'J', Qfr: totFRJuill, Qit: totITJuill, Qall: totALLJuill,
      },
      {
        name: 'A', Qfr: totFRAout, Qit: totITAout, Qall: totALLAout,
      },
      {
        name: 'S', Qfr: totFRSept, Qit: totITSept, Qall: totALLSept,
      },
      {
        name: 'O', Qfr: totFROct, Qit: totITOct, Qall: totALLOct,
      },
      {
        name: 'N', Qfr: totFRNov, Qit: totITNov, Qall: totALLNov,
      },
      {
        name: 'D', Qfr: totFRDec, Qit: totITDec, Qall: totALLDec,
      },
    ];

    return (
      <div>
        <AreaChart
          width={400}
          height={300}
          data={data}
          margin={{
            top: 10, right: 30, left: 0, bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area name="France" type="monotone" dataKey="Qfr" stroke="#E90570" fill="#E90570" fillOpacity={0.3} />
          <Area name ="Italie" type="monotone" dataKey="Qit" stroke="#696969" fill="#696969" fillOpacity={0.3} />
          <Area name ="Allemagne" type="monotone" dataKey="Qall" stroke="#0073CD" fill="#0073CD" fillOpacity={0.3} />
        </AreaChart>
        <p><strong>Ventes par pays</strong></p>
      </div>
    );
  }
}