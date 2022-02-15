import React from 'react';
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import "./SwipeButtons.css";
const Dislike = ({ userId, modifySuperficialChoices }) => (
    <IconButton type="button"
    onClick={() => modifySuperficialChoices(userId, 'ADD_TO_DISLIKED_USERS')}>
    <CloseIcon fontSize="large" className="swipeButtons__left" />
  </IconButton>
);

export default Dislike;
