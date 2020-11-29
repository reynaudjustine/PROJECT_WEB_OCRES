import React, { PureComponent } from 'react';
import {
  Radar, RadarChart, PolarGrid, Legend,
  PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';

const data = [
  {
    subject: 'Sneakers', Juscar: 90, Asos: 10, fullMark: 100,
  },
  {
    subject: 'Sport', Juscar: 30, Asos: 70, fullMark: 100,
  },
  {
    subject: 'Ville', Juscar: 25, Asos: 75, fullMark: 100,
  },
  {
    subject: 'Bottines', Juscar: 51, Asos: 49, fullMark: 100,
  },
  {
    subject: 'Plage', Juscar: 55, Asos: 45, fullMark: 100,
  },
];

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/dpgb3xjq/';

  render() {
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