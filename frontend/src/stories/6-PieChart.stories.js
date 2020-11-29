import React from 'react';
import ReactDOM from 'react-dom';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';


import PieChart from '../Widgets/PieChart.js';



export default {
  title: 'Pie Chart',
};
//storiesOf('LineChart', module).add('default', () => <LineChart />)

   export const Pie  = () => (
    <PieChart/>
   );
