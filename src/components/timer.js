import React from 'react';
import { Row, Col } from 'antd';
import Buttons from './buttons';

export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeCount: 0,
      size: 'large',
      isStartButton: true,
    };
  }

    startButton = () => {
      const { isStartButton } = this.state;
      this.setState({
        isStartButton: !isStartButton,
      });

      if (isStartButton === false) {
        clearInterval(this.timerID);
      }

      if (isStartButton === true) {
        this.timerID = setInterval(
          () => this.tick(),
          10,
        );
      }
    }

    clearButton = () => {
      clearInterval(this.timerID);
      this.setState({
        isStartButton: true,
        timeCount: 0,
      });
    }

    tick = () => {
      const { timeCount } = this.state;
      const count = timeCount + 1;
      this.setState({ timeCount: count });
    }

    count = () => {
      const { timeCount } = this.state;
      const min = Math.trunc(timeCount / 6000);
      const sec = Math.trunc(timeCount / 100);
      const ms = timeCount % 100;
      return <div>{`min: ${min}  sec: ${sec}  ms: ${ms}`}</div>;
    }

    render() {
      return (
        <>
          <br />
          <Row>
            <Col span={12} offset={1}>
              {this.count()}
            </Col>
          </Row>
          <br />
          <Row>
            <Col span={12} offset={1}>
              <Buttons
                view={this.state}
                startButton={this.startButton}
                stopButton={this.startButton}
                clearButton={this.clearButton}
              />
            </Col>
          </Row>
        </>
      );
    }
}
