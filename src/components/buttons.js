import React from 'react';
import PropTypes from 'prop-types';

import {
  Row, Col, Button, Space,
} from 'antd';
import { RedoOutlined, CaretRightOutlined, PauseOutlined } from '@ant-design/icons';


export default class Buttons extends React.Component {
    buttonRender = (icon, text, onFn) => {
      const Icon = icon;
      return (
        <Button
          onClick={onFn}
          type="primary"
          shape="round"
          icon={<Icon />}
          size="large"
        >
          {text}
        </Button>
      );
    }

    viewButton = (isStartButton) => {
      const { stopButton, startButton } = this.props;
      if (isStartButton === true) {
        return this.buttonRender(CaretRightOutlined, 'Start', startButton);
      }
      return this.buttonRender(PauseOutlined, 'Stop', stopButton);
    }

    render() {
      const { view } = this.props;
      const { isStartButton } = view;
      const { clearButton } = this.props;

      return (
        <Row>
          <Col offset={0.5}>
            <Space>
              {this.viewButton(isStartButton)}
              {this.buttonRender(RedoOutlined, 'Clear', clearButton)}
            </Space>
          </Col>
        </Row>
      );
    }
}

Buttons.propTypes = {
  view: PropTypes.object,
  clearButton: PropTypes.func,
  stopButton: PropTypes.func,
  startButton: PropTypes.func,
};
