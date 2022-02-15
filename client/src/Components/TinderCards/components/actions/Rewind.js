import React from 'react';
import AddCircleIcon from '@material-ui/icons-material/AddCircle';
import IconButton from "@material-ui/core/IconButton";
import "./SwipeButtons.css";
const Rewind = () => (
  <div className="swipeButtons">
   <IconButton>
        <AddCircleIcon fontSize="large" className="swipeButtons__repeat" />
      </IconButton>
 </div> 
);

export default Rewind;
