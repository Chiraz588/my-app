import React from 'react';
import './Profile.css'
import {Link} from "react-router-dom"
import {Card} from 'react-bootstrap'
import { useDispatch } from "react-redux";
import { current } from "../../redux/Actions/useractions";
import { useEffect } from "react";
import Navbar from '../navbar/Navbar.js';
import { useSelector } from 'react-redux';
const Profile = () => {

	
     const dispatch=useDispatch()

     const user = useSelector((state)=>state.UserReducer.user)
	 console.log(user)
     useEffect(()=>{
      //  editprofile &&
      dispatch(current())
    },[dispatch])
  

	


	return (
		<div class="background">
 <Navbar/>
 <div class="main-container">


<header class="block">
	<ul class="header-menu horizontal-list">

		
		<li>
		<Link  to='./Tindercards/TinderCards' ><a class="header-menu-tab" href="#5"><span class="icon fontawesome-star-empty scnd-font-color"></span>Swipe</a></Link>
			   
		</li>
		
		
		
	</ul>
	
</header>



<div class="middle-container container">
	<div class="profile block"> 
	<Link to='./TinderCards/'><a class="add-button" href="#28"><span class="icon entypo-plus scnd-font-color"></span></a></Link>	
		<div class="profile-picture big-profile-picture clear">
		<Card.Img variant="top" src={user.img} className='iconUserprofile' />
		</div>
		<h1 class="user-name">{`welcome ${user.name}`}
<br></br>
<br></br>
<br></br>

		<Link to="/EditProfile" className='link-upload-profile'>
					   EDITE PROFILE
				</Link>
		
		
		</h1>
	
	
				
		
	</div>


	<ul class="social block"> 
		<li><a href="#50"/><div class="facebook icon"><span class="zocial-facebook"/></div><h2 class="facebook titular">SHARE TO FACEBOOK</h2></li>
		<li><a href="#51"/><div class="twitter icon"><span class="zocial-twitter"/></div><h2 class="twitter titular">SHARE TO TWITTER</h2></li>
		<li><a href="#52"/><div class="googleplus icon"><span class="zocial-googleplus"/></div><h2 class="googleplus titular">SHARE TO GOOGLE+</h2></li>
	</ul>
</div>



</div> 
  





  



		</div>
	);
};

export default Profile;