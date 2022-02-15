import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'
import Navbar from '../navbar/Navbar.js';
const home = () => {

	return (
		<div>
<Navbar/>
<section className='landing'>
			<div className='dark-overlay'>
				<div className='landing-inner'>
					
					<h1 className='x-large'>A Vie</h1>
					<p className='lead'>
						Create a  profile, Chat and get Find your soulmate.
					</p>
					<div className='buttons'>
						<Link to='/login' className='btn btn-light'>
							Login
						</Link>
					</div>
					<br />
					<br />
					<br />
					<h3>
                       
                        Thank you for showing interest in our dating app. <br/>
                        We will try our best to find you your best match. <br/>
                        But first how about you setup your dating profile. <br/>
                        The more life your profile has, Better the Chances. <br/>
                    </h3>
				</div>
			</div>
		</section>
</div>
	);
};

export default home;