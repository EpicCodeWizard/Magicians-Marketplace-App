import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import { Link } from "react-router-dom";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import WorkIcon from "@mui/icons-material/Work";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import InterpreterModeIcon from "@mui/icons-material/InterpreterMode";
import { useStateValue } from "./StateProvider";

function Sidebar() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="sidebar">
      <Link to="/profile" className="sidebarRow">
        <SidebarRow src={user.photoURL} title={user.displayName} />
      </Link>
      <Link to="/profile" className="sidebarRow">
        <SidebarRow Icon={AccountBoxIcon} title="Profile" />
      </Link>
      <Link to="/jobs" className="sidebarRow">
        <SidebarRow Icon={WorkIcon} title="Job Offer" />
      </Link>
      <Link to="/competition" className="sidebarRow">
        <SidebarRow Icon={LocalFireDepartmentIcon} title="Competition" />
      </Link>
      <Link to="/interview" className="sidebarRow">
        <SidebarRow Icon={InterpreterModeIcon} title="Interview" />
      </Link>
    </div>
  );
}

export default Sidebar;
