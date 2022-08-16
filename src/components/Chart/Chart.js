import { Component } from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  let dataPointValues = props.dataPoints.map((x) => x.value);
  let totalMaximum = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((datapoint) => (
        <ChartBar
          value={datapoint.value}
          key={datapoint.label}
          maxValue={null}
          label={datapoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
