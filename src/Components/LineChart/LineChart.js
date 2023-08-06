import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import "./linechart.css";
import { useTheme } from '@mui/material';



export const LineChartBox = (props) => {
  const theme = useTheme();

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;

      return (
        <div style={{ backgroundColor: theme.palette.custom.darkBlue, display: "flex", flexDirection: "column", borderRadius: "10px", padding: ".2rem", fontSize: "12px" }}>
          <p style={{ margin: "5px", color: theme.palette.custom.grey, borderBottom: `2px solid ${theme.palette.custom.blue}` }}>{`${label}`}</p>
          <p style={{ color: theme.palette.custom.white, margin: "5px", textAlign: "center" }}>{data.uv}</p>
          <p style={{ color: theme.palette.custom.grey, textAlign: "center" }}>Hours Logged</p>
        </div >
      );
    }

    return null;
  };

  return (
    <div className="lineChartBox">
      <div className='title' style={{ display: "flex" }}>
        <h5 style={{ marginRight: "5px" }}>Time Log</h5>
        <span>{props.icon}</span>
      </div>
      <div className='linechart'>
        <ResponsiveContainer width="90%" height="100%">
          <LineChart data={props.chartData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <Tooltip
              cursor={false}
              content={<CustomTooltip />}
              contentStyle={{ background: theme.palette.custom.darkBlue, fontSize: "12px", border: "none", borderRadius: "10px" }}
            />
            <XAxis axisLine={false} padding={{ left: 60, right: 60 }} tickMargin={10} tickLine={false} dataKey="xData" fontSize="12px" />
            <YAxis axisLine={false} padding={{ left: 20 }} tickMargin={20} dataKey="yData" />
            <Line dataKey="uv" stroke={theme.palette.custom.blue} strokeWidth={2} fill={theme.palette.custom.blue} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div >);

};
