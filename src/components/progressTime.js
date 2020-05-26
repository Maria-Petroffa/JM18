import React from 'react';

import { Progress } from 'antd';

export default class ProgressTime extends React.Component {
    count = () => {
      const { value } = this.props;
      const { timeCount } = value;
      const min = Math.trunc(timeCount / 60);
      const sec = timeCount % 60;
      return (<div>{`осталось ${min} : ${sec}`}</div>);
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
        </>
      );
    }
}
ProgressTime.propTypes = {

};
