import React from 'react';
import FavoriteIcon from "@material-ui/icons/Favorite";
import IconButton from "@material-ui/core/IconButton";
import "./SwipeButtons.css";
const Like = ({ userId, modifySuperficialChoices }) => (

   <IconButton type="button"
   onClick={() => modifySuperficialChoices(userId, 'ADD_TO_LIKED_USERS')}>
   <FavoriteIcon fontSize="large" className="swipeButtons__right" />
 </IconButton>
);

export default Like;
