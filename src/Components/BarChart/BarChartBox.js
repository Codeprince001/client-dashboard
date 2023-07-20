import { BarChart, Bar, Cell, CartesianGrid, Tooltip, Legend, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { useTheme } from '@mui/material';
import "./barchart.css";


const BarChartBox = (props) => {
  const theme = useTheme();

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload; // Extract the data for the tooltip

      return (
        <div style={{ backgroundColor: theme.palette.custom.darkBlue, display: "flex", flexDirection: "column", borderRadius: "10px", padding: "1rem", fontSize: "12px" }}>
          <p style={{ color: theme.palette.custom.grey, borderBottom: `2px solid ${theme.palette.custom.blue}` }}>{data.xData}</p>
          <p style={{ color: theme.palette.custom.white, margin: "5px", textAlign: "center" }}>{data.yData}</p>
          <p style={{ color: theme.palette.custom.grey, textAlign: "center" }}>Earnings</p>
        </div >
      );
    }

    return null;
  };

  return (
    <div className="barChartBox">
      <div className='title' >
        <h5>{props.title}</h5>
      </div>
      <div className='chart' >
        <ResponsiveContainer width="99%" height="100%">
          <BarChart data={props.chartData} barGap={2} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ fill: "none" }}
              labelStyle={{ color: theme.palette.custom.grey }}
              contentStyle={{ background: theme.palette.custom.darkBlue, fontSize: "12px", border: "none", borderRadius: "10px" }}
            />
            <XAxis axisLine={false} padding={{ right: 10 }} tickMargin={10} tickLine={false} dataKey="xData" fontSize="12px" />
            <YAxis axisLine={false} tickMargin={10} fontSize="12px" dataKey="yData" />
            <Bar dataKey="yData" fill={theme.palette.custom.blue} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChartBox;