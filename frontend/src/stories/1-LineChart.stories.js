import React from 'react';
import ReactDOM from 'react-dom';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';

import LineChart from '../Widgets/TestWidget.js';



export default {
  title: 'Line Chart',
};
//storiesOf('LineChart', module).add('default', () => <LineChart />)
export const Test = () => (
   <LineChart/>
  );
