import React from 'react';

const TooltipChart = ({ active, payload, label }) => {

  // console.log(payload[0].date);

  if (active && payload && payload.length) {

    let fullDate = payload[0].payload.date;
    let price = payload[0].value;

    return (
      <div>
        <p>{fullDate}</p>
        <p>{price}</p>
      </div>
    )
  }

  return null;
};

export default TooltipChart;