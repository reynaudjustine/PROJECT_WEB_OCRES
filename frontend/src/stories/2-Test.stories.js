import React from 'react';
import ReactDOM from 'react-dom';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';

import LineChart from '../Widgets/TestWidget.js';
import AreaChart from '../Widgets/AreaChart.js';
import RadarChart from '../Widgets/RadarChart.js';
import PieChart from '../Widgets/PieChart.js';
import BarChart from '../Widgets/BarChart.js';


export default {
  title: 'Test',
};
//storiesOf('LineChart', module).add('default', () => <LineChart />)
export const Test = () => (
   <LineChart/>
  );
  export const Area  = () => (
    <AreaChart/>
   );
   export const Radar  = () => (
    <RadarChart/>
   );
   export const Pie  = () => (
    <PieChart/>
   );
   export const Bar  = () => (
    <BarChart/>
   );

export const emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);