import React from 'react';
import { Row, Col } from 'antd';
import Button from './button';
import { RedoOutlined, CaretRightOutlined, PauseOutlined } from '@ant-design/icons';


const initialState = {
  timeStart: 0,
  timeCount: 0,
  isStartButton: true,
};
export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  startTimer = () => {
    const { isStartButton, timeCount } = this.state;
    this.setState({
      isStartButton: !isStartButton,
    });

    if (isStartButton === false) {
      clearInterval(this.timerID);
    }

    if (isStartButton === true) {
      if (timeCount === 0) {
        this.setState({
          timeStart: Date.now(),
        })
      }
      if (timeCount > 0) {
        const newTimeStart = Date.now() - timeCount;
        this.setState({
          timeStart: newTimeStart,
        })
      }

      this.timerID = setInterval(
        () => this.tick(),
        80,
      );
    }
  }

  clearTimer = () => {
    clearInterval(this.timerID);
    this.setState(initialState);
  }

  tick = () => {
    const { timeStart } = this.state;
    const count = Date.now() - timeStart;
    this.setState({ timeCount: count });
  }

  timeСounter = () => {
    const { timeCount } = this.state;
    const min = Math.trunc(timeCount / 60000);
    const sec = Math.trunc(timeCount / 1000);
    const ms = Math.trunc((timeCount % 1000) / 10);
    return <div>{`min: ${min}  sec: ${sec}  ms: ${ms}`}</div>;
  }

  render() {
    const { isStartButton } = this.state;
    return (
      <>
        <br />
        <Row>
          <Col span={12} offset={1}>
            {this.timeСounter()}
          </Col>
        </Row>
        <br />
        <Row>
          <Col span={12} offset={1}>
            <Button isDisplay={isStartButton} onClickFunc={this.startTimer} icon={<CaretRightOutlined />} text={'Start'} />
            <Button isDisplay={!isStartButton} onClickFunc={this.startTimer} icon={<PauseOutlined />} text={'Stop'} />
            <Button isDisplay onClickFunc={this.clearTimer} icon={<RedoOutlined />} text={'Clear'} />
          </Col>
        </Row>
      </>
    );
  }
}
