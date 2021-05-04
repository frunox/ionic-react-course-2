import React from 'react';
import dayjs from 'dayjs';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  ReferenceLine,
  CartesianGrid,
  YAxis,
} from 'recharts';
import { calculateSeries } from '../calculations';
import './BiorhythmChart.css';

function formatDate(isoString) {
  return dayjs(isoString).format('D MMM');
}

function BiorhythmChart({ birthDate, targetDate }) {
  const startDate = dayjs(targetDate).subtract(15, 'days').toISOString();
  const data = calculateSeries(birthDate, startDate, 31).map((item) => ({
    ...item,
    date: formatDate(item.date),
  }));
  return (
    <ResponsiveContainer className="biorhythm-chart" width="100%" height={200}>
      <LineChart data={data}>
        <XAxis
          dataKey="date"
          ticks={[data[3].date, data[15].date, data[27].date]}
        />
        <YAxis width={22} />
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <ReferenceLine x={data[15].date} />
        <Line
          className="physical"
          type="natural"
          dot={false}
          dataKey="physical"
        />
        <Line
          className="emotional"
          type="natural"
          dot={false}
          dataKey="emotional"
        />
        <Line
          className="intellectual"
          type="natural"
          dot={false}
          dataKey="intellectual"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default BiorhythmChart;
