import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import "./linechart.css";
import { useTheme } from '@mui/material';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  }
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload; // Extract the data for the tooltip

    return (
      <div className="custom-tooltip">
        <p className="label">{`${data.name}: ${data.uv}`}</p>
      </div>
    );
  }

  return null;
};

export const LineChartBox = () => {
  const theme = useTheme();

  return (
    <div className="lineChartBox">
      <div className='title' >
        <h5>Time Log</h5>
      </div>
      <div className='linechart'>
        <ResponsiveContainer width="99%" height="100%">
          <LineChart data={data}>
            <Tooltip
              cursor={false}
              content={<CustomTooltip />}
              name={data.name}
              contentStyle={{ background: theme.palette.custom.darkBlue, fontSize: "12px", border: "none", borderRadius: "10px" }}
            />
            <XAxis axisLine={false} padding={{ right: 10 }} tickMargin={10} tickLine={false} />
            <YAxis axisLine={false} tickMargin={10} />
            <Line dataKey="pv" stroke={theme.palette.custom.blue} strokeWidth={2} fill={theme.palette.custom.blue} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div >);

};
