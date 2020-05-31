import React from 'react';
import { Row, Col } from 'antd';

import { RedoOutlined, CaretRightOutlined, PauseOutlined } from '@ant-design/icons';
import Button from './button';
import ProgressTime from './progressTime';
import InputTime from './inputTime';

const initialState = {
  timePrev: 0,
  timeCount: 0,
  timeStart: 0,
  isStartButton: true,
  timeInputDisable: false,
};
export default class CountdownApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  startTimer = () => {
    const {
      isStartButton, timePrev, timeCount, timeInputDisable,
    } = this.state;


    if (timeCount === 0) {
      this.setState({
        timeCount: timePrev,
        timeStart: timePrev,
      });
    }

    if (timePrev === 0 && timeInputDisable === false) { return; }

    this.setState({
      isStartButton: !isStartButton,
      timeInputDisable: true,
      timePrev: 0,
    });

    this.timerID = setInterval(
      () => this.tick(),
      1000,
    );
  }

  stopTimer = () => {
    const { isStartButton } = this.state;
    this.setState({
      isStartButton: !isStartButton,
    });
    clearInterval(this.timerID);
  }

  clearTimer = () => {
    clearInterval(this.timerID);
    this.setState(initialState);
  }

  onChangeSlider = (value) => {
    this.setState({
      timePrev: value,
    });
  }

  onChangeMin = (value) => {
    if (isNaN(value)) {
      return;
    }
    const { timePrev } = this.state;
    const setTimePrev = timePrev + (value - Math.trunc(timePrev / 60)) * 60;

    this.setState({
      timePrev: setTimePrev,
    });
  };

  onChangeSec = (value) => {
    if (isNaN(value)) {
      return;
    }
    const { timePrev } = this.state;
    const setTimePrev = timePrev + (value - (timePrev % 60));
    this.setState({
      timePrev: setTimePrev,
    });
  };

  tick = () => {
    const { timeCount } = this.state;
    if (timeCount === 0) {
      this.setState({
        progressTime: 100,
        timeInputDisable: false,
        isStartButton: true,
      });
      clearInterval(this.timerID);
      return;
    }

    const count = timeCount - 1;
    this.setState({
      timeCount: count,
    });
  }

  render() {
    const { isStartButton } = this.state;
    return (
      <>
        <Row>
          <Col offset={1} span={8}>
            <InputTime
              onChangeMin={this.onChangeMin}
              onChangeSec={this.onChangeSec}
              onChangeSlider={this.onChangeSlider}
              value={this.state}
            />
          </Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col offset={2}>
            <Button isDisplay={isStartButton} onClickFunc={this.startTimer} icon={<CaretRightOutlined />} text="Start" />
            <Button isDisplay={!isStartButton} onClickFunc={this.stopTimer} icon={<PauseOutlined />} text="Stop" />
            <Button isDisplay onClickFunc={this.clearTimer} icon={<RedoOutlined />} text="Clear" />
          </Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col offset={4}>
            <ProgressTime
              value={this.state}
            />
          </Col>
        </Row>
      </>
    );
  }
}
