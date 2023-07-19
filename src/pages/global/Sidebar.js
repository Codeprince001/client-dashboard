import { useState } from "react";
import { useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "./global.css";
import { SidebarData } from "../../Data/Data";

export const VerticalSidebar = () => {
  const theme = useTheme();
  const [selected, setSelected] = useState("Dashboard");

  return (
    <aside className="sidebar" >
      <ul className="sidebar-menu ">
        {SidebarData.map((data) => {
          return (
            <li key={data.title} onClick={() => setSelected(data.title)} className={selected === data.title ? "sidebar-menuItem active" : "sidebar-menuItem"}  >
              <Link to={data.url} >
                <div className="icon">
                  {data.icon}
                </div>
                <div className="description">
                  <div className="title" style={{ fontSize: "12px", fontWeight: "bold" }}>{data.title}</div>
                  <div className="icon">{data.subicon && data.subicon}</div>
                </div>
              </Link></li>
          );
        }
        )}
      </ul>
    </aside>
  );
};