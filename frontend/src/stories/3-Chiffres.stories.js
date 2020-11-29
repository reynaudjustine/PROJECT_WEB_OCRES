import React from 'react';
import ReactDOM from 'react-dom';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';

import LineChart from '../Widgets/TestWidget.js';
import AreaChart from '../Widgets/AreaChart.js';
import RadarChart from '../Widgets/RadarChart.js';
import PieChart from '../Widgets/PieChart.js';
import BarChart from '../Widgets/BarChart.js';
import Chiffres from '../Widgets/Chiffres.js';


export default {
  title: 'Chiffres',
};
//storiesOf('LineChart', module).add('default', () => <LineChart />)
export const chiffres = () => (
   <Chiffres/>
  );
  
