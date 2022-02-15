import { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { clearerrors, Invited } from '../../redux/Actions/useractions'
import {useHistory} from "react-router-dom"
import Navbar from '../navbar/Navbar.js';
import "./invitedreg.css"
function Invitedreg() {
  const [siNickName,setsiNickName] = useState("")
  const dispatch = useDispatch()
  const history=useHistory()
  const errors=useSelector(state=>state.UserReducer.errors)
    return (


        <div className="background">
<Navbar/>
          {errors && errors.map(el=> alert(el.msg))}
            <div className="login-wrap">
  <div className="login-html">
    <input id="tab-1" type="radio" name="tab" className="invited" defaultChecked /><label htmlFor="tab-1" className="tab">invited</label>
    <div className="login-form">
      <div className="invited-htm">
        <div className="group">
          <label htmlFor="user" className="label">NickName</label>
          <input id="user" type="text" className="input"  value={siNickName} onChange={(e)=>{ setsiNickName(e.target.value); dispatch(clearerrors())}  } />
        </div>
        <div className="group">
          <input  className="button" defaultValue="goooo"  onClick={()=>dispatch(Invited({NickName:siNickName},history))}  />
        </div>
        
       
      </div>
    </div>
  </div>
</div>
        </div>
    )
}

export default Invitedreg
