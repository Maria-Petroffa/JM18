import React from 'react';
import { Row, Col } from 'antd';
import Buttons from './buttons';
import ProgressTime from './progressTime';
import StartTime from './startTime';

export default class CountdownApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      min: 0,
      sec: 0,
      timeCount: 0,
      timeStart: 0,
      isStartButton: true,
      timeInputDisable: false,
    };
  }


    startButton = () => {
      const {
        isStartButton, min, sec, timeCount, timeInputDisable,
      } = this.state;
      const startCount = min * 60 + sec;

      if (timeCount === 0) {
        this.setState({
          timeCount: startCount,
          timeStart: startCount,
        });
      }

      if (min === 0 && sec === 0 && timeInputDisable === false) { return; }

      this.setState({
        isStartButton: !isStartButton,
        timeInputDisable: true,
        min: 0,
        sec: 0,
      });

      this.timerID = setInterval(
        () => this.tick(),
        1000,
      );
    }

    stopButton = () => {
      const { isStartButton } = this.state;
      this.setState({
        isStartButton: !isStartButton,
      });
      clearInterval(this.timerID);
    }

    clearButton = () => {
      clearInterval(this.timerID);
      this.setState({
        isStartButton: true,
        timeInputDisable: false,
        timeCount: 0,
        timeStart: 0,
      });
    }

    onChangeMin = (value) => {
      if (isNaN(value)) {
        return;
      }
      this.setState({
        min: value,
      });
    };

    onChangeSec = (value) => {
      if (isNaN(value)) {
        return;
      }
      this.setState({
        sec: value,
      });
    };

    tick = () => {
      const { timeCount } = this.state;
      if (timeCount === 0) {
        this.setState({
          progressTime: 100,
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
      return (
        <>
          <Row>
            <Col offset={1} span={8}>
              <StartTime
                onChangeMin={this.onChangeMin}
                onChangeSec={this.onChangeSec}
                value={this.state}
              />
            </Col>
          </Row>
          <br />
          <br />
          <Row>
            <Col offset={3}>
              <Buttons
                view={this.state}
                startButton={this.startButton}
                stopButton={this.stopButton}
                clearButton={this.clearButton}
              />
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
