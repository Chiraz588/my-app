import { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { register } from '../../redux/Actions/useractions'
import {useHistory} from "react-router-dom"
import {Link} from "react-router-dom"

import Navbar from '../navbar/Navbar.js';
import "./reg.css"

function RegisterLogin() {
  const [regimg,setregimg]=useState("")
  const [regname,setregname]=useState("")
  const [regemail,setregemail]=useState("")
  const [regpassword,setregpassword]=useState("")
  
  const dispatch = useDispatch()
  const history=useHistory()
  const errors=useSelector(state=>state.UserReducer.errors)
 

    return (


        <div className="background">
<Navbar/>
          {/* {errors && errors.map(el=> alert(el.msg))} */}
            <div className="login-wrap">
  <div className="login-html">
    <input id="tab-2" type="radio" name="tab" className="sign-up" /><label htmlFor="tab-2" className="tab">Sign Up</label>
    <div className="login-form">
      {/* signup */}
      <div className="sign-up-htm">
        <div className="group">
          <label htmlFor="user" className="label">Username</label>
          <input id="user" type="text" className="input"    value={regname}  onChange={(e)=>setregname(e.target.value)} />
        </div>
        <div className="group">
          <label htmlFor="pass" className="label">Password</label>
          <input id="pass" type="password" className="input" data-type="password"  value={regpassword}  onChange={(e)=>setregpassword(e.target.value)}   />
        </div>
        
        <div className="group">
          <label htmlFor="pass" className="label">Email Address</label>
          <input id="pass" type="text" className="input"   value={regemail}  onChange={(e)=>setregemail(e.target.value)} />
        </div>
        
    </div>
        <div className="group">
          <input  className="button" defaultValue="Sign Up"  onClick={()=>dispatch(register({name:regname,password:regpassword,email:regemail},history))}  />
        </div>
        <div className="hr" />
        <div className="foot-lnk">
         <Link  to='./login' ><label htmlFor="tab-1">Already Member? </label></Link> 
         </div>
      </div>
    </div>
  </div>
</div>
     
    )
}

export default RegisterLogin
