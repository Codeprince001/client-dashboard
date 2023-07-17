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

export const LineChartBox = () => {
  const theme = useTheme();

  return (
    <div className="lineChartBox">
      <div className='title' >
        <h5>TIme Log</h5>
      </div>
      <div className='chart'>
        <ResponsiveContainer width="99%" height="100%">
          <LineChart data={data}>
            <Tooltip
              contentStyle={{ background: theme.palette.custom.darkBlue, fontSize: "12px", border: "none", borderRadius: "10px" }}
            />
            <XAxis axisLine={false} padding={{ right: 10 }} />
            <YAxis axisLine={false} />
            <Line dataKey="pv" stroke={theme.palette.custom.blue} strokeWidth={2} fill={theme.palette.custom.blue} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div >);

};
