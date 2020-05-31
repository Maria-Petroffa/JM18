import React from 'react';
import PropTypes from 'prop-types';
import {
  Row, Col, Slider, InputNumber,
} from 'antd';

export default class InputTime extends React.Component {
  handleChangeMin = (value) => {
    const { onChangeMin } = this.props;
    onChangeMin(value);
  };

  handleChangeSec = (value) => {
    const { onChangeSec } = this.props;
    onChangeSec(value);
  };

  handleChangeSlider = (value) => {
    const { onChangeSlider } = this.props;
    onChangeSlider(value);
  };

  render() {
    const { value: { timeInputDisable, timePrev } } = this.props;
    const sec = timePrev % 60;
    const min = Math.trunc(timePrev / 60);

    return (
      <>
        <Row>
          <Col span={20}>
            <Slider
              min={0}
              max={3600}
              onChange={this.handleChangeSlider}
              step={15}
              value={typeof timePrev === 'number' ? timePrev : 0}
            />
          </Col>
          <br />
          <br />
          <br />
          <Col span={24}>
            <InputNumber
              min={0}
              max={720}
              step={1}
              style={{ margin: '0 16px' }}
              value={min}
              onChange={this.handleChangeMin}
              disabled={timeInputDisable}
            />
            <InputNumber
              min={0}
              max={60}
              style={{ margin: '0 16px' }}
              step={1}
              value={sec}
              onChange={this.handleChangeSec}
              disabled={timeInputDisable}
            />
          </Col>
        </Row>
      </>
    );
  }
}

InputTime.propTypes = {
  value: PropTypes.object,
  onChangeSec: PropTypes.func,
  onChangeMin: PropTypes.func,
  onChangeSlider: PropTypes.func,
};


InputTime.defaultProps = {
  value: { timeInputDisable: false, timePrev: 0 },
  onChangeSec: null,
  onChangeMin: null,
  onChangeSlider: null,
};
