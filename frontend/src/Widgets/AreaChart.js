import React, { PureComponent } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import { curveCardinal } from 'd3-shape';

const data = [
  {
    name: 'Juin', Qfr: 4000, Qit: 2400, Qall: 2400,
  },
  {
    name: 'Juil', Qfr: 3000, Qit: 1398, Qall: 2210,
  },
  {
    name: 'Août', Qfr: 2000, Qit: 9800, Qall: 2290,
  },
  {
    name: 'Sept', Qfr: 2780, Qit: 3908, Qall: 2000,
  },
  {
    name: 'Oct', Qfr: 1890, Qit: 4800, Qall: 2181,
  },
  {
    name: 'Nov', Qfr: 2390, Qit: 3800, Qall: 2500,
  },
  {
    name: 'Déc', Qfr: 3490, Qit: 4300, Qall: 2100,
  },
];

const cardinal = curveCardinal.tension(0.2);

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xujpnxxp/';

  render() {
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
          <Area type="monotone" dataKey="Qfr" stroke="#E90570" fill="#E90570" fillOpacity={0.3} />
          <Area type="monotone" dataKey="Qit" stroke="#696969" fill="#696969" fillOpacity={0.3} />
          <Area type="monotone" dataKey="Qall" stroke="#0073CD" fill="#0073CD" fillOpacity={0.3} />
        </AreaChart>
        <p><strong>Ventes par pays</strong></p>
      </div>
    );
  }
}