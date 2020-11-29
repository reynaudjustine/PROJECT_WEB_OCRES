import React from 'react';
import ReactDOM from 'react-dom';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';


import RadarChart from '../Widgets/RadarChart.js';


export default {
  title: 'Radar Chart',
};
//storiesOf('LineChart', module).add('default', () => <LineChart />)

   export const Radar  = () => (
    <RadarChart/>
   );
   
