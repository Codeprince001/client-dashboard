import { BarChart, Bar, Cell, CartesianGrid, Tooltip, Legend, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { useTheme } from '@mui/material';
import "./barchart.css";

const BarChartBox = (props) => {
  const theme = useTheme();

  return (
    <div className="barChartBox">
      <div className='title' >
        <h5>{props.title}</h5>
      </div>
      <div className='chart' >
        <ResponsiveContainer width="99%" height="100%">
          <BarChart data={props.chartData} barGap={2} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <Tooltip
              cursor={{ fill: "none" }}
              labelStyle={{ display: "none" }}
              allowEscapeViewBox={{ x: true, y: true }}
              contentStyle={{ background: theme.palette.custom.darkBlue, fontSize: "12px", border: "none", borderRadius: "10px" }}
            />
            <XAxis axisLine={false} padding={{ right: 10 }} />
            <YAxis axisLine={false} />
            <Bar dataKey="uv" fill={theme.palette.custom.blue} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChartBox;