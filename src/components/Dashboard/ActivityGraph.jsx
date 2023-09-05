
import React from 'react';
import { Bar } from 'react-chartjs-2';

const ActivityGraph = ({ data }) => {
  const activityLabels = data.dates;
  const activityValues = data.values;

  const chartData = {
    labels: activityLabels,
    datasets: [
      {
        label: data.name,
        data: activityValues,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="activity-graph">
      <Bar data={chartData} />
    </div>
  );
};

export default ActivityGraph;
