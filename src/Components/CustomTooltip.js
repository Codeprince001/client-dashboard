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