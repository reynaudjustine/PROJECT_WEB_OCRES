import React, { PureComponent } from 'react';
import {
  Radar, RadarChart, PolarGrid, Legend,
  PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';

const data = [
  {
    subject: 'Sneakers', Juscar: 120, Asos: 110, fullMark: 150,
  },
  {
    subject: 'Sport', Juscar: 98, Asos: 130, fullMark: 150,
  },
  {
    subject: 'Ville', Juscar: 86, Asos: 130, fullMark: 150,
  },
  {
    subject: 'Bottines', Juscar: 99, Asos: 100, fullMark: 150,
  },
  {
    subject: 'Plage', Juscar: 85, Asos: 90, fullMark: 150,
  },
];

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/dpgb3xjq/';

  render() {
    return (
      <div>
        <RadarChart cx={200} cy={150} outerRadius={150} width={400} height={400} data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 150]} />
          <Radar name="Juscar" dataKey="Juscar" stroke="#E90570" fill="#E90570" fillOpacity={0.6} />
          <Radar name="Asos" dataKey="Asos" stroke="#696969" fill="#696969" fillOpacity={0.6} />
          <Legend />
        </RadarChart>
        <p><strong>Part de marché</strong></p>
      </div>
    );
  }
}