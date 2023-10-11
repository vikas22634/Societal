import "./navbar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";

import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";

const Navbar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar" style={{ backgroundColor: "#0B1829" }}>
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>Societal</span>
        </Link>
        <HomeOutlinedIcon className="icon" />
        {darkMode ? (
          <WbSunnyOutlinedIcon onClick={toggle} className="icon" />
        ) : (
          <DarkModeOutlinedIcon onClick={toggle} className="icon" />
        )}

        <div className="search">
          <SearchOutlinedIcon className="icon" />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <NotificationsOutlinedIcon className="icon" />
        <div className="user">
          <img src={currentUser.profilePic} alt="" />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
