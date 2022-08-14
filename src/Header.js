import React from "react";
import "./Header.css";
import HomeIcon from "@material-ui/icons/Home";
import PaymentIcon from "@material-ui/icons/Payment";
import FlareIcon from "@mui/icons-material/Flare";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="header">
      <div className="header__left">
        <svg
          width="317"
          height="291"
          viewBox="0 0 317 291"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M72.6989 0.54545H110.625L134.56 98.2727H136.264L192.443 0.54545H230.369L206.222 146H176.392L192.159 51.3267H190.881L137.756 145.29H117.372L95.4972 50.9716H94.2898L78.3807 146H48.5511L72.6989 0.54545Z"
            fill="#3A7A6B"
          />
          <path
            d="M111.699 145.545H149.625L173.56 243.273H175.264L231.443 145.545H269.369L245.222 291H215.392L231.159 196.327H229.881L176.756 290.29H156.372L134.497 195.972H133.29L117.381 291H87.5511L111.699 145.545Z"
            fill="#3A7A6B"
          />
          <rect y="139" width="317" height="7" fill="#80AC8C" />
        </svg>
      </div>
      <div className="header__middle">
        <div className="header_option">
          <Link to="/" className="header_option">
            <HomeIcon fontSize="large" />
          </Link>
        </div>
        <div className="header_option">
          <FlareIcon fontSize="large" />
        </div>
        <div className="header_option">
          <PaymentIcon fontSize="large" />
        </div>
      </div>
      <div className="header__right">
        <div className="header__info">
          <Avatar src={user.photoURL} />
          <h4>{user.displayName}</h4>
        </div>
        <IconButton>
          <AddIcon style={{ color: "White" }} />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
