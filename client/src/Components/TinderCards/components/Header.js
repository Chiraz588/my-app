import React from 'react';
import {Link} from "react-router-dom"

const Header = () => (
  <header>
    <div className="fl">
    <Link  to="/Profile" > <button type="button">
        <img src="/images/misc/user.png" alt="User Settings" />
      </button></Link>
    </div>

   

    <div className="fl">
    <Link  to="/Messages" ><button type="button">
        <img src="/images/misc/messages.png" alt="View Messages" />
      </button></Link>
    </div>
  </header>
);

export default Header;
