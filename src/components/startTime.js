import React from 'react';
import PropTypes from 'prop-types';
import {
  Row, Col, Slider, InputNumber,
} from 'antd';


export default class StartTime extends React.Component {
    onChangeMin2 = (value) => {
      const { onChangeMin } = this.props;
      onChangeMin(value);
    };

    onChangeSec2 = (value) => {
      const { onChangeSec } = this.props;
      onChangeSec(value);
    };

    render() {
      const { min, sec, timeInputDisable } = this.props.value;
      return (
        <>
          <Row>
            <Col span={20}>
              <Slider
                min={0}
                max={720}
                onChange={this.onChangeMin2}
                step={15}
                value={typeof min === 'number' ? min : 0}
              />
            </Col>
            <Col span={4}>
              <InputNumber
                min={0}
                max={720}
                step={1}
                style={{ margin: '0 16px' }}
                value={min}
                onChange={this.onChangeMin2}
                disabled={timeInputDisable}
              />
            </Col>
          </Row>
          <br />
          <Row>
            <Col span={20}>
              <Slider
                min={0}
                max={60}
                onChange={this.onChangeSec2}
                value={typeof sec === 'number' ? sec : 0}
                step={15}
              />
            </Col>
            <Col span={4}>
              <InputNumber
                min={0}
                max={60}
                style={{ margin: '0 16px' }}
                step={1}
                value={sec}
                onChange={this.onChangeSec2}
                disabled={timeInputDisable}
              />
            </Col>
          </Row>
        </>
      );
    }
}

StartTime.propTypes = {
  value: PropTypes.object,
  onChangeSec: PropTypes.func,
  onChangeMin: PropTypes.func,
};
