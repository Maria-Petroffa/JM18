import React from 'react';
import { Tabs } from 'antd';
import Timer from './timer';
import Countdown from './countdown';

const { TabPane } = Tabs;

export default class Tab extends React.Component {
  render() {
    return (
      <Tabs type="card">
        <TabPane tab="Timer" key="1"><Timer /></TabPane>
        <TabPane tab="Countdown" key="2"><Countdown /></TabPane>
      </Tabs>
    );
  }
}
