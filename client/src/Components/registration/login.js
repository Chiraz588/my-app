import { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { clearerrors, login } from '../../redux/Actions/useractions'
import {useHistory} from "react-router-dom"
import { Button } from 'react-bootstrap'
import {Link} from "react-router-dom"
import Navbar from '../navbar/Navbar.js';
import "./reg.css"
function Login() {
  const [sigemail,setsigemail]=useState('')
  const [sigpassword,setsigpassword]=useState('')
  const dispatch = useDispatch()
  const history=useHistory()
  const errors=useSelector(state=>state.UserReducer.errors)

    return (


       <div className="background">
<Navbar/>
        {errors && errors.map(el=> alert(el.msg))}
            <div className="login-wrap">
  <div className="login-html">
    <input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked /><label htmlFor="tab-1" className="tab">Sign In</label>
    <div className="login-form">
      <div className="sign-in-htm">
        <div className="group">
          <label htmlFor="user" className="label">Email</label>
          <input id="user" type="text" className="input"  value={sigemail} onChange={(e)=>{ setsigemail(e.target.value); dispatch(clearerrors())}  } />
        </div>
        <div className="group">
          <label htmlFor="pass" className="label">Password</label>
          <input id="pass" type="password" className="input" data-type="password"  value={sigpassword} onChange={(e)=> {setsigpassword(e.target.value); dispatch(clearerrors())}  } />
        </div>
      
        <div className="group">
          <input  className="button" defaultValue="Sign In"   onClick={()=>dispatch(login({email:sigemail, password:sigpassword},history))} />
        </div>
        <div className="hr" />
        <div className="foot-lnk">
          <a href="#forgot">Forgot Password?</a>
        </div>
        <div className="foot-lnk">
        <Link  to='./Admin' >
        <Button type='submit' variant='secondary' >
          Admin Login
        </Button>
        </Link>
        </div>
      </div>

    </div>
  </div>
</div>
        </div>
    )
}

export default Login
