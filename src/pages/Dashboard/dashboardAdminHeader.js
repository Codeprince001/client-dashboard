import "./dashboard.css";
import { RiSettings3Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { DashboardMenuData } from "../../Data/Data";

function DashboardTab() {
  const [selected, setSelected] = useState();

  useEffect(() => {
    function handleMouseIn(e) {
      const subNav = e.target;
      subNav.classList.add("active");
    }

    function handleMouseOut(e) {
      const subNav = e.target;
      subNav.classList.remove("active");
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
  }, []);



  return (
    <section className="dashboard-header ">
      <div className="nav" >
        <div className="sub-nav active">
          <Link to="/">Overview</Link></div>
        <div className="sub-nav">
          <Link to="/dashboard/project">Project</Link></div>
        <div className="sub-nav ">
          <Link to="/dashboard/client">Client</Link></div>
        <div className="sub-nav">
          <Link to="/dashboard/hr">HR</Link></div>
        <div className="sub-nav">
          <Link to="/dashboard/ticket">Ticket</Link></div>
        <div className="sub-nav">
          <Link to="/dashboard/finance">Finance</Link></div>
      </div>
      <div className="setting-icon">
        <RiSettings3Fill />
      </div>
    </section>
  );
}

export default DashboardTab;