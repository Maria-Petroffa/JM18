import React from 'react';
import PropTypes from 'prop-types';
import { Progress } from 'antd';
import sound from '../sound.mp3';
export default class ProgressTime extends React.Component {
  count = () => {
    const { value: { timeCount } } = this.props;
    const min = Math.trunc(timeCount / 60);
    const sec = timeCount % 60;
    return (<div>{`осталось ${min} : ${sec}`}</div>);
  }

  onSound = (percent) => {
    if (percent < 100) {
      return null;
    }

    const autoplay = true;
    return <audio src={sound} autoPlay={autoplay} type={"audio/mpeg"} />;
  }

  render() {
    const { value: { timeStart, timeCount } } = this.props;
    if (timeStart === 0) { return null; }
    const progressPercent = 100 - Math.trunc((timeCount / timeStart) * 100);
    return (
      < >
        {this.count()}
        <br />
        <Progress
          type="circle"
          strokeColor={{
            '0%': '#108ee9',
            '100%': '#87d068',
          }}
          percent={progressPercent}
        />
        {this.onSound(progressPercent)}
      </>
    );
  }
}
ProgressTime.propTypes = {
  value: PropTypes.object,
};
ProgressTime.defaultProps = {
  value: { timeStart: 0, timeCount: 0 },
};
