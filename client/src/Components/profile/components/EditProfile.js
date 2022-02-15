import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import Navbar from '../../navbar/Navbar';
import './EditProfile.css'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {  edituser} from '../../../redux/Actions/useractions';
import { current } from "../../../redux/Actions/useractions";

const EditProfile = () => {
  const dispatch = useDispatch()
  const user = useSelector((state)=>state.UserReducer.user)
  console.log(user)
    useEffect(()=>{
     //  editprofile &&
     dispatch(current())
   },[dispatch])
  const [edit, setEdit] = useState({name :'' , email : "" , password:"" , img: ""})
  const errors = useSelector(state=>state.UserReducer.errors)


  const handleEditUSER = (e) => {
    setEdit ({...edit , [e.target.name] : e.target.value})

  }

  return <div className='divback'>
    <Navbar/>
    <div className='divProfile'>
    <div className='sidebarProfile'>
  
    </div>
         <div className='divProfileItem'>
            <div className='titleprofile'>
              
              
              <h4>Edite Profile</h4>
              {errors && 
    errors.map((error, i) => <span style={{color:'red'}} key={i}>{error.msg}</span>)}
              
            </div>
            <div className="formProfile">
  <>
  <Form.Group className="mb-3 grpinput">
    <Form.Label className='label'>Name</Form.Label>
    <Form.Control placeholder="Entrez votre Nom..." className='labeledit'  name='nom' value={edit.nom} onChange={handleEditUSER}/>
  </Form.Group>
    <Form.Group className="mb-3 grpinput">
    <Form.Label className='label'>Email</Form.Label>
    <Form.Control placeholder="Entrez votre adresse email..." className='labeledit' name='email' value={edit.email} onChange={handleEditUSER} />
  </Form.Group>  
    <Form.Group className="mb-3 grpinput">
    <Form.Label className='label'>Password</Form.Label>
    <Form.Control placeholder="Entrez votre  password..." type="password" className='labeledit' value={edit.password} onChange={handleEditUSER} />
  </Form.Group>

</>
<div className="group">
          <input  className="button" defaultValue="change"   onClick={()=>dispatch(edituser(user._id,edit))} />
        </div>
<Link to='/profile'>
<i class="fas fa-uSER-check edit" onClick={() =>dispatch(edituser(user._id,edit))}></i>
</Link>

            </div>
         </div>
         <div className="couvertphoto">
     </div>
  </div>;
  </div>
};

   
export default EditProfile;
