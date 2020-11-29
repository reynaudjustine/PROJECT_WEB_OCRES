import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
    name: 'Juin', benefice: 4000,
  },
  {
    name: 'Juil', benefice: 3000, 
  },
  {
    name: 'Août', benefice: 2000, 
  },
  {
    name: 'Sept', benefice: 2780,
  },
  {
    name: 'Oct', benefice: 1890,
  },
  {
    name: 'Nov', benefice: 2390,
  },
  {
    name: 'Déc', benefice: 3490,
  },
];

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

  render() {
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
