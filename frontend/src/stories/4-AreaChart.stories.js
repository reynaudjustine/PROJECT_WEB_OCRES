import React from 'react';
import ReactDOM from 'react-dom';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';


import AreaChart from '../Widgets/AreaChart.js';


export default {
  title: 'Area Chart',
};
//storiesOf('LineChart', module).add('default', () => <LineChart />)

  export const Area  = () => (
    <AreaChart/>
   );
