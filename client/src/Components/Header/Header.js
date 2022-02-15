import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";
import ForumIcon from "@material-ui/icons/Forum";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link, useHistory } from "react-router-dom";
import "./Header.css";

function Header({ backButton }) {
  const History = useHistory();
  return (
    <div className="header1">
      {backButton ? (

           <Link to="/Profile">
  <IconButton >
          <ArrowBackIosIcon  className="header__icon" />
        </IconButton>
           </Link>
      
      ) : (
        <IconButton>
          <PersonIcon  className="header__icon" />
        </IconButton>
      )}
      <Link to="/chat">
        <IconButton>
          <ForumIcon  className="header__icon" />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
