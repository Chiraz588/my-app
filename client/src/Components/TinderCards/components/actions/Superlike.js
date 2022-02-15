import React from 'react';
import StarRateIcon from "@material-ui/icons/StarRate";
import IconButton from "@material-ui/core/IconButton";
import "./SwipeButtons.css";
const SuperLike = ({ userId, modifySuperficialChoices }) => (

   <IconButton type="button"
   onClick={() => modifySuperficialChoices(userId, 'ADD_TO_SUPERLIKED_USERS')}>
   <StarRateIcon fontSize="large" className="swipeButtons__star" />
 </IconButton>
);

export default SuperLike;
