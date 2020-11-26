import React, { PureComponent } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
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


const getIntroOfPage = (label) => {
  if (label === 'Nike') {
    return "";
  } if (label === 'Adidas') {
    return "";
  } if (label === 'Vans') {
    return "";
  } if (label === 'Puma') {
    return '';
  } if (label === 'Converse') {
    return '';
  }  
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label} : ${payload[0].value}`}</p>
        <p className="intro">{getIntroOfPage(label)}</p>
        <p className="desc">Anything you want can be displayed here.</p>
      </div>
    );
  }

  return null;
};

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/vxq4ep63/';

  render() {
    return (
      <div>
        <BarChart
          width={400}
          height={300}
          data={data}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Marque" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar dataKey="NB_Ventes" barSize={20} fill="#E90570" />
        </BarChart>
        <p><strong>Nombre de ventes par catégorie</strong></p>
      </div>
    );
  }
}