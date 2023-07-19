import "./dashboard.css";
import { RiSettings3Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { DashboardMenuData } from "../../Data/Data";

const DashboardTab = () => {
  const [selected, setSelected] = useState("Overview");

  useEffect(() => {
    function handleMouseIn(e) {
      const subNav = e.target;
      subNav.classList.add("active");
    }

    function handleMouseOut(e) {
      const subNav = e.target;
      if (subNav.textContent !== selected) {
        subNav.classList.remove("active");
      }
    }

    const subNavs = document.querySelectorAll(".sub-nav");
    subNavs.forEach((subNav) => {
      subNav.addEventListener("mouseenter", handleMouseIn);
      subNav.addEventListener("mouseleave", handleMouseOut);
    });

    return () => {
      subNavs.forEach((subNav) => {
        subNav.removeEventListener("mouseenter", handleMouseIn);
        subNav.removeEventListener("mouseleave", handleMouseOut);
      });
    };
  }, [selected]);

  return (
    <section className="dashboard-header">
      <div className="nav">
        <div
          className={`sub-nav ${selected === "Overview" ? "active" : ""}`}
          onClick={() => setSelected("Overview")}
        >
          <Link to="/">Overview</Link>
        </div>
        <div
          className={`sub-nav ${selected === "Project" ? "active" : ""}`}
          onClick={() => setSelected("Project")}
        >
          <Link to="/dashboard/project">Project</Link>
        </div>
        <div
          className={`sub-nav ${selected === "Client" ? "active" : ""}`}
          onClick={() => setSelected("Client")}
        >
          <Link to="/dashboard/client">Client</Link>
        </div>
        <div
          className={`sub-nav ${selected === "HR" ? "active" : ""}`}
          onClick={() => setSelected("HR")}
        >
          <Link to="/dashboard/hr">HR</Link>
        </div>
        <div
          className={`sub-nav ${selected === "Ticket" ? "active" : ""}`}
          onClick={() => setSelected("Ticket")}
        >
          <Link to="/dashboard/ticket">Ticket</Link>
        </div>
        <div
          className={`sub-nav ${selected === "Finance" ? "active" : ""}`}
          onClick={() => setSelected("Finance")}
        >
          <Link to="/dashboard/finance">Finance</Link>
        </div>
      </div>
      <div className="setting-icon">
        <RiSettings3Fill />
      </div>
    </section>
  );
};

export default DashboardTab;
