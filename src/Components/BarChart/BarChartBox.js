import { BarChart, Bar, Cell, CartesianGrid, Tooltip, Legend, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { useTheme } from '@mui/material';
import "./barchart.css";


const data = [
  {
    name: 'Page A',
    uv: 600000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 400000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 200000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 100000,
    pv: 3908,
    amt: 2000,
  }
];

const BarChartBox = () => {
  const theme = useTheme();

  return (
    <div className="barChartBox">
      <div className='title' >
        <h5>Earnings</h5>
      </div>
      <div className='chart' >
        <ResponsiveContainer width="99%" height="100%">
          <BarChart data={data} barGap={2} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <Tooltip
              cursor={{ fill: "none" }}
              labelStyle={{ display: "none" }}
            />
            <XAxis axisLine={false} padding={{ right: 10, }} />
            <YAxis axisLine={false} />
            <Bar dataKey="uv" fill={theme.palette.custom.blue} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChartBox;;;