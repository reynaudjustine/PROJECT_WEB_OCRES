import React from 'react';
import ReactDOM from 'react-dom';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';


import BarChart from '../Widgets/BarChart.js';


export default {
  title: 'Bar Chart',
};
//storiesOf('LineChart', module).add('default', () => <LineChart />)
 
   export const Bar  = () => (
    <BarChart/>
   );
