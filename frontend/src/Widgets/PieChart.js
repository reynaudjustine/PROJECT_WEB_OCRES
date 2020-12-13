import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector } from 'recharts';
import axios from 'axios';

let totVentesSn=0;
let totVentesSp=0;
let totVentesP=0;
let totVentesV=0;
let totVentesB=0;

let couleur = "#606060";

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
    fill, payload, percent, value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{payload.name}</text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        //fill={fill}
        fill="#E90570"
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      {/* <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`PV ${value}`}</text> */}
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey}z textAnchor={textAnchor} fill="#333">
        {` ${(percent * 100).toFixed(2)}%`}
      </text>
    </g>
  );
};


export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/hqnrgxpj/';

  state = {
    activeIndex: 0,
  };

  onPieEnter = (data, index) => {
    this.setState({
      activeIndex: index,
    });
  };

  componentDidMount()
 {
   //Requetes
    axios.get('http://localhost:3000/shoes/categorie/Sneakers')
    .then(res => {
      totVentesSn=res.data.length;
      this.setState({totVentesSn})
      })
    

    axios.get('http://localhost:3000/shoes/categorie/Sport')
    .then(res => {
      totVentesSp=res.data.length;
      this.setState({totVentesSp})
      })

    axios.get('http://localhost:3000/shoes/categorie/Plage')
    .then(res => {
      totVentesP=res.data.length;
      this.setState({totVentesP})
      })
    
    axios.get('http://localhost:3000/shoes/categorie/Ville')
    .then(res => {
      totVentesV=res.data.length;
      this.setState({totVentesV})
      })
    
    axios.get('http://localhost:3000/shoes/categorie/Bottines')
    .then(res => {
      totVentesB=res.data.length;
      this.setState({totVentesB})
      })
    
  }


  render() {
    const data = [
      { name: 'Sneaker', value: totVentesSn},
      { name: 'Sport', value: totVentesSp },
      { name: 'Ville', value: totVentesV},
      { name: 'Bottines', value: totVentesB },
      { name: 'Plage', value: totVentesP},
    ];
    return (
      <div>
        <PieChart width={400} height={300}>
          <Pie
            activeIndex={this.state.activeIndex}
            activeShape={renderActiveShape}
            data={data}
            cx={185}//200
            cy={150}//200
            innerRadius={60}
            outerRadius={80}
            //fill="#8884d8"
            fill="#606060"
            dataKey="value"
            onMouseEnter={this.onPieEnter}
          />
        </PieChart>
        <p><strong>Ventes par catégorie</strong></p>
      </div>
    );
  }
}
