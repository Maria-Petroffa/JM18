import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'antd';



export default class Buttons extends React.Component {

  render() {
    const { isDisplay, onClickFunc, icon, text } = this.props;
    if (isDisplay === false) { return null; }

    return (
      <Button
        onClick={onClickFunc}
        type="primary"
        shape="round"
        icon={icon}
        size="large"
      >
        {text}
      </Button>
    );
  }
}

Buttons.propTypes = {
  isDisplay: PropTypes.bool,
  onClickFunc: PropTypes.func,
  text: PropTypes.string,
  icon: PropTypes.element,
};

Buttons.defaultProps = {
  isDisplay: true,
  onClickFunc: null,
  text: "Button",
  icon: null,
};
