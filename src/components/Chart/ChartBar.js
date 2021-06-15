import React from 'react';
import './ChartBar.css';

const ChartBar = (props) => {
  const { label, value, maxValue } = props;
  const fillBarHeight = `${Math.round((value / maxValue) * 100)}%`;
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: fillBarHeight }} />
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
};

export default ChartBar;
